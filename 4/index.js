// let a = Number(prompt("nhap so a"));
// if(a>10){
//     console.log('a lon hon 10');
// }
// else if(a<10) {
//     console.log('a be hon 10');
// }
// else {
//     console.log('a bang 10');
// }
// // && || !

// let a = Number(prompt("nhap chieu cao(theo met)"));
// let b = Number(prompt("nhap can nang"));
// let bmi = b/(a*a);
// if(bmi<25) {
//     console.log('ban bi gaafy');
// }
// else if(bmi>25){
//     console.log('ban bi beo');
// }
// else {
//     console.log('ban bi binh thuong');
// }
// do in switch case as well
let a = Number(prompt("nhap vao 1 thang trong nam"));
if(a==1 || a==3 || a==5 || a==7 || a==8 ||a==10 || a==12) {
    console.log('thang co 31 ngay');
}
else if(a===2){
    console.log('thang co 28 hoac 29 ngay');
}
else if (a>12 || a<1){
    console.log(`${a}` + ' khong phai la 1 thang trong nam');
}
else{
    console.log('thang co 30 ngay');
}
