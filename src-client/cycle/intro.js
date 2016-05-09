import Rx from 'rxjs/Rx';

// Logic (functional)
function main() {
    return {
        DOM: Rx.Observable.timer(0, 1000)
            .map(i => `Seconds elapsed ${i}`)
            .take(10),
        Log: Rx.Observable.timer(0, 2000)
            .map(i => 2 * i)
            .take(5)
    }
}

// source: input (read) effects
// sink: output (write_ effects

// Effects (imperative)
function DOMDriver(text$) {
    text$.subscribe(text => {
        const container = document.querySelector('#app');
        container.textContent = text;
    });
}

function consoleLogDriver(msg$) {
    msg$.subscribe(msg => console.log(msg));
}

const drivers ={
    DOM: DOMDriver,
    Log: consoleLogDriver
};

function run(mainFn, effects) {
    const sinks = mainFn();
    Object
        .keys(effects)
        .forEach(key => effects[key](sinks[key]));
}

// Run: apply the effects on the observables
run(main, drivers);

// Why RxJS: it allows you to specify the dynamic behavior of a value completely at the time of declaration