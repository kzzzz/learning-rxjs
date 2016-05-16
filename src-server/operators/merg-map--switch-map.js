import Rx from 'rxjs/Rx';

// let people = [
//     {name: 'Jantje', payments: [{name: 'payments 1'}, {name: 'payments 2'}]},
//     {name: 'Pietje', payments: [{name: 'payments 3'}, {name: 'payments 4'}]}
// ];
//
// // Array.map() implementation
// function arrayMap(values, projection) {
//     let mapped = [];
//
//     for (let value of values) {
//         let item = projection(value);
//         mapped.push(item);
//     }
//
//     return mapped;
// }
// let peopleNames = arrayMap(people, p => p.name);
//
// console.log(peopleNames);
//
// // flat map = SelectMany(LINQ)
// function arrayMergeMap(arr, projection) {
//     let mapped = [];
//
//     for (let item of arr) {
//         let projectedArray = projection(item);
//
//         for (let projected of projectedArray) {
//             mapped.push(projected);
//         }
//     }
//     return mapped;
// }
//
// let payments = arrayMergeMap(people, x => x.payments);
// console.log(payments);
//
// // After 2 second for each item from source stream, an observable created
// Rx.Observable
//     .range(2, 3) // source 2, 3, 4
//     .mergeMap(i => Rx.Observable  // all the observables are flatten into on Observable
//         .timer(i * 2000) // for each item from the source observable, an new observable created
//         .map((() => `After ${i * 2} seconds`)))
//     .subscribe(x => console.log(x));

//-------2-----3-----4------|---------->
//----------2i------------------------->
//----------------3i------------------->
//----------------------4i------------->
// mergeMap
//----------2i----3i----4i------------->

// // Flat an array from promise to an observable so that each item (of the array) can be operated individually
// Rx.Observable.fromPromise(getTracks())
//     .mergeMap(tracks => Rx.Observable.from(tracks))
//     .subscribe(x => console.log(x));

// function getTracks() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve(['track 1', 'track 2', 'track 3']);
//         }, 1000)
//     })
// }

Rx.Observable.of('my keyup event for example')
    .do(()=>console.log('start querying'))
    .mergeMap(searchKeyWord => query(searchKeyWord))
    .do(()=>console.log('after querying'))
    .subscribe(x => console.log(x));

function query(value) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve('THIS IS THE QUERY RESULT');
        }, 1000)
    })
}