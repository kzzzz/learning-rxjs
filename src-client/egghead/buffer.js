import Rx from 'rxjs/Rx';

let btn = document.querySelector('#clickMe');
let clicks$ = Rx.Observable.fromEvent(btn, 'click');

// let open = Rx.Observable.interval(1000);

// clicks$
//     .map(x => x)
//     .scan((acc, value, i, source) => acc + 1, 0)
//     .buffer(open)
//     .filter(x => x.length > 0)
//     .subscribe(x => sendValues(x));

clicks$
    .map(x => x)
    .scan((acc, value, i, source) => acc + 1, 0)
    .buffer(clicks$.throttleTime(1000))
    .filter(x => x.length > 0)
    .subscribe(x => sendValues(x));

function sendValues(arr) {
    let pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(arr);

    document
        .querySelector('#buffer-results')
        .appendChild(pre);
}