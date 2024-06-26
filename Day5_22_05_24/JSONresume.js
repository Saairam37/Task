//  For Given JSON iterate over all for loops
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  console.log(result);
  
  //using for loop
  for (var i = 0; i < result.length; i++) 
  {
    console.log(result[i].area);
  } 

 //using for in loop
 for (let index in result)
 {
    console.log(result[index].region)
 }
 //using for of loop
 for(let obj of result)
 {
    console.log(obj.subregion,obj.population,obj.name.common);
 }

 // using for each loop
 result.forEach(function1);
 function function1(capital, index)
 {
    console.log(result[index].capital)
 }
};
// Resume data in Json Format
let myResume={
    "myResume": { 
    "Name" : "Saairam",
    "Email": "saairam185@@gmail.com",
    "Phone": "9876543210",
    "Degree": "B.Sc.(I.T)",
    "Location": { "Address":"Vill no:17, Phase 2, Alliance Bougaine Villa, Gajalakshmi nagar, Iyyapanthabgal",
                   "postal code": 600056,
                   "state": "tamilnadu",
                   "city": " chennai",
                 "country": " India"
                },
    "github":"https://github.com/Saairam37"},
    "Skills":{"name":"html, css, javascript"},
    "language": "Tamil, English"}
 
console.log(myResume);