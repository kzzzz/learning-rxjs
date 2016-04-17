import Rx from 'rxjs/Rx';
import fs from 'fs';
import {createSubscriber} from './lib/util';

fs.readdir('./src-server', (err, items)=> {
    if (err) {
        console.error(err);
    } else {
        console.log(items);
    }
});


const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir);

readdir$('./src-server')
    .mergeMap(files => Rx.Observable.from(files))
    .map(file => file)
    .subscribe(createSubscriber('readdir'));

