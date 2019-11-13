const ordenar = require('./Quicksort');
const fs = require('fs');
const util = require('util');

function salvarArquivo(content) {
    const contentString = `${content.nomeDoArquivo} ${content.tamanhoProblema} ${content.leitura} ${content.ordenar} Core_i3_1.5_GHz QuickSort Javascript_Node12.11 Ubuntu_19.04 64bits Nao_Ordenado 11270681`;
    console.log(contentString);
    //return fs.writeFileSync('array1.txt', contentString);
}

function ordenarArray(arquivo, data) {
    let transformar = 1e9;
    let time = process.hrtime();
    const array = arquivo.split('\n').map(Number);
    ordenar.quickSort(array, 0, array.length - 1);
    const tempoDeOrdenacao = process.hrtime(time);
    const tempoFinalOrdenacao = tempoDeOrdenacao[0] * transformar + tempoDeOrdenacao[1];
    //console.log(`O tempo de ordenação foi de: ${tempoDeOrdenacao[0]}`);

    data = {...data,
        "ordenar": tempoFinalOrdenacao,
        array,
    };

    return salvarArquivo(data);
    
}

function carregarArquivo(nomeDoArquivo, nome, tamanhoProblema) {
    let transformar = 1e9;
    let time = process.hrtime(); 
    const arquivo = fs.readFileSync(nomeDoArquivo, 'utf-8');
    let tempoDeLeitura = process.hrtime(time);
    //console.log(`O tempo de leitura foi de: ${tempoDeLeitura[0]}`);
    let tempoFinal = tempoDeLeitura[0] * transformar + tempoDeLeitura[1];
    const data = {
        "leitura": tempoFinal,
        "nomeDoArquivo": nome,
        tamanhoProblema
    }
    
    return ordenarArray(arquivo, data);
    
}

const nomeDoArquivo = ( tamanhoArray, numeroDoArray) => {

    const formato = [
    './arrays/content/1K_Array_',
    './arrays/content/10K_Array_',
    './arrays/content/100K_Array_',
    './arrays/content/1M_Array_',]

    const nome = [
        `1K_Array_${numeroDoArray}`,
        `10K_Array_${numeroDoArray}`,
        `100K_Array_${numeroDoArray}`,
        `1M_Array_${numeroDoArray}`,
    ]

    const tamanhoProblema = [1000, 10000, 100000,1000000]

    const formatoArquivo = formato[tamanhoArray] + numeroDoArray + ".txt"; 

    return carregarArquivo(formatoArquivo, nome[tamanhoArray], tamanhoProblema[tamanhoArray] );
}

nomeDoArquivo(process.argv[2], process.argv[3])