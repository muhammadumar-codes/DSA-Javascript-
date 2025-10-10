let array = [10, 30, 50, 60, 70];
let max = Math.max(array[0], array[1]);
let sMax = Math.min(array[0], array[1]);

for (let i = 2; i <= array.length; i++) {
  if (array[i] > max) {
    sMax = max;
    max = array[i];
  }
  else if (array[i] > sMax && max != array[i]) {
    sMax = array[i];
  }
}

console.log(sMax);
