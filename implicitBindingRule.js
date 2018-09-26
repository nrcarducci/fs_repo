// YOUR CODE BELOW

const cellPhoneUtilities = {
    togglePower() {
    console.log("toggle the power property to true or false");
    // refactor the togglePower method to reference the object
    if(this.power===false)
      return this.power = true;
    else
      return this.power = false;
    // togglePower is called on, toggle the value of the power property (true to false || false to true);
      
    }
  };
  
  const iPhone = Object.create(cellPhoneUtilities);
  iPhone.type = "iPhone";
  iPhone.power = true;
  
  const pixel = Object.create(cellPhoneUtilities);
  pixel.type = "Pixel";
  pixel.power = true;
  
  console.log(iPhone.togglePower());//turning off
  console.log(pixel.togglePower()); //turning off
  
  console.log(iPhone.togglePower());//turning on
  console.log(pixel.togglePower());//turning on