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

function take$(sourceObservable$, amount) {
    return new Rx.Observable(observer => {
        let count = 0;
        const subscription = sourceObservable$.subscribe({
            next: item => {
                observer.next(item);

                if (++count >= amount) {
                    observer.complete();
                }
            },
            error: error => console.log(error),
            complete: () => console.log('take observable done!')
        });

        return () => subscription.unsubscribe();
    })
}

const everySecond$ = createInterval$(1000);
const first5seconds$ = take$(everySecond$, 5);
const subscription = first5seconds$.subscribe(createSubscriber('one'));