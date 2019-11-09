const file = require('fs');

function getData() {
    const fileData = file.readFileSync('Respostas.txt', 'utf-8');
    const fileItems = fileData.split('\n');
    const fileTime = fileItems.map(item => item.split('\n'));
    const GUARDATUDO = [];
    const FODASE = fileTime.map(item => item.map( elem => {
        const QUEROIREMBORA = elem.split(' ');
        GUARDATUDO.push(QUEROIREMBORA[3]);
    }
    ));
    console.log(GUARDATUDO);
}

getData();