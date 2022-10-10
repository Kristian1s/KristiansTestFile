function sum() {
let res =1 ;
if(arguments.length==0){
    return 0;
}
for(let i=0; i<arguments.length; i++){
    res*= arguments[i];
}
return res;
}
const  x = sum(1,23,45);
console.log(sum(1,23,45));