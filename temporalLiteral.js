// open the console and compare your refactored output with the original





// refactor greeter to use a template literal

function greeter(firstName, middleName, lastName, greeting){
    return `${greeting} ${firstName} ${middleName} ${lastName}!`;
    //return greeting + " " + firstName + " " + middleName + " "  +lastName + "!"
    
  }
  
  console.log(greeter('Wade', 'Owen','Watts', 'Hello'));
  
  
  
  
  // refactor personData to use a template literal
  
  function personData(person)
  {
      return `<div>
      <span> ${person.name} </span>
      <span> ${person.favoriteBook} </span>
      <span> ${person.age} </span>
      </div>`
  }
  
  console.log(personData({name: 'Wade Owen Watts', favoriteBook: 'ReadyPlayerOne', age: 18}));
  
  
  
  