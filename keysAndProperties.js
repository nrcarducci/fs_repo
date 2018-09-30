
/**
 * 
 *  Object.keys()
 * 
 */
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  // expected output: Array ["a", "b", "c"]



/**
 * 
 *  Object.hasOwnProperty()
 * 
 */

const object2 = new Object(); //object1 = {}
object2.property1 = 42; //adds new property to object2

console.log(object2.hasOwnProperty('property1'));
// expected output: true

console.log(object2.hasOwnProperty('toString'));
// expected output: false

console.log(object2.hasOwnProperty('hasOwnProperty'));
// expected output: false

