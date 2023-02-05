 function createlem(elem,func ){
    elem = document.createElement("elem")
    document.body.appendChild(elem)
    func(elem)
    }
 function callback(elem){

    elem.innerHTML="hello"
    elem.style.backgroundColor ='red'
    elem.style.padding ='20px 100px'
    elem.style.width = "300px";
    elem.style.height = "50px";
 }

createlem("div" , callback);
console.log(1);

    