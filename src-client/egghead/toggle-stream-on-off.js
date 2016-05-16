import Rx from 'rxjs/Rx';

let display = document.querySelector('#display');
let toggle = document.querySelector('#toggle');

let source$ = Rx.Observable.interval(100)
    .map(x => '.');

let checked$ = Rx.Observable
    .fromEvent(toggle, 'change')
    .map(e => e.target.checked);

checked$
    .filter(x => x === true)
    .switchMap(()=>source$.takeUntil(checked$))
    .subscribe(x => display.innerText += x);