const $ = require('../Quicksort');
const bubble = require('../BubbleSort');

const dataDesorganizado = [];

//     let arrayDesorganizado = [];
//     popularArray(arrayDesorganizado, 'desordenado');
//     tempoDeExecucao(arrayDesorganizado, dataDesorganizado);
// }
const popularArray = (array, tipo) => {
    if(tipo === "ordenado") {
        for( let i = 0; i < 500; i++){
            array[i] = i;
        }
    } else {
        for(let i = 0; i < 500; i++){
            array[i] = Math.trunc(Math.random() * 500);
        }
    }
}


const ordenar = array => $.quickSort(array, 0, array.length - 1);

const borbulhar = array => bubble.bubbleSort(array);

function tempoDeExecucao(array) {
    let transformar = 1e9;
    let time = process.hrtime();
    borbulhar(array);
    let time2 = process.hrtime(time);
    console.log(`O tempo de execução foi: ${ time2[0] * transformar + time2[1]}`);
    //console.log(`{x: 0, y:${diff}}, `);
}
let ArrayDesorganizado =[];

for(let i = 0; i < 1; i++) {
    popularArray(ArrayDesorganizado, "desorganizado");
    tempoDeExecucao(ArrayDesorganizado, dataDesorganizado);
}