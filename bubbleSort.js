// need to check if it's sorted and sort until true
function bubbleSort(array) {
    var sorted = array.slice(0);
    
    for (var i = 0; i < sorted.length -1; i++) {
        var current = i;
        var next = i + 1;

        if (current > next) {
            swap(sorted, current, next);
        }
    }
    return sorted;
}

// swapping helper function
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
