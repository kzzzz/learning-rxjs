import Rx from 'rxjs/Rx';

const everySecond$ = createInterval(1000);
everySecond$.subscribe(createSubscriber('one'));

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
        setInterval(() => observer.next(index++), time);
    });
}