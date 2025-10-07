let number = Number(prompt("Enter Your Number!"));

if (isNaN(number)) {
  console.log("Invalid Number!");
} else {
  if (number > 0) {
    
    let sum = 0;
    while (number > 0) {
      let factorial = 1;
      let remainder = number % 10;
      for (let i = 1; i <= remainder; i++) {
        factorial *= i;
      }
      sum += factorial;

      console.log(sum);

      number = Math.floor(number / 10);
    }
  } else {
    console.log("Must be positive and greater than 1");
  }
}
