// YOUR CODE BELOW

function evenAndOdd(myArr,i=0)
{
	let returnedArr =[],evenArr=[],oddArr=[];
  
  if(i<=myArr.length)
  {
  	if(myArr[i]%2===0)//evens
    {
    	evenArr.push(myArr[i]);
      i++;
      evenAndOdd(myArr[i],i);
    }
    else if(myArr[i]%2===1)//evens
    {
    	oddArr.push(myArr[i]);
      i++;
      evenAndOdd(myArr[i],i);
    }
  }
 returnedArr[0]=evenArr;
 returnedArr[1]=evenArr;
  
	return returnedArr;
}


console.log(evenAndOdd([22, 13, 101, 25, 32, 78, 80]));

/*
describe('evenAndOdd', () => {

  it('is a function', () => {
    expect(typeof evenAndOdd).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = evenAndOdd([1, 2, 3, 22, 78, 100, 101, 33]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array where the first element has all the even numbers from the original array', () => {
    let returnedValue = evenAndOdd([22, 13, 101, 25, 32, 78, 80]);
    console.log(returnedValue);
    expect(returnedValue[0]).toEqual([22, 32, 78, 80].reverse());
  });

  it('returns an array where the second element has all the odd numbers from the original array', () => {
    let returnedValue = evenAndOdd([9, 18, 21, 28, 35, 97]);
    expect(returnedValue[1]).toEqual([9, 21, 35, 97].reverse());
  });

});
*/