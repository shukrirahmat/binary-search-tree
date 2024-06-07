function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const midpoint = Math.floor(array.length/2);
    const lefthalf = mergeSort(array.slice(0, midpoint));
    const righthalf = mergeSort(array.slice(midpoint));
    const merged = [];

    while (lefthalf.length > 0 && righthalf.length > 0) {
        if (lefthalf[0] < righthalf[0]) {
            merged.push(lefthalf.shift());
        } else {
            merged.push(righthalf.shift());
        }
    }

    return merged.concat(righthalf).concat(lefthalf);

}

export default mergeSort;