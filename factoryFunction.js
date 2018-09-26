function puppyFactory(name, breed,age) {
    return {
      name,
      breed,
      age,
      bark() {
        console.log('Ruff, Ruff');//methods being called
      },
      sleep() {
          console.log("zzzzzzzzzz");
      }
    }
  }
  
  const donut = puppyFactory('donut', 'bulldog',3);//does not use Object.create();
  
  console.log(donut);

  donut.sleep();
  donut.bark();