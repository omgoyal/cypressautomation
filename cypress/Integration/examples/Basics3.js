let marks =Array(6)
var mark=new Array(20,40,35,12,37,100)
var mark=[20,40,35,12,37,100]
console.log(mark[2])
mark[3]=14
console.log(mark)
console.log(mark.length)
mark.push(65)
console.log(mark)
mark.pop()
console.log(mark)
mark.unshift(12)
console.log(mark)
console.log(mark.indexOf(100))
console.log(mark.includes(120))

submark=mark.slice(2,5)
console.log(submark)

for(let i=0;i<mark.length;i++){
    console.log(mark[i])
}

let sum=0;
for(let i=0;i<mark.length;i++){
    sum=sum+mark[i]
}
console.log("sum of all the elements" ,sum);

//reduce filter map
let total=mark.reduce((sum,mark)=>sum+mark,0)
console.log("total marks",total)

var evenscore=[]
var scores=[12,13,14,16]
//create a new print only event number 
for(let i=0;i<scores.length;i++){
    if(scores[i]%2==0){
        evenscore.push(scores[i])
    }
}


    console.log(evenscore)

let newfilterarr=scores.filter(score=>score%2==0)
console.log("newfilter arr",newfilterarr)

//map method --[12,14,16]-> [36,52,48]
let mappedarray=newfilterarr.map(scor=>scor*3)
console.log("maped aray",mappedarray)
let s=0
let totalarraysum=mappedarray.reduce((s,val)=>s+val,0)
console.log("totalarrayaum",totalarraysum)

let sumvalue=scores.filter(score=>score%2==0).map(scor=>scor*3).reduce((s,val)=>s+val,0)
console.log("sumvalues",sumvalue)

let fruits=["banana","mango","pomegranate","apple"]

fruits.sort()
console.log(fruits)
fruits.reverse()
console.log(fruits)

var scores1=[12,16,3,10,15,17]
scores1.sort(function(a,b){
    return a-b
})

console.log(scores1)

var scores2=[12,16,3,10,15,17]
scores2.sort((a,b)=>a-b)
console.log(scores2)