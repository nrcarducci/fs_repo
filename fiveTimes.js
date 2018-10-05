


const fiveTimes = (function ()
{
    let counter=0;    
    return function()
    { 
        if(counter < 5)
        {
            //console.log(counter);
            counter+=1;
            return counter;
        }
        else
        {
            return 'cannot call function';
        }
    };
})

console.log(fiveTimes()());
console.log(fiveTimes()());
console.log(fiveTimes()());
console.log(fiveTimes()());
console.log(fiveTimes()());
console.log(fiveTimes()());




const add = (function () 
{
    var counter = 0;
    return function () 
    {
        counter += 1; 
        return counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());