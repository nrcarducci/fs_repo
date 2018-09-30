
function traceTheChain(arr)
{
    let newArr = []
    while(Object.getPrototypeOf(arr))
    {
        arr =(Object.getPrototypeOf(arr));
        newArr.push(arr);
    }
  
	return newArr;
}


console.log(traceTheChain([10, 9, 1]));//[ [], {} ]