let array = [0,1,2,3,4,5,6,7,8,9,];

function odd(x)
{
    if(x%2===1)
        return x;
}

function even(x)
{
    if(x%2===0)
        return x;
}

function oddsAndEvens(arr,func1,func2)
{
    return [arr.filter(func1),arr.filter(func2)];
}

console.log(oddsAndEvens(array,even,odd));
