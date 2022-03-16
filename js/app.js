export const min = (entry) => {
    let newArray = entry[0];
    for (let i = 0; i < entry.length; i++) {
        if (entry[i] < newArray) {
            newArray = entry[i];
        }
    }
    return newArray;
}

export const average = (entry) => {
    let sum = 0;
    for (let i = 0; i < entry.length; i++) {
        sum += (Math.round(entry[i] / entry.length));
    }
    return sum;
}