var button_translate=document.querySelector('#button_translate')
var textinput=document.querySelector("#textarea")
var output=document.querySelector('#output')

// console.log(output)
var  serverURl="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURl+"?" + "text" + text
}

function errorhandler(error){
    console.log("error occures",error); 
    alert("something went wrong!! try again later!! ")
};
function clickhandler(){
    var inputText=textinput.value;

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedtext=json.content.translated;
        output.innertext=translatedtext;
    })  
    .catch(errorhandler)      
}
button_translate.addEventListener("click", clickhandler)
