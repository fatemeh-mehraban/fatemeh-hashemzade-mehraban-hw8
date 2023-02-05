
function creatcount(){
    let counter = 0
 return function(num =0){
  return counter += num
 }
}
let counter = creatcount()
console.log(counter());
console.log(counter(1));
console.log(counter(2));
console.log(counter());
console.log(counter(3));