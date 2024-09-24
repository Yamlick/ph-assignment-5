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