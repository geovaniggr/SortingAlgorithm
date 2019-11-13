const fs = require('fs');
const $ = require('./Quicksort');
const bubble = require('./BubbleSort');
const process = require('process');

const ordenar = (array, qtde) => {
    const time = process.hrtime();
    //$.quickSort(array, 0, array.length -1);
    bubble.bubbleSort(array);
    const tempoFinal = process.hrtime(time);
    const tempoTotal = tempoFinal[0] * 1e9 + tempoFinal[1];
    console.log(`O tempo de execução foi de ${tempoTotal} nanosegundos --- ${tempoTotal / 1e+9} segundos`)
    return criarDados(`{x:${qtde}, y:${tempoTotal}},\n`, qtde)
}

function criarDados(tempo, nome) {

    fs.appendFile(`Data-Quick-${nome}.txt`, tempo, function(err){
        if(err) throw err;
    });
}

function lerArquivo(nome, tipo) {
    const file = fs.readFileSync(nome, 'utf-8');
    const array = file.split(',').map(Number); 
    ordenar(array, tipo);
}

(function main() {

    for(let i = 0; i < 50; i++){
        lerArquivo(`./content/array-${i}-1000.txt`, 1000)
    }
    for(let i = 0; i < 50; i++){
        lerArquivo(`./content/array-${i}-10000.txt`, 10000)
    }
    for(let i = 0; i < 50; i++){
       lerArquivo(`./content/array-${i}-100000.txt`, 100000)
    }


})();