const objProto = {name:"neil",age:29};


const newObj = Object.create(objProto);

console.log(Object.getPrototypeOf(newObj));//outputs the prototypes
console.dir(newObj.name);
console.dir(newObj.age);


//did it!!!!

