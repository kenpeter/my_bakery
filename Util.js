class Util {
    constructor(def) {
        this.def = def;
    }

    testme() {
        console.log(this.def);
    }

    getOptCombo(arr) {
        if(arr.length === 1) {
            return arr;
        }

        // get the min pack
        let minNum = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;
        for(let i=0; i<arr.length; i++) {
            let subArr = arr[i];
            let accNum = subArr.length;

            if(accNum < minNum) {
                minNum = accNum;
                minIndex = i;
            } else {

            }
        }

        /*
        // test
        console.log('-- min --');
        console.log(minNum);
        console.log(arr[minIndex]);
        */

        // look for same minNum in arr
        let compareArr = [];
        for(let i=0; i<arr.length; i++) {
            let subArr = arr[i];
            let accNum = subArr.length;
            if(accNum === minNum) {
                compareArr.push(subArr);
            } else {

            }
        }

        if(compareArr.length > 1) {
            let maxSum = Number.MIN_SAFE_INTEGER;
            let maxIndex = -1;
            for(let i=0; i<compareArr.length; i++) {
                let tmpArr = compareArr[i];

                //console.log('-- tmp arr --');
                //console.log(tmpArr);

                let tmpSum = 0;
                for(let j=0; j<tmpArr.length; j++) {
                    let item = tmpArr[j];
                    let price = item.price;
                    tmpSum += price;
                }

                if(tmpSum > maxSum) {
                    maxSum = tmpSum;
                    maxIndex = i;
                } else {

                }
            }

            return [compareArr[maxIndex]];
        }

        // get min value

    }

    getResult(finalArr, currArr, inputArr, target, nodeIndex) {
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

                this.getResult(finalArr, currArr, inputArr, target - inputArr[i].num, i);

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

    sortNumber(a,b) {
        return a.num - b.num;
    }

    async comSum(inputArr, target) {
        // sort
        inputArr.sort(this.sortNumber);

        let finalArr = [];
        let currArr = [];
        let nodeIndex = 0;

        await this.getResult(finalArr, currArr, inputArr, target, nodeIndex);

        //test
        //await console.log('------- final: done one def --------');
        //await console.log(finalArr);

        let outArr = await this.getOptCombo(finalArr);

        await console.log('-- res --');
        await console.log(outArr);

        return outArr;
    }


    async calCart(inputArr) {
        // loop each order
        for(let i=0; i<inputArr.length; i++) {
            let orderObj = inputArr[i];
            let key = Object.keys(orderObj)[0];
            let orderNum = orderObj[key];

            // one item def
            let defSubArr = this.def[key];

            await console.log(`-- key: ${key} --`);
            //await console.log(`-- def --`);
            //await console.log(defSubArr);

            await this.comSum(defSubArr, orderNum);
        }
    }


}

module.exports = Util;