//1
console.log("Task 1");
var array = [31, -19, 83, -145, 286, -79, 53, -89, 654,-45, 56, -719, -70, 58, 566, -56, 32, -94, 522, -454, 194,-25, 8,];
console.log(array);

function sorting(number1, number2) {
    return number1 - number2;
}

console.log("Sorting by growth");
array.sort(sorting);
console.log(array);

console.log("Sort by descending order");
array.reverse();
console.log(array);


//2
console.log("Task 2");

function filterPos(number) {
    return number>=0;;
} 

function filterNeg(number) {
    return number<0;
} 

let arrayPositive = array.filter(filterPos).sort(sorting);

let arrayNegative = array.filter(filterNeg).sort(sorting);

console.log(arrayPositive);
console.log(arrayNegative);

