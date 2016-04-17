import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// ------------------ HOT Observable ------------------------------------

const intervalHot$ = Rx.Observable.interval(1000)
    .take(5);

setTimeout(() =>intervalHot$.subscribe(createSubscriber('hot.one')), 1200);
setTimeout(() =>intervalHot$.subscribe(createSubscriber('hot.two')), 3200);

// ------------------ COLD Observable ------------------------------------

const intervalCold$ = Rx.Observable.interval(1000)
    .take(5)
    .publish();

// subscribe() does not cause the Observable(interval$) to execute
// only connect() does
intervalCold$.connect();

setTimeout(() =>intervalCold$.subscribe(createSubscriber('cold.one')), 1200);
setTimeout(() =>intervalCold$.subscribe(createSubscriber('cold.two')), 3200);


