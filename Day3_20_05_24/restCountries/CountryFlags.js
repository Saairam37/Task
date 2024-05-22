let request= new XMLHttpRequest()
let method ='GET'
let api='https://restcountries.com/v3.1/all'
request.open(method,api)
request.send()

request.onload= function(){
    let data=JSON.parse(request.response);
    console.log(data)
    // 
    for(let i of data)
    {
        console.log(i["flags"]["png"])
    }

}