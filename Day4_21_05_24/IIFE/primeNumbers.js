let arr=[3,4,5,6,7,13,17,19];
const prime =(function (arr)
{
   for(let i=0; i<arr.length; i++)
   {
    let flag=0;
    for(let j=2; j<arr[i]; j++)
    {
       if(arr[i]%j==0)
       {
          flag=1;
          break;
       }
    }
    if(flag==0)
    {
       console.log(arr[i]);
    }
   }
})(arr);