
let i = 0
let arr = ["red", "blue", "green", "yellow"]
function change() {
return arr[i++]
}

let tag = document.getElementsByClassName("one")

//========for of loop it usually gives the value and for in gives the index================


for (data of tag) {
    data.style.color = change()
}
//============anonymous function==============

let sum = function (){
    console.log("hello")
}
//========== arrow function==========================

let arrow = () => {
    console.log("arrow function")
}

let arrow2 = () => a+b 

//=========setTimeout============

console.log("start")
setTimeout(function (){
    console.log("delayed message")
},4000)

console.log("end")

//=========callback function==========


    function view (a,b){
        console.log("dharan")
    }

    function callback(){
        
       console.log("sa") 
    }
    function callback2(){
       console.log("si") 
    }

    let name = view(callback(), callback2())
    