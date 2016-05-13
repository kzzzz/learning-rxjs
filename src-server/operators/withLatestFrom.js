import Rx from 'rxjs/Rx';

// Rx.Observable.interval(1000)
//     .withLatestFrom(Rx.Observable.interval(500))
//     .take(10)
//     .subscribe(x => console.log(x));

Rx.Observable.from([1,2,3])
    .withLatestFrom(Rx.Observable.from([1,2,3,4]))
    .subscribe(x => console.log(x));