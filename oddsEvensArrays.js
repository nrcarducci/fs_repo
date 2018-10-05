let array = [0,1,2,3,4,5,6,7,8,9,];

function reducer(i,curr)
{
    return i+curr;
} 

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

let sperateArr = oddsAndEvens(array,even,odd);

const mappedArr=sperateArr.map(x=>x);

console.log(mappedArr);

const reduceArr=[];
sperateArr.forEach(element => 
{
    reduceArr.push((element.reduce(reducer)));
});

console.log(reduceArr);
