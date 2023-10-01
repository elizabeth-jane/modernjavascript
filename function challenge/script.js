// Challenge 1
const getCelcius = f => ((f - 32) * 5 / 9);

console.log(`The temperature is ${getCelcius(50)} \xB0C` );

// Challenge 2
const minMax = (arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr),

});
console.log(minMax([1, 2,  4, 6, 3, 0 ]));


// Challenge 32;.

(function (l , w){
   console.log(`The area of a rectangle with a length of ${l} and a width of ${w} is ${l * w}`);
})(3,4);


