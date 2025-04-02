//object --collection of properties

let person ={
    firstname:'Tim',
    lastName:'Joe',
    age:24,
    fullname:function(){
        console.log(this.firstname+this.lastName)
    }
}

console.log(person.fullname())
console.log(person.firstname)
console.log(person.lastName)

console.log(person['lastName'])

person.firstname='Tim Dane'
console.log(person.firstname)
person.Gender='Male'
console.log(person)

delete person.Gender
console.log(person)

console.log('Gender' in person)
console.log('firstname' in person)

//print all the valuesof js objects
for(let key in person){
    console.log(person[key])
}