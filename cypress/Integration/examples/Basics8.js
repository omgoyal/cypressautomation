//inheritance is the main pillar of object oriented programming 
//one class can inherit/acquire the properties of method of another class
//the class which inherit the properties of other is known as subclass/ derived class,child class

const Person = require("./Basics7");

class Pet extends Person
{
   /*get location(){
    return "Bluecross"
   }*/
   constructor(firstname,lastname){
    //call praent class constructor
    super(firstname,lastname)
   }



}

let pet=new Pet("sam","san")
console.log(pet.fullName())

console.log(pet.location)
