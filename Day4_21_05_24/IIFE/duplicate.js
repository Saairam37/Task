const getUnique=(function(arr){
    
  let anotherArr = [];
  
 
  for(let i of arr) {
      if(anotherArr.indexOf(i) === -1) {
          anotherArr.push(i);
      }
  }
  console.log(anotherArr);
})(anotherArr2 = [1, 2, 3, 2, 3]);