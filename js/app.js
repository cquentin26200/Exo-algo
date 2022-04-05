export const min = (entry) => {
  let newArray = entry[0];
  for (let i = 0; i < entry.length; i++) {
    if (entry[i] < newArray) {
      newArray = entry[i];
    }
  }
  return newArray;
};

export const average = (entry) => {
  let sum = 0;
  for (let i = 0; i < entry.length; i++) {
    sum += Math.round(entry[i] / entry.length);
  }
  return sum;
};

export const checkTheString = (entry) => {
  let newArray = [];
  for (let i = 0; i < entry.length; i++) {
    if (parseInt(entry[i])) {
      newArray.push(parseInt(entry[i]));
    }
  }
  return newArray;
};

export const checkPairAndImpair = (entry) => {
  let newArray = [];
  let newArray2 = [];
  let arrayResult = [[newArray], [newArray2]];
  for (let i = 0; i < entry.length; i++) {
    if (entry[i] % 2 === 0) {
      newArray.push(entry[i]);
    } else {
      newArray2.push(entry[i]);
    }
  }
  return arrayResult;
};

export const returnTheNumberThatAreInTheTwoTable = (entry) => {
  let newArray = [];
  for (let arrayOne in entry[0]) {
    for (let arrayTwo in entry[1]) {
      if (entry[0][arrayOne] === entry[1][arrayTwo]) {
        newArray.push(entry[0][arrayOne]);
      }
    }
  }
  return newArray;
};

export const returnArrayWithoutDuplicateNumberAndLetter = (entry) => {
  var newArray = [];
  let tmp = [];
  for (let i = 0; i < entry.length; i++) {
    tmp[entry[i]] = undefined;
    console.log(tmp[entry[i]]);
  }
  for (let counter in tmp) {
    newArray.push(counter);
    console.log(counter);
  }
  return newArray;
};
