//class in js introduce--from es-6
module.exports =class Person {
    age=25
    get location(){
        return "canada"
    }

    //constrctuor is a mwthod which execute be default when object is created fo class
    constructor(firstname, lastname){
        this.firstname=firstname
        this.lastname=lastname

    }

    fullName(){
       console.log( this.firstname+this.lastname)
    }


}

/*let person=new Person('Tim','David')
let person1=new Person('joe','Dadad')
console.log(person.age)
console.log(person.location)

console.log(person.fullName())
console.log(person1.fullName())*/
