import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

//// ----------------- interval() ------------------

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber('interval'));

// the process will not exit until the timer finished

//// ----------------- timer() ------------------

// Rx.Observable.timer(1000, 500) // 1000 - wait one second, 500 - each half second
//     .take(5)
//     .subscribe(createSubscriber('timer'));

//// ----------------- of() ------------------

// Rx.Observable.of('A string', 123, new Date(), true, {name: 'an object'})
//     .subscribe(createSubscriber('of'));

//// ----------------- from() ------------------

// // Accepct an array-like/iteratable type (string/array/etc.)
// Rx.Observable.from([100, 200, 300])
//     .subscribe(createSubscriber('from'));

// Rx.Observable.from(generateNumbers)
//     .subscribe(createSubscriber('from'));
//
// function* generateNumbers(){
//     yield 1;
//     yield 300;
//     yield 500;
// }

//// ----------------- throw() ------------------

// Rx.Observable.throw(new Error('something bad'))
//     .subscribe(createSubscriber('error'));

//// ----------------- empty(), never() ------------------

// // empty() does NOT produce item, but DO complete
// Rx.Observable.empty()
//     .subscribe(createSubscriber('empty'));

// // never() does NOT produce item, does NOT complete
// Rx.Observable.never()
//     .subscribe(createSubscriber('never'));

//// ----------------- defer() ------------------
//// - create observable from side effects
// let sideEffect = 0;
// const defer$ = Rx.Observable.defer(()=> {
//     ++sideEffect;
//     return Rx.Observable.of(sideEffect);
// });
//
// defer$.subscribe(createSubscriber('defer$.one'));
// defer$.subscribe(createSubscriber('defer$.two'));
// defer$.subscribe(createSubscriber('defer$.three'));

//// ----------------- range() ------------------
Rx.Observable.range(10, 10)
    .subscribe(createSubscriber('range'));