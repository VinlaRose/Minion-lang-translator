// console.log("scrpt is working")
// var username = prompt("whats you name") //ask input
// alert("how are you?" + username) //give output

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input")
console.log(txtInput)

function clickHandler(){
    console.log("clicked");
    console.log("input", txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler)



