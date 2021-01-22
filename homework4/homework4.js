const data={
    USD:{EUR: 0.82, GBP: 0.74, AUD:1.32},
    EUR:{USD: 1.23, GBP: 0.91, AUD:1.61},
    GBP: {USD: 1.35, EUR: 1.10,AUD:1.77},
    AUD:{EUR:0.62, USD:0.75, GBP:0.56}
}
const currencyKeys = Object.keys(data);
// root= currencybox-from or currencybox-to  
function createCurrencyElements(currencyKeys,root,name){
    for(let i=0;i<currencyKeys.length;i++){
        const optionElement=document.createElement("option");
        optionElement.setAttribute("value",currencyKeys[i]);
        optionElement.setAttribute("id",root);
        optionElement.innerHTML= `${currencyKeys[i]}`;
        const selectElement=document.getElementById(name)
        selectElement.append(optionElement)
    }
}
createCurrencyElements(currencyKeys,"currencybox-from","currency-dropdown-from");
createCurrencyElements(currencyKeys,"currencybox-to","currency-dropdown-to")

const calculateButton=document.getElementById("calculate-button");
calculateButton.addEventListener("click",result);

function result(){
    //for get select value (from)
    const getFromSelect=document.getElementById("currency-dropdown-from");
    const fromTarget=getFromSelect.value;
    //for get select value(to)
    const getToSelect=document.getElementById("currency-dropdown-to");
    const toTarget=getToSelect.value;
    //result place
    const currencyResult=document.getElementById("currency-result");
    if(toTarget == "select"||fromTarget == "select" ){
        currencyResult.innerHTML="Please Select Currency";
        return;
    }
    if(toTarget==fromTarget){
        currencyResult.innerHTML= "Please Select Different Currency";
        return;
    }   
    // get amount
    const amount = document.querySelector("input[name='amount']").value;
    if(!isNaN(Number(amount)) && amount!=0){
        const getFromCurrency=data[fromTarget];
        const valueOneCurrency= getFromCurrency[toTarget];
        const result=amount *valueOneCurrency;
       
        currencyResult.innerHTML= amount+ " "+ fromTarget + " = "+ result.toFixed(4) + " "+ toTarget;
    }
    else{
        currencyResult.innerHTML="Please Enter Number";
    }
}