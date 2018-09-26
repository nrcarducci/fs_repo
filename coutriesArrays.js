// YOUR CODE BELOW

const warm = ['Hawaii', 'Australia'];
const cold = ['Iceland', 'Greenland'];

let warmCountries = [], coldCountries = [];

warmCountries = [...warm];
console.log(warmCountries);

coldCountries = [...cold];
console.log(coldCountries);

// create the variables `warmCountries` and `coldCountries`, assign a copy of the warm and cold arrays using the spread operator. PASS
// after the `warmCountries` and `coldCountries` are created, use the code below to compare the arrays to their originals, the expressions should return false.

function compareOgClone(o,c)
{
    if(o===c)
        return true
    else
        return false;
} 

console.log(compareOgClone(warm,warmCountries));//should be false cause references
console.log(compareOgClone(cold,coldCountries));//should be false...







// Use the code below when the `warmCountries` and `coldCountries` variables are created
// console.log(warm === warmCountries); // false - false because warmCountries is a COPY of the warm array
// console.log(cold === coldCountries); // false - false because coldCountries is a COPY of the cold array




