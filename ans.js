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

function getResult(finalArr, currArr, inputArr, target, nodeIndex) {
    // > 0
    if(target > 0) {
        // loop
        for(let i = nodeIndex; i < inputArr.length && target >= inputArr[i].num; i++) {
            // need to copy?
            currArr.push(inputArr[i]);

            /*
            console.log('----');
            console.log(inputArr[i]);
            console.log(currArr);
            console.log(target);
            */

            getResult(finalArr, currArr, inputArr, target - inputArr[i].num, i);

            // found, remove last item
            currArr.splice(-1,1);
        }
    }
    else if(target === 0){
        // result
        // if no copy, always ref
        let currArr1 = currArr.slice(0);

        /*
        console.log('-- currArr --');
        console.log(currArr1);
        */

        finalArr.push(currArr1);
    } else {
        console.log('err');
    }
}

function sortNumber(a,b) {
    return a.num - b.num;
}


function getOptCombo(arr) {
    if(arr.length === 1) {
        return arr;
    }

    // get the min pack
    let minNum = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;
    for(let i=0; i<arr.length; i++) {
        let subArr = arr[i];
        let accNum = subArr.length;

        if(accNum < minNum) {
            // test
            //console.log('-- here --');
            //console.log(accNum);

            minNum = accNum;
            minIndex = i;
        } else {

        }
    }

    /*
    console.log('-- min --');
    console.log(minNum);
    console.log(minIndex);
    console.log(arr[minIndex]);
    */

    // get min value
}

async function comSum(inputArr, target) {
    // sort
    inputArr.sort(sortNumber);

    let finalArr = [];
    let currArr = [];
    let nodeIndex = 0;

    await getResult(finalArr, currArr, inputArr, target, nodeIndex);

    await console.log('------- final: done one def --------');
    await console.log(finalArr);

    let outArr = await getOptCombo(finalArr);

    //return outArr;
}


async function main() {
    // get cart
    let inputArr = getInput();
    // get def
    let def = getDef();

    // loop each order
    for(let i=0; i<inputArr.length; i++) {
        let orderObj = inputArr[i];
        let key = Object.keys(orderObj)[0];
        let orderNum = orderObj[key];

        // one item def
        let defSubArr = def[key];

        await console.log(`-- key: ${key} --`);
        await console.log(defSubArr);

        // loop each def, in this order
        for(let j=0; j<defSubArr.length; j++) {
            await comSum(defSubArr, orderNum);
        }
    }
}


// -- run --
main();

/*
let input = [2, 5, 8];
let target = 14;
*/

/*
let input = [3, 5, 9];
let target = 13;
*/
