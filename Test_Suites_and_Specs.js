const multiply = (x, y) => {
    return x * y;
  };
  
  describe("multiply", function() {
    it("is a function and it is defined", function() {
      expect(multiply).toBeDefined();
      expect(typeof multiply).toBe("function");
    });
  
    it("returns a number", function() {
      expect(typeof multiply(5, 10)).toBe("number");
      expect(typeof multiply(10, 0)).toBe("number");
    });
  
    it("multiplys two numbers and returns the product", function() {
      expect(multiply(10, 10)).toBe(100);
      expect(multiply(20, 5)).toBe(100);
      expect(multiply(40, 3)).toBe(120);
    });
  });
  