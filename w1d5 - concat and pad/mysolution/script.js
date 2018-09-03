function conc(pattern, number) {
  if (number < 10) {
    number = "0" + number;
  }
  pattern = pattern.replace("#", number);
  return pattern;
  // console.log(pattern, number);
}
const hi = conc("image#.jpg", 5);
console.log(hi);
