function getInputValueById(id){
    const textValue = document.getElementById(id).value;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function getTextById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}
function getSectionById(id){
    
    document.getElementById("show-donation").classList.add("hidden");
    document.getElementById("show-history").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
   
 
}


function buttonColorById(id){
    document.getElementById("donation").classList.remove("bg-green-500");
    document.getElementById("history").classList.remove("bg-green-500");
    if(id==="donation"){
        document.getElementById("donation").classList.add("bg-green-500");

}
else if(id ==="history"){
    document.getElementById("history").classList.add("bg-green-500");


}
}

function getFormattedDate() {
    const runningDate = new Date();
    const date = runningDate.toString(); // This gives the full date string
    return date;
}
