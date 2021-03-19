const Numbers = [1, 20, 39, 29, 10, 13];

// CHECK IF SMALLER 40 WITH  .every

//ES 6
const isBelowThreshold = (currentValue) => currentValue < 40;

//ES 5
// Pote vazw onoma stin functionkai pote oxi opws edw katw function(valor)?
/*
const isBelowThreshold = function (valor) {
    return valor<40;
}
*/
console.log(Numbers.every(isBelowThreshold)); 


