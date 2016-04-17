import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// // Merge - syntax 1
// Rx.Observable.interval(1000)
//     .merge(Rx.Observable.interval(500))
//     .take(10)
//     .subscribe(createSubscriber('merge-1'));

//
// // Merge - syntax 2
// Rx.Observable.merge(
//     Rx.Observable.interval(1000).map(i => `${i} seconds`),
//     Rx.Observable.interval(500).map(i => `${i} half seconds`))
//     .take(10)
//     .subscribe(createSubscriber('merge-2'));

// Usage: subscribe to different event

// const currentUser$ = Rx.Observable.merge(
//     socket.on$('login').map(user => processUser(user)),
//     socket.on$('logout').map(()=>null)// do nothing
// ).subscribe(...)


// Concat vs Merge
// Concat: alle streams achter elkaar
// Merge: alles streams door elkaar

// ---a----b--|------------------->
// ------m------n--|-------------->
// ---a----b--|------m------n--|-->  Concat

// ---a----b--|------------------->
// ------m------n--|-------------->
// ---a--m-b----n--|-------------->  Merge

