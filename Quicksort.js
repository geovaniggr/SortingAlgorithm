function quickSort(array, begin, end) {
    if (begin < end) {
        let partitionIndex = partition(array, begin, end);
 
        quickSort(array, begin, partitionIndex-1);
        quickSort(array, partitionIndex+1, end);
    }
}

const partition = ( array, begin, end ) => {
    let pivot = array[end];
    let i = (begin-1);
 
    for (let j = begin; j < end; j++) {
        if (array[j] <= pivot) {
            i++;
 
            let swapTemp = array[i];
            array[i] = array[j];
            array[j] = swapTemp;
        }
    }
 
    let swapTemp = array[i+1];
    array[i+1] = array[end];
    array[end] = swapTemp;
 
    return i+1;
}


module.exports = {quickSort};