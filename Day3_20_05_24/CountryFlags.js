function reqListener() {
  const countryArr = JSON.parse(this.responseText);
  console.log(countryArr);
  for(let country of countryarr){
    console.log(country.flag.svg);
  }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();