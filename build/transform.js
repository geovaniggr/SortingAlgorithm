const val = require('./data');

const newValue = val.SortingData.bubble10k;

const newType = newValue.map( element => element.y / 1e+6)
console.log(newType);

newValue.map( (element, index) => {
    element.y = newType[index];
})

console.log(newValue);