//block of code -function
//var -global /function level
// let -global level/block level{}

let greet="morning"

if(1==1){
    let greet="afternoon"
    
}
function add(a,b){

    let greet="evening"
return a+b
}

let sum=add(2,3)
console.log(sum)
console.log(greet)


let sumofinteger= function(c,d){
    return c+d
}
console.log(sumofinteger(2,5))

let sumofnumbers=(c,d)=>c+d
console.log(sumofnumbers(5,6))
