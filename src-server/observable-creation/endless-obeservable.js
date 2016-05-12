import Rx from 'rxjs/Rx';
import {createSubscriber} from '../lib/util';

const everySecond$ = createInterval(1000);
everySecond$.subscribe(createSubscriber('one'));

function createInterval(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        setInterval(() => observer.next(index++), time);
    });
}