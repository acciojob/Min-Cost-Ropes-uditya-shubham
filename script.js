
function myfunc(a,b){
    return a-b;
}
let sum=0;
function mincost(arr)
{ 
//write your code here
// return the min cost




while(arr.length>1)
    {
        arr.sort(myfunc);

        let a=arr.shift();
        let b=arr.shift();
        let c=a+b;
        sum+=c;
        arr.push(c);
    }

    // console.log(arr);



    return sum;

  
}


module.exports=mincost;
