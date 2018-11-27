function getDef() {
    let cart = {
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

    return cart;
}

function getInput() {
    let input = [
        {VS5: 10},
        {MB11: 14},
        {CF: 13},
    ];
    return input;
}

function backtrack() {

}

function main() {
    let inputArr = getInput();
    let def = getDef();

    for(let i=0; i<inputArr.length; i++) {
        let item = inputArr[i];
        let key = Object.keys(item)[0];
        let val = item[key];

        let defSubArr = def[key];

        console.log('-----------');
        console.log('key: ' + key);
        console.log('val: ' + val);
        //console.log(defSubArr);

        console.log('==');
        for(let j=0; j<defSubArr.length; j++) {
            let num = defSubArr[j].num;
            let price = defSubArr[j].price;
            console.log('num: ' + num);
            console.log('price: ' + price);


            backtrack(val, num, price);
        }
    }


}


// -- run --
main();