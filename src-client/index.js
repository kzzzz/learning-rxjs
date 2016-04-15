import $ from 'jquery';
import Rx from 'rxjs/Rx';

const $title = $('#title');
const $result = $('#result');

Rx.Observable.fromEvent($title, 'keyup')
    .map(e => e.target.value)
    .distinctUntilChanged()
    .debounceTime(300)
    .switchMap(getItems)
    .subscribe(items => renderItems(items));

// const keyups$ = Rx.Observable.fromEvent($title, 'keyup');
// const queries$ = keyups$
//     .map(e => e.target.value)
//     .distinctUntilChanged()
//     .debounceTime(300)
//     // .mergeMap(getItems) // flatMap / SelectMany
//     .switchMap(getItems); //  flatMapLatest
//
// queries$.subscribe(items => renderItems(items));

function renderItems(items) {
    $result.empty();

    const $items = items.map(item => $(`<li />`).text(item));

    $result.append($items);
}

function getItems(title) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([
                title,
                'title 2',
                `another ${Math.random()}`
            ]);
        }, 500 + (Math.random() * 200));
    });
}
