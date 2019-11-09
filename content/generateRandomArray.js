const fs = require('fs');

function randomArray(length, num) {
    array = [];
    for(let i = 0; i < length; i++){
        array[i] = Math.trunc(Math.random() * 9999999);
    }
    fs.appendFile(`array-${num}-${length}.txt`, array, function(err){
        if(err) throw err;
    })
}


(function(){
    for(let i = 0; i < 10; i++){
        randomArray(1000, i);
        randomArray(10000, i);
        randomArray(100000, i);
    }
})();