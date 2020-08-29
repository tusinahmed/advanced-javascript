 let numbers = [3,4,5,6,7,8];
// let output  = []
// for(let i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     let result = element * element;
//     output.push(result);

// }


//console.log(output);

// function square (element){
//     return element*element;
// }

// let result = numbers
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

//let result = numbers.map(x=> x*x);
//console.log(result);


let result = numbers.filter(x => x >1);
console.log(result);