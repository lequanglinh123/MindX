// let m = Number(prompt("nhap so m"));
// let n = Number(prompt("nhap so n"));
// for (m; m<=n; m++){
//     console.log(`${m}`);
// }
// for (; m<=n; m++){
//     console.log(`${n-m}`);
// }
// for (; m<=n; m++){
//     if(m%2 !== 0){
//         console.log(`${m}`);
// }}
// for (var i = 0; i < 11; i++) {
//     console.log( `${i}`);   
// }
// for (var i = 0; i < 11; i++) {
//     if(i%2 === 0)
//     {console.log( `${i}`);}   
// }
// for (var i = 0; i < 11; i++) {
//     if(i%2 !== 0)
//     {console.log( `${i}`);}   
// }
// for (var i = 0; i < 11; i++) {
//     {console.log( `${10-i}`);}   
// }
// var tong = 0;
// var i = 1;
// for(; i < 11; i++) {
//     tong += i;
// }
// console.log( `${tong}`);
// var sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
// console.log( `${sum}`);
 var n = Number(prompt("nhap so"));
// var sum = 0;
// var sum1 = 0;
// var sum2 = 0;
var sum3 = 0;
// for (let i = 0; i < n; i++){
//     sum += 1/i;
//     sum1 += i/(i=1);
//     sum2 += 1/(i*(1+i));
//}
function daiThua(n) {
    var daithua = 1;
    for(var i = 1; i <= n; i++){
        daithua *= i;
    }
    return daithua;
}
// sum3 = daiThua(5);
// console.log( `${sum3}`);
for(let i = 1 ; i <= n; i++){
    sum3 += daiThua(i);
}
console.log( `${sum3}`);