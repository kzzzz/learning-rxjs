"use strict";

var gulp = require('gulp');
var cached = require('gulp-cached');
var gulpbabel = require('gulp-babel');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var path = require('path');
var fs = require('fs');

gulp.task('script:server', () =>
    gulp
        .src('./src-server/**/*.js')
        .pipe(cached('server'))
        .pipe(gulpbabel())
        .pipe(gulp.dest('./build'))
);

gulp.task('watch:script:server',
    gulp.series('script:server',
        () => gulp.watch('./src-server/**/*.js', gulp.series('script:server'))
    )
);

gulp.task('watch:scripts:client', () => {
    const files = fs.readdirSync('./src-client');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (path.extname(file) !== '.js')
            continue;

        initBundlerWatch(path.join('src-client', file));
    }

    return gulp
        .watch('./src-client/**/*.js')
        .on('change', initBundlerWatch);
});

let bundlers = {};

function initBundlerWatch(file) {
    if (bundlers.hasOwnProperty(file))
        return;

    const bundler = createBundler(file);
    const watcher = watchify(bundler);
    const filename = path.basename(file);

    watcher.on('update', bundle);
    watcher.on('time', time => console.log(`Build client in $(time}ms`));

    bundle();

    function bundle() {
        return bundler
            .bundle()
            .on('error', error => console.error(error))
            .pipe(source(filename))
            .pipe(gulp.dest('./public/build'));
    }
}

function createBundler(file) {
    const bundler = browserify(file);
    bundler.transform(babelify);
    return bundler;
}