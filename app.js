var textInput = document.querySelector(".txt-input");
var btnTranslate = document.querySelector(".btn-translate");
var outputDiv = document.querySelector(".output"); 

serverURL= "https://api.funtranslations.com/translate/minion.json"

function getTranslatedText(text){
    return serverURL + "?" + "text=" + text ;
}

function errorHandler(){
    console.log("There is some error",error);
    alert("Something wrong with server. Try again after some time");
}

function clickHandler(){ 
    var inputText = textInput.value;
    fetch(getTranslatedText(inputText))
    .then(response => response.json())
    .then(json =>{
       var transaletedText = json.contents.translated;
       outputDiv.innerText = transaletedText;
    }).catch(errorHandler)

}

btnTranslate.addEventListener("click",clickHandler);