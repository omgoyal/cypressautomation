const Person= require('./Basics7')

let day ='tuesday '
console.log(day.length)

let subday=day.slice(0,5)
console.log(subday)

console.log(day[1])

let splitday=day.split("s")


console.log(splitday[1].trim())
let splen=splitday[1].trim().length
console.log(splen)

let date='23'

let nextdate='27'

let diff= parseInt(nextdate) - parseInt(date)
console.log(diff)

diff.toString()

let quoteday = day + "is funday"
console.log(quoteday)

let val=quoteday.indexOf("day")
console.log(val)

let val1=quoteday.indexOf("day",5)
console.log(val1)

//pass day how many occurences 
let count=0
let val2=quoteday.indexOf("day")
while(val2!=-1){
    count=count+1;
    val2=quoteday.indexOf("day",val2+1)
}
console.log("no of occurence of day",count)

let person=new Person('Om','Goyal')
console.log(person.fullName())


