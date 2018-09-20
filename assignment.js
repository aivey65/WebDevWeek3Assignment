function arrayMultiply(array) {
  newArray = array.map(x => x*3);
  return newArray;
}

myArray = [1, 3, 4];
console.log(arrayMultiply(myArray));
