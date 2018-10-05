const personInternalPrototype = {
    sayHi() {
      return 'Hello!';
    },
    sayFirstName() {
      return kerry.firstName;
    }
  };
  
  function person(firstName, lastName, age) {
    personInstance = Object.create(personInternalPrototype);
  
    personInstance.firstName = firstName;
    personInstance.lastName = lastName;
    personInstance.age = age;
  
    return personInstance;
  }
  
  const kerry = person('Kerry', 39);
  kerry.sayFirstName();