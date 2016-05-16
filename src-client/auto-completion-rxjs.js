import $ from 'jquery';
import Rx from 'rxjs/Rx';

const $title = $('#title');
const $result = $('#result');

Rx.Observable.fromEvent($title, 'keyup')
    .map(e => e.target.value)
    .distinctUntilChanged()// do nothing unless the search key word changed (arrow key moves will be ignored)
    .debounceTime(300)
    .switchMap(getItems) // take last getItems result, if getItems being fired many times during waiting for the async response from te server, ignore the earlier result, and just take the last one
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
