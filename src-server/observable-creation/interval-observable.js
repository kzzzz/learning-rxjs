import Rx from 'rxjs/Rx';
import {createSubscriber} from '../lib/util';

function createInterval$(time) {
    return new Rx.Observable(observer => {
        let count = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${count}`);
            observer.next(++count);
        }, time);

        // this will be called when observer unsubscribes.
        return () => clearInterval(interval);
    })
}

const everySecond$ = createInterval$(1000);
const subscription = everySecond$.subscribe(createSubscriber('one'));

setTimeout(()=> {
    subscription.unsubscribe();
}, 5500); // after 5.5 secs, unsubscribe to the everySeconds$ observable.


