// Create an Observable from generator function
import Rx from 'rxjs/Rx';

// Observable pass a generator function as constructor parameter
let textGenerator$ = new Rx.Observable(observer => {
    console.log('Generating observable');
    setTimeout(()=> {
        observer.next('Item 1');

        setTimeout(()=> {
            observer.next('Item 2');

            observer.complete();

        }, 1000);

    }, 1000)
});

textGenerator$.subscribe(onOk, onError, onCompletion);

function onOk(result) {
    console.log(result);
}

function onError(error) {
    console.log(error);
}

function onCompletion() {
    console.log('Done!');
}

// Observable which produces an error

const error$ = new Rx.Observable(observer => {
    observer.error(new Error('Something bad happened!'));
});

error$.subscribe(
    () => {},
    error => console.log(`Error: ${error.stack}`));