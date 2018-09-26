function reverseString(str){
    let reversedString = "";
  
    for(let lastIndex = str.length -1; lastIndex >= 0; lastIndex--) {
      reversedString += str[lastIndex];
    }
  
    return reversedString;
  }
  
    const isFunction = typeof reverseString ==='function';
    const stringArgument = 'StrangerThings';
    const returnValue = typeof reverseString('StrangerThings') ==='string';
    const stringReturned = 'sgnihTregnartS';
    const stringArg = typeof stringArgument === 'string';
  
  console.log(`We expect reverseString to return a string: ${returnValue}`);
  console.log(`We expect reverseString('StrangerThings') to return ${stringReturned} ${reverseString('StrangerThings') === stringReturned}`);
  console.log(`We expect reverseString to be a function: ${isFunction}`);
  console.log(`We expect reverseString is called with a string argument: ${stringArg}`);


  describe("reverseString", function() {
    it("is a function and it is defined", function() {
      expect(reverseString).toBeDefined();
      expect(typeof reverseString).toBe("function");
    });

    
  });