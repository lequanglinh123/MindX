   // var a = 5;
    // var b = 10;
    // var d;
    // var e; 
    // var f;
    // var g;
    // console.log(a);
    // console.log(b);
    // a = 1; 
    // b = 1;
    // console.log(a);
    // console.log(b);
    // const c = 100;
    // console.log(c);
    // d = a + b;
    // console.log(d);
    // e = a - b;
    // console.log(e);
    // f = a * b;
    // console.log(f);
    // g = a / b;
    // console.log(g);
    let name = prompt("nhap ten di");
    console.log('xin chao '+ name);
    let namsinh = prompt("nhap nam sinh");
    let date = new Date();
    var tuoi = date.getFullYear() - namsinh;
    console.log('ban la ' + tuoi + ' tuoi');
   