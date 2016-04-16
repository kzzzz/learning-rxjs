import Rx from 'rxjs/Rx';

const everySecond$ = createInterval(1000);
// const first5Seonds$ = everySecond$.take(5);
const first5Seonds$ = take(everySecond$, 5);
const subscription = first5Seonds$.subscribe(createSubscriber('one'));

// setTimeout(()=> {
//     subscription.unsubscribe();
// }, 3500);

function createSubscriber(tag) {
    return {
        next: (item) => console.log(`${tag}.next(${item})`),
        error: (error)=> console.log(`${tag}.error(${error})`),
        complete: ()=> console.log(`${tag}.complete`)
    }
}

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
                observer.next(item);

                if(++count >= times){
                    observer.complete();
                }
            },
            error: error => observer.error(error),
            complete: ()=> observer.complete()
        });

        return () => subscription.unsubscribe();
    });
}