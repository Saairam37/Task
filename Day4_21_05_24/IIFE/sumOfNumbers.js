var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
const add=function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   console.log(sum);
}(a)
