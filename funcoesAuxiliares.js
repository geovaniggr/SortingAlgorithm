const data = require('./data');


const reducer = (accumulator, currentValue) => accumulator + currentValue;
const somatorio = array => array.map(element => element.y).reduce(reducer);


const bubbleData = {
    Media1k: 0,
    Media10k: 0,
    Media100k: 0,
}

const quickData = {
    Media1k: 0,
    Media10k: 0,
    Media100k: 0,
}

bubbleData.Media1k = somatorio(data.SortingData.bubble1k) / 10 / 1000;
bubbleData.Media10k = somatorio(data.SortingData.bubble10k) / 10 / 1000;
bubbleData.Media100k = somatorio(data.SortingData.bubble100k) / 10 / 1000;

quickData.Media1k = somatorio(data.SortingData.quicksort1k) / 10 / 1000;
quickData.Media10k = somatorio(data.SortingData.quicksort10k) / 10 / 1000;
quickData.Media100k = somatorio(data.SortingData.quicksort100k) / 10 / 1000;

console.log(bubbleData);
console.log(quickData);
