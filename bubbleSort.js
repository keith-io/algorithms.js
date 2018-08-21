function bubbleSort(array) {
    var sorted = array.slice(0); // non-destructive
    var isSorted = true;
    
    while (isSorted) {
        isSorted = false;
        for (var i = 1; i < sorted.length; i++) {
            var prev = i - 1;
            var current = i;
            if (sorted[current] < sorted[prev]) {
                [sorted[current], sorted[prev]] = [sorted[prev], sorted[current]];
      
                isSorted = true;
            }
        }
    }
    
    return sorted;
}
