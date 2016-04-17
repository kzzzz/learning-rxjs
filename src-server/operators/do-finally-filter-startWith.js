import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// do () - create side effects
//
// Rx.Observable.range(1, 10)
//     .do(n => console.log(`from do(): ${n + 500}`))
//     .map(a => a)
//     .subscribe(createSubscriber('do'));


// // finally - affect side effects when the sequence completes
//
// Rx.Observable.range(1, 10)
//     .finally(() => console.log(`from finally() - finally() will be called after all completes`))
//     .map(a => a)
//     .subscribe(createSubscriber('finally'));
//
// // filter
// // when filter, the sequence does not stop with processing
// Rx.Observable.range(1, 10)
//     .filter(n => n < 2 || n > 5)
//     .subscribe(createSubscriber('filters'));

// startWith
Rx.Observable.range(1, 10)
    .startWith(5)
    .subscribe(createSubscriber('startWith'));