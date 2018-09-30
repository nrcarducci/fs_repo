function HockeyPlayer(fName,lName,number,team,pos,hand)
{
    this.fName=fName;
    this.lName=lName;
    this.number=number;
    this.team = team;
    this.pos=pos;
    this.hand=hand;
}


const careyPrice31 = new HockeyPlayer("Carey","Price",31,"MTL","G","Right");
const pavelDatsyuk13 = new HockeyPlayer("Pavel","Datsyuk",13,"SKA","C","Left");
const connerMcDavid97 = new HockeyPlayer("Conner","McDavid",97,"EDM","C","Left")

console.log(careyPrice31);
console.log(pavelDatsyuk13);
console.log(connerMcDavid97);

console.log(pavelDatsyuk13.hasOwnProperty('fName'));