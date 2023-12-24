/* 
CHALLENGE:

Write a javascript code to randomize number within the range of 10 to 50
*/

function radomizedNum(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
console.log(radomizedNum(10, 50));
