var obj1 = {"name":"Sam","class":"MCA"};
var obj2 = {"class":"MCA","name":"Sam"};

var compare=true;

for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            compare=false;
            break;
        }
    }
    console.log("Does The Objects have same properties?"+"\n");
console.log(compare);