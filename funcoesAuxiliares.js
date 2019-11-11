const data = require('./data');


const reducer = (accumulator, currentValue) => accumulator + currentValue;
const somatorio = array => array.map(element => element.y).reduce(reducer);


const newValue = data.SortingData.bubble10k;

const newType = newValue.map( element => element.y / 1e+6)

newValue.map( (element, index) => {
    element.y = newType[index];
})