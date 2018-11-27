const expect = require('chai').expect;
const sinon = require('sinon');
const Util = require('../Util');

testName = 'test calCart';
describe(testName, () => {
    it(testName, () => {
        let def = getDef();
        let input = getInput();
        let util = new Util(def);
        let res = util.calCart(input);

        console.log(JSON.stringify(res, null, 4));
        let num = res[0][0][0].num;
        expect(num).to.equal(5);
    });
});


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