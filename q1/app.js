let uesr = {}
// let a={}
function setterGenerator(key){
    return function(value){
        this[key] = value
        return this
    }
}
const nameSetter = setterGenerator('Name')
nameSetter.call(uesr,'john');
console.log(uesr);


// const nameSetter2 = setterGenerator('age')
// console.log(nameSetter2.call(uesr,'pete'));