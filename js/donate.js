document.getElementById("btn-donate-now").addEventListener("click", function(event){
    event.preventDefault(); 

    // const addMoney = getInputFieldValueById();


    const donateMoney = getInputValueById("input-number");
    
    if(isNaN(donateMoney)){
        alert("Failed to donate money. please try again!")
        return;
    }
if(donateMoney < 0){
 alert("Failed to donate money. please try again!")
        return;
}

    
        const amount = getTextById("amount");
        const newAmount = donateMoney + amount;
        document.getElementById("amount").innerText = newAmount;

        
        


    
   
});