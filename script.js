const xhr= new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
    //A)get countries is asia
    console.log(countries.filter((country)=>country.region === 'Asia'));    


// B)get countries with population less than 2 lakhs
console.log(countries.filter((country)=>country.population<20_00_00));

// C)get name capital flag using  forEach

countries.forEach((country)=>{
console.log(`Country Name: ${country.name.common}.
Country.Capital: ${country.capital}.
Country.Flag:${country.flag}`)
})


// D)total population using reduce

console.log(countries.reduce((total,currentCountry)=>total+currentCountry.population,0));

// E)country using dollar
  

countries.forEach((country)=>{
    for(let key in country.currencies){
    //   console.log(key);

        if(country.currencies[key]===country.currencies["USD"]){
            console.log(country);
        }
    }
})

// let currencyObj= countries.reduce((result,country)=>{
//     let obj=country.currencies;
//     return result.push(obj);
    
// // console.log(result);
// },[]);
// console.log(currencyObj);
// const currencyObj=countries.map((country)=>country.currencies);
// for(let obj of currencyObj){
//     // console.log(obj);

//     for(let key in obj){
//         // console.log(key);
//         if(key=== "USD"){
//             console.log(currencyObj);
//         }
//     }

// }
}