// // WHILE
// var angka = 1
// //  Selama condition bernilai true
// while (angka <=10){
//     console.log(angka)
//     angka++
// }
// console.log('selesai')

// // DO while
// do{
//     console.log(angka)
//     angka++
// }while(angka<= 10)
// console.log ('Selesai')
// ************************************Lesson 6*************************************

// FOR
// for(i=0 ; i<= 3; i++){ // kalau mau tambah angka selain 1, syntax nya i+=n
//     console.log('Looping ke ' + i)
// }
// console.log('selesai looping')

// for(i=0 ; i<= 10; i++){ // kalau mau tambah angka selain 1, syntax nya i+=n
//     if (i%2 ==0)
//     console.log('Looping ke ' + i)
// }
// console.log('selesai looping')

// loop drawing
// var bintang = ''
// for(var i = 1; i <= 5; i++){
//     bintang += '*  '
// }
// console.log(bintang)

// var bintang = ''
// for(var i = 1; i <= 5; i++){
//     bintang += '*  ' + '\n'
// }
// console.log(bintang)

// let z='';
// for (let i=0; i<5; i++){ //untuk menentukan banyaknya baris
// 	for (let j=0; j<5 ;j++){ //menentukan banyaknya bintang pada setiap baris
//             z += ' * '
//         }
//         z += '\n'
//     }
// console.log(z)

// var angka = 5
// let z='';
// for (let i=0; i < angka; i++){ //untuk menentukan banyaknya baris
// 	for (let j=5; j>i ;j--){ //menentukan banyaknya bintang pada setiap baris
//             z += ' * '
//         }
//         z += '\n'
//     }
// console.log(z)

// ********************************solve it 18**********************************
// var angka = 5
// let x='';
// for (let a=0; a < angka; a++){ //untuk menentukan banyaknya baris
//     for (let k=5; k>a ;k--){ //menentukan banyaknya bintang pada setiap baris
//             x += ' * '
//         }
//         x += '\n'
//         }
// for (let i=1; i < angka; i++){ //untuk menentukan banyaknya baris
//     for (let j=0; j<=i ;j++){ //menentukan banyaknya bintang pada setiap baris
//             x += ' * '
//         }
//         x += '\n'
//     }
// console.log(x)


// var angka = 5
// let x='';
// for (let a=0; a < angka; a++){ //untuk menentukan banyaknya baris
//     for (let k=5; k>a ;k--){ //menentukan banyaknya bintang pada setiap baris
//             x += ' * '
//         }
//         x += '\n'
//         }
// for (let i=0; i < angka; i++){ //untuk menentukan banyaknya baris
//     for (let j=0; j<=i ;j++){ //menentukan banyaknya bintang pada setiap baris
//             x += ' * '
//         }
//         x += '\n'
//     }

// console.log(x)

// ***************************lesson 7*******************************************
// function sayHi(name){
//     console.log(
//         'Hai ' + name
//     )
// }
// sayHi('Phantom') //function tidak mengeluarkan output
// sayHi()

// function jumlah(x,y){

//     var hasil = x+y

//     console.log('x :' + x);
//     console.log('y :' + y);

//     return hasil
// }
// var output = jumlah (3,4)
// console.log(output)
// untuk mengetahui definisi dari suatu fungsi / variabel, klik kanan peek definition
// function selalu return sesuatu, ketika tidak ditentukan apa yang harus di return, 
// akan menghasilkan undefined
// var yang di declare dalam function tidak bisa diakses dari luar
// function lima (number, fun){
// console.log('number kuadrat : ')+ (number * number))

// fun()

// }
// lima(5,function() {console.log('Fn tanpa declaration')})

// function enam(x, fn){
//     var num1 = 25
//     var num2 = 35

//     console.log('Nilai X adalah ' + x)

//     fn (num1,num2)
// }

// function tujuh (y, z){
//     console.log('Y + Z : ' + (y + z))
// }
// enam(9, tujuh)

function delapan (){

    console.log('Pusing yah? ');

    return function(){
        console.log('Function hasil return dari function delapan');
        
    }
    
}
var ini = delapan
var itu = delapan()
ini()
itu()