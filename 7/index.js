// //1
// function Sum (n){
//     let sum = 0;
//     for (let i = 0; i <= n; i++){
//         sum += i
//     }
//     return sum;
// }
// //2
// function daiThua (n){
//     let daiThua = 1;
//     for (let i = 1; i <= n; i++){
//         daiThua*=i
//     }
//     return daiThua;
// }
// //3
// function uoc (n){
//     let cacuoc = [];
//     for (let i = 1; i <= n/2; i++){
//         if(n%i === 0){
//             cacuoc.push(i);
//         }
//     }
//     return cacuoc;
// }
// //4
// function soNguyenTo(n){
//     let count = 0;
//     for (let i = 1; i <= n; i++){
//         if(n%i === 0){
//             count += 1;
//         }
//     }
//     if(count > 2) return -1;
//     return 1;
// }
// function cacSoNguyenTo(n){
//     let cacSoNguyenTo =[];
//     for (let i = 1; i <= n; i++){
//         if(soNguyenTo(i)) {
//             cacSoNguyenTo.push(i);
//         }
//     }
//     return cacSoNguyenTo;
// }
// //5
// function sumArray(array){
//     let sumArray = 0;
//     for(let i=0; i < array.length; i++){
//         sumArray+=i;
//     }
//     return sumArray;
// }
// //6
// function maxArray(array){
//     array.sort()
//     return array[array.length-1];
// }
// //7
// function maxArray(array){
//     array.sort()
//     return array[0];
// }
// //8
// function returnArray(array, n){
//     let returnArray=[];
//     for(let i=0; i < array.length; i++){
//         if ( i < n ){
//             returnArray.push(array[i]);
//         }
//     }
//     return returnArray;
// }
// //9
// function unionTwoArrays(array1, array2){
//    let unionTwoArrays=[];
//    let intersectionTwoArrays = intersectionTwoArrays(array1, array2);
//    for (let i =0; i < intersectionTwoArrays.length; i++){
//        unionTwoArrays.push(intersectionTwoArrays[i])
//    }
//    for (let i =0; i < unionTwoArrays.length; i++)
//         for(let j=0; i < array1.length; j++){
//             if(array1[i] !== unionTwoArrays[j])
//                 unionTwoArrays.push(array1[i])
//         }
//    for (let i =0; i < unionTwoArrays.length; i++)
//         for(let j=0; i < array2.length; j++){
//             if(array1[i] !== unionTwoArrays[j])
//                 unionTwoArrays.push(array2[i])
//         }
//     return unionTwoArrays;
// }
// //10
// function intersectionTwoArrays(array1, array2){
//     let intersectionTwoArrays=[];
//     for(let i=0; i < array1.length; i++)
//         for(let j=0; j < array2.length; i++){
//             if(array1[i] === array2[j]){
//                 intersectionTwoArrays.push(array[i])
//             }
//         }
//     return intersectionTwoArrays;
// }
// ****************************************************************
// function fibonacci (n) {
//     if( n ===1 || n ===2 ) return 1;
//     return fibonacci(n-1) + fibonacci(n-2);
// }

