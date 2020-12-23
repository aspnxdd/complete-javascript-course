// Remember, we're gonna use strict mode in all scripts now!
'use strict';



const printForecast = arr => {
    let str = '';
    for (let i = 0; i <= arr.length - 1; i++) {

        str = str + (`...${arr[i]}ºC in ${i+1} days`);

    }
    return str;
}
const arr = [17, 21, 23]
console.log(printForecast(arr));