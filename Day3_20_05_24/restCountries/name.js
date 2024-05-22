let request1= new XMLHttpRequest()
let method1='GET'
let api1='https://restcountries.com/v3.1/all'
request1.open(method1,api1)
request1.send()

request1.onload =function(){
    let data=JSON.parse(request1.response)
    {
        console.log(data);
        console.log(JSON.stringify(data))
        for(let i of data)
        {
        console.log(i["subregion"]) 
        console.log(i["region"])
        console.log(i["population"])
        console.log(i["name"])
          
        }
    }
    
}