//dot notation//////////


const coffee = {}

// dot-notation is used to define properties and values

coffee.iced = true;
coffee.milk = false;
coffee.size = 'venti';

// dot-notation is used to access the value assigned to a property
console.log(coffee)
console.log(`coffee.iced value:  ${coffee.iced}`);



//bracket notation//////////

const one = () => {
    return 'one';
  }
  
  const twoStr = 'two';
  const numberS = {}
  
  numberS[one()] = 1; // the one function returns the string 'one'
  numberS[twoStr] = 2; // twoStr evaluates to the string 'two'
  numberS['three'] = 3;
  
  console.log(numberS);




  /// shorthand ////////

let on3 = 1;
let two = 2;
let three = 3;

// ***** Shorthand Property Syntax: Do you notice the difference? *****
const numbers = {
  on3,
  two,
  three
}

console.log(numbers);