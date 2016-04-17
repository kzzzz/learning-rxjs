import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

const simple$ = new Rx.Subject();

// DON'T USE SUBJECT IF YOU CAN MAKE IT WORK OTHER WAY

// An Subject is both Observable and Observer;
// Subjects are used to bridge non-reactive code with reactive code

// Type of Subject
// - BehaviorSubject
// - ReplaySubject
// - AsyncSubject

// ----Subject is an Observer----
simple$.subscribe(createSubscriber('simple$'));

// ----Subject is an Observable----

simple$.next('Item 1');
simple$.next('Item 2');
simple$.complete();
