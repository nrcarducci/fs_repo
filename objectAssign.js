// YOUR CODE BELOW

const healthyFoods = {
    vegetable: 'carrot',
    snack: 'nuts',
    fruit: 'apple'
  };
  
  const deliciousFoods = {
    hungry: 'Cheeseburger',
    veryHungry: 'Pizza',
    dessert: 'Cheesecake'
  }
  
  //
  
  let foods = {};

  foods = {...healthyFoods,...deliciousFoods};

  console.log(foods);
  
  // Use the "foods" object as the target object and "merge" the deliciousFoods and healthyFoods properties into the foods object
  // the foods object should have the following properties and values:
  /*
  {
    vegetable: 'carrot',
    snack: 'nuts',
    fruit: 'apple',
    hungry: 'Cheeseburger',
    veryHungry: 'Pizza',
    dessert: 'Cheesecake'
  };
  
  The ordering of properties may vary
  */
  
  
  
  