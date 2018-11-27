
var Util = require('./Util.js');


function getDef() {
    let def = {
        VS5: [
            {
                num: 3,
                price: 6.99,
            },
            {
                num: 5,
                price: 8.99,
            },
        ],

        MB11: [
            {
                num: 2,
                price: 9.95,
            },
            {
                num: 5,
                price: 16.95,
            },
            {
                num: 8,
                price: 24.95,
            },
        ],

        CF: [
            {
                num: 3,
                price: 5.95,
            },
            {
                num: 5,
                price: 5.95,
            },
            {
                num: 9,
                price: 16.99,
            },
        ],
    };

    return def;
}

function getInput() {
    let input = [
        {VS5: 10},
        {MB11: 14},
        {CF: 13},
    ];
    return input;
}

function main() {
    let def = getDef();
    let input = getInput();
    let util = new Util(def);

    let out = util.calCart(input);

    // output
    console.log(JSON.stringify(out, null, 4));
}

// -- run --
main();
