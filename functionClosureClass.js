class createObjectWithClosures
{
    constructor(total=0)
    {
        this.total=total;
    }

    oneIncrementer()
    {
        this.total += 1;
    }
    tensIncrementer()
    {
        this.total += 10;
    }
    getValue()
    {
        return this.total;
    }
    setValue(val) 
    {
        this.total = val;
    }    
}

const newClass = new createObjectWithClosures();

newClass.oneIncrementer();
newClass.oneIncrementer();
newClass.tensIncrementer();
console.log(newClass.getValue());
newClass.setValue(10);
console.log(newClass.getValue());
newClass.oneIncrementer();
newClass.oneIncrementer();
newClass.tensIncrementer();
console.log(newClass.getValue());
newClass.setValue(0);
console.log(newClass.getValue());
