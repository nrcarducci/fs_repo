// YOUR CODE BELOW
function Jedi(firstName,lastName,ligthsaber,level)//no return for this is a constructor function
{
	this.firstName=firstName;
  this.lastName=lastName;
  this.lightsaber=ligthsaber;
  this.level=level;
  
}

const lukeSkywalker = new Jedi("Luke","Skywalker",'Green',"Master");//adding new object

const darthMaul = new Jedi("Darth","Maul","Red","Apprentice");
console.log(lukeSkywalker);
console.log(darthMaul);






/*

describe('Jedi Constructor', () => {
  const lukeSkywalker = new Jedi('Luke', 'Skywalker', 'Green', 'Master');
    
  it('is a function', () => {
    expect(typeof Jedi).toEqual('function');
  });

  it('the lukeSkywalker instance has a firstName and lastName property', () => {
    
    expect(lukeSkywalker.firstName).toBe('Luke');
    expect(lukeSkywalker.lastName).toBe('Skywalker');
  });

  it('the lukeSkywalker instance has a lightsaber property', () => {    
    expect(lukeSkywalker.lightsaber).toEqual('Green');
  });

  it('the lukeSkywalker instance has a level property', () => {    
    expect(lukeSkywalker.level).toEqual('Master');
  });

  it('the lukeSkywalker instance is an instance of Jedi', () => {
    expect(lukeSkywalker instanceof Jedi).toBe(true);
    expect(Object.getPrototypeOf(lukeSkywalker) === Jedi.prototype).toBe(true);
  });

});
*/