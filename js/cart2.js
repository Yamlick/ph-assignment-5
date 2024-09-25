document.getElementById("btn-donate-now-2").addEventListener("click", function(event){
    event.preventDefault(); 

    // const addMoney = getInputFieldValueById();


    const donateMoney = getInputValueById("input-number-2");
    
    if(isNaN(donateMoney)){
        alert("Failed to donate money. please try again!")
        return;
    }
if(donateMoney < 0){
 alert("Failed to donate money. please try again!")
        return;
}

        
        const amount = getTextById("amount-2");
        const newAmount = donateMoney + amount;
        document.getElementById("amount-2").innerText = newAmount +''+ "BDT";
        // modal 
        const modalInputOne = document.getElementById('modal-2');
        modalInputOne.showModal();
        document.getElementById('input-number-2').value = "";

    document.getElementById('close-btn-2').addEventListener('click', function () {
        const modal = document.getElementById('modal-2');
        modal.close();
    });

        const totalAmount = getTextById("total-amount");
        const newAm = totalAmount - donateMoney;
        document.getElementById("total-amount").innerText = newAm +''+"BDT";

        // history stored 
        const div =document.createElement("div");
        div.classList.add("font-bold");
        div.innerHTML=`
        <P>${donateMoney} TK is donated for Donate for Flood Relief in Feni,Bangladesh </P>
        ${getFormattedDate()}
        <p>------------------------------------------------------------------------------</P>
        
        
        `
       
        document.getElementById("show-history").appendChild(div);
     
    

        
        


    
   
});