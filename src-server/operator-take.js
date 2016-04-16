import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

const everySecond$ = createInterval(1000);
// const first5Seonds$ = everySecond$.take(5);
const first5Seonds$ = take(everySecond$, 5);
const subscription = first5Seonds$.subscribe(createSubscriber('one'));

// setTimeout(()=> {
//     subscription.unsubscribe();
// }, 3500);

function createInterval(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`generating: ${index}`);
            observer.next(index++);
        }, time);

        // stop generating after unsubscription of observers;
        return () => clearInterval(interval);
    });
}

// Operator: an observable which wraps another observable

function take(sourceObservable$, times) {
    return new Rx.Observable(observer => {

        let count = 0;

        const subscription = sourceObservable$.subscribe({
            next: item => {
                // this function [next()] transforms stream
                observer.next(item);

                if(++count >= times){
                    observer.complete();
                }
            },
            error: error => observer.error(error),
            complete: ()=> observer.complete()
        });

        // this will be called when observers unsubscribes from take operator/observable
        return () => subscription.unsubscribe();
    });
}