import $ from 'jquery';

const $title = $('#title');
const $result = $('#result');

let lastQuery = null;
let lastTimeout = null;
let nextQueryId = null;

$title.on('keyup', e => {
    const title = e.target.value;

    if (title == lastQuery) {
        return;
    }

    if (lastTimeout) {
        window.clearTimeout(lastTimeout);
    }

    let ourQueryId = ++nextQueryId;

    lastTimeout = window.setTimeout(() => {
        getItems(title).then(renderItems);
    }, 500);


    function renderItems(items) {
        if(ourQueryId != nextQueryId){
            return;
        }

        $result.empty();

        const $items = items.map(item => $(`<li />`).text(item));

        $result.append($items);
    }
});


function getItems(title) {
    console.log(`QueryString ${title}`);

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
