import Rx, {Subject}  from 'rxjs/Rx';

// Logic (functional)
function main(DOMSource) {
    const click$ = DOMSource;
    return {
        DOM: click$
            .switchMap(()=> {
                Rx.Observable.timer(0, 1000)
                    .map(i => `Seconds elapsed ${i}`)
                    .take(10)
            }),
        Log: Rx.Observable.timer(0, 2000)
            .map(i => 2 * i)
            .take(5)
    }
}


// Effects (imperative)
function DOMDriver(text$) {

// sink: output (write) effects
    text$.subscribe(text => {
        const container = document.querySelector('#app');
        container.textContent = text;
    });

// source: input (read) effects
    const DOMSource = Rx.Observable.fromEvent(document, 'click');
    return DOMSource;
}

function consoleLogDriver(msg$) {
    msg$.subscribe(msg => console.log(msg));
}

const drivers = {
    DOM: DOMDriver,
    Log: consoleLogDriver
};

function run(mainFn, drivers) {
    const proxyDOMSource = new Subject();
    const sinks = mainFn(proxyDOMSource);
    const DOMSource = drivers.DOM(sinks.DOM);

    DOMSource.subscribe(click => proxyDOMSource.next(click));

    // const sinks = mainFn();
    // Object
    //     .keys(drivers)
    //     .forEach(key => effects[key](sinks[key]));
}

// Run: apply the effects on the observables
run(main, drivers);