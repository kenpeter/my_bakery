
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

function main() {
    let def = getDef();
    let util = new Util(def);
    util.testme();
}

// -- run --
main();
