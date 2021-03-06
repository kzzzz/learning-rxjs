var promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('promise timeout hit');
    }, 1000);

    console.log('promise started');
});

promise.then(x => console.log(x));

import Rx from 'rxjs/Rx';
// observable can be cancelled.
// can be retried when there is an error
var obsevable$ = Rx.Observable.create(observer => {
    let timeoutId = setTimeout(()=> {
        console.log('observable timeout hit');
    }, 1000);

    console.log('observable started');

    return () => {
        console.log('unsubscribed!');
        clearTimeout(timeoutId)
    }
});

var disposible = obsevable$.subscribe(x => console.log(x));

// cancel subscription after 500 ms, before it being executed.
setTimeout(()=> {
    disposible.unsubscribe();
}, 500);