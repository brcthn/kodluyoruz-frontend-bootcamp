import data from "./data.js"
import { createTableElements } from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{nısame: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

   //       Population - bigger than 500.000 => #populationBigger
   //       land area - less than 1000 => #landAreaLess
   //        Does any city has population less than 100.000? => #isPopulationLess
     //       Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

/* BIGGER 50k ACTION */
document.querySelector("#populationBigger").addEventListener("click", () => {
    const biggerData = data.filter((city) => {
        return city.population > 500000;
    });

    createTableElements(biggerData, "allcities");
});
/* LAND AREA LESS THAN 1000 */
document.querySelector("#landAreaLess").addEventListener("click", () => {
    const lesserData = data.filter((land) => {
        return land.landArea < 1000;
    });

    createTableElements(lesserData, "allcities");
});

/* city has population less than 100.000*/
document.querySelector("#isPopulationLess").addEventListener("click", () => {
    const lesserPopulation = data.some((city) => {
        return city.population < 100000;
    });
    if (lesserPopulation) {
        alert("YES")
    } else {
        alert("NO")
    }
});

/* every city has land area bigger than 100*/
document.querySelector("#isLandBigger").addEventListener("click", () => {
    const biggerLandArea = data.every((city) => {
        return city.landArea > 100;
    });
    if (biggerLandArea) {
        alert("YES")
    } else {
        alert("NO")
    }
    // const message=isTrue?"yes":"no";
    //  alert(message);
    //const messageMethod=isTrue?toastr.success:toastr.error; messageMethod(message)
    //toastr.success(message); toastr kutuphanesini import edip kullanabiliriz. degisik bir notification cikar.
});

/* select fill */
const cities = data.map((city) => {
    return city.name;
})

const select = document.querySelector("#selectcity");
cities.forEach((city) => {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", city);
    optionElement.innerHTML = city;
    select.appendChild(optionElement)
})

select.addEventListener("change", () => {
    console.log(select.value)
    const selectedCity = data.filter((city) => {
        console.log(city.name + "------" + select.value)
        return city.name === select.value
    })
    createTableElements(selectedCity, "singlecity");
});

//addeventlistenerde this kullandigimizda atadigimiz seye refer eder. yani selectte. this.value desekte olur.
//  option 2 with reduce
// const selectHtml=data.reduce((acc,city)=>{
//     return acc+`<option value${city.name}>${city,name}</option`
// },"")