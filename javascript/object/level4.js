const obj = {
    math:50,
    science:60,
    gk:40
};
let total = 0;
for(let item in obj){
    total = total + obj[item];
}
console.log(total);