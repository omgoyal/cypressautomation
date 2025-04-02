const flag=true

if(!flag)
{
console.log("condition satisfied")
}
else
{
    console.log(flag)
console.log("condition not satisfied")
}

/*let i=0
while(i>10){
    i++
    console.log(i)
}*/

/*do{
i++

}while(i>10);
    console.log(i)*/

for(let k=1;k<=10;k++){
    console.log(k)
}
console.log("**************")
//from 1 to 10 give me common multipel values
let n=0
for  (let l=1;l<=100;l++){
    if(l%2==0 && l%5==0){
        n++
        console.log(l)
        if(n==3)
            break
    }
}