document.getElementById("btn-donate-now-3").addEventListener("click", function(event){
    event.preventDefault(); 

    // const addMoney = getInputFieldValueById();


    const donateMoney = getInputValueById("input-number-3");
    
    if(isNaN(donateMoney)){
        alert("Failed to donate money. please try again!")
        return;
    }
if(donateMoney < 0){
 alert("Failed to donate money. please try again!")
        return;
}

        
        const amount = getTextById("amount-3");
        const newAmount = donateMoney + amount;
        document.getElementById("amount-3").innerText = newAmount +''+ "BDT";
        
        alert("donation successful")
        const totalAmount = getTextById("total-amount");
        const newAm = totalAmount - donateMoney;
        document.getElementById("total-amount").innerText = newAm +''+"BDT";

        // history stored
        const div =document.createElement("div");
        div.classList.add("font-bold");
        div.innerHTML=`
        <P>${donateMoney} TK is donated for Aid for Injured in the Quota Movement </P>
        ${getFormattedDate()}
                <p>------------------------------------------------------------------------------</P>

        
        
        `
       
        document.getElementById("show-history").appendChild(div);
     
    

        
        


    
   
});