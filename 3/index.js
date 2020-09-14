// var person = {
//     name: "x",
//     age: 30,
//     city: "new York",
//     phone: 111111111111111
// };
// document.getElementById("demo").innerHTML = JSON.stringify(person);
// // let a = prompt("nhap so thu 1");
// // let b = prompt("nhap so thu 2");
// // console.log(Number(a) + Number(b));
// // console.log(a - b);
// // console.log(a * b);
// // console.log(a / b);
// let a = prompt("nhap ban kinh");

// console.log(parseFloat(a*a*Math.PI).toFixed(2));
let a = prompt("nhap so tien");
var soToMotTram = parseInt(a/100000);
let b =parseInt(a) - parseInt(soToMotTram*100000);
var soToNamMuoi = parseInt(b/50000);
let c = parseInt(b) - parseInt(soToNamMuoi*50000);
var soToHaiMuoi = parseInt(c/20000);
let d = parseInt(c) - parseInt(soToHaiMuoi*20000);
var soToMuoiNghin = parseInt(d/10000);
console.log('so to 1 tram ' + soToMotTram);
console.log('so to 50 '+soToNamMuoi);
console.log('so to 20 ' + soToHaiMuoi);
console.log('so to 10 '+soToMuoiNghin);
