// console.log("scrpt is working")
// var username = prompt("whats you name") //ask input
// alert("how are you?" + username) //give output

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"
// outputDiv.innerText = "vinla";



// console.log(txtInput)
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


function errorHandler(error){
    console.log("error occurred", error);
    alert("something wrong with server: try again after some time")

}
function clickHandler(){
    var inputText = txtInput.value; 

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        } 
        )
        .catch(errorHandler)
}; 





btnTranslate.addEventListener("click", clickHandler)



