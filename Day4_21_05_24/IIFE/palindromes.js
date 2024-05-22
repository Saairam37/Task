var arr=["saairam","pop","dad","bat","mom"]
n=arr.length;
const pal = (function (arr, n)
    {
        for(i=0; i<n; i++)
            {
            let rev = arr[i].split('').reverse().join("");
 
        if (rev == arr[i]) {
            console.log(arr[i]);
        }
    }
    })(arr,n)
    