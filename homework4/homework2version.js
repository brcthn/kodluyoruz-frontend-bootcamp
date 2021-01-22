const data = {
    USD: {EUR: 0.82, GBP: 0.74,AUD:1.32},
    EUR: {USD: 1.23, GBP: 0.91,AUD:1.61},
    GBP: {USD: 1.35, EUR: 1.10,AUD:1.77},
    AUD:{EUR:0.62, USD:0.75, GBP:0.56}
};

 const currencyKeys = Object.keys(data);

 function createCurrencyElements(elements,inputName,root){
     console.log(root)
    for(let i =0; i< elements.length; i++){
        const inputElement=document.createElement("input");
        inputElement.setAttribute("type","radio");
        inputElement.setAttribute("name",inputName);
        inputElement.setAttribute("value",elements[i]);
        inputElement.setAttribute("id", inputName+elements[i]);

        const labelElement=document.createElement("label");
        labelElement.textContent=elements[i];
        labelElement.setAttribute("for", inputName+elements[i]);
       
        const currencyDiv=document.getElementById(root);
        currencyDiv.appendChild(inputElement);
        currencyDiv.appendChild(labelElement);
    }
 }
 const currencyFrom = document.querySelector("#currency-from");
 createCurrencyElements(currencyKeys, "currency-from","currency-from")

 const currencyTo=document.querySelector("#currency-to")
 createCurrencyElements(currencyKeys,"currency-to","currency-to")

 const calculateButton = document.querySelector("#calculate-button");
 calculateButton.addEventListener("click",result);

 function result(){
    const fromTarget=document.querySelector("input[name='currency-from']:checked");
    const toTarget = document.querySelector("input[name='currency-to']:checked");
    const currencyResult = document.querySelector("#currency-result");
    if(fromTarget == null || toTarget == null){
        currencyResult.innerHTML="Please Select Currency";
        return;
    }
    const amount=document.querySelector("input[name='amount']").value;      
    if(toTarget.value==fromTarget.value){
        currencyResult.innerHTML= "Please Select Different Currency";
        return;
    }   
    if(!isNaN(Number(amount)) && amount!=0){
    const  getObject = data[fromTarget.value];
    const resultForOne=getObject[toTarget.value];
    const result = amount * resultForOne;
  
    currencyResult.innerHTML = amount + " " + fromTarget.value + " = " + result.toFixed(4) + " " + toTarget.value;
    }else{
        currencyResult.innerHTML="Please Enter Number";
    } 
}