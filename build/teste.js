const process = require('process');

function testar(nome, fodase) {

    const top = ['./arrays/content/1K_Array_',
    './arrays/content/1K_Array_',
    './arrays/content/10K_Array_',
    './arrays/content/100K_Array_',
    './arrays/content/1M_Array_',]

    const arquivo = top[nome] + fodase;
    
    console.log(arquivo);
}

testar(process.argv[2], process.argv[3]);