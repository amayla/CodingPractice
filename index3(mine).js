// // Function Declaration
// // function sayHello() {

// //     console.log('Hello');

// // }

// // Calling function
// // sayHello()

// // name : parameter
// function sayHai(name) {

//     console.log(
//         'Hai ' + name
//     )

// }

// sayHai('Peter')

// // function jumlah(x, y){

// //     var hasil = x + y

// //     console.log('x : ' + x);
// //     console.log('y : ' + y + '\n');
    
// //     // output : hasil (integer)
// //     return hasil
// // }

// // var output = jumlah(3, 4)
// // var output2 = jumlah(4, 5)
// // var output3 = jumlah(5, 6)

// // console.log(output + output2 + output3);

// // Sebuah function bisa menerima tipe data yang berbeda
// // function anytype(str, num, boolean){

// //     console.log(str);
// //     console.log(num);
// //     console.log(boolean);

// // }

// // anytype('String', 26, true)

// // function selalu return 'sesuatu'
// // ketika kita tidak menentukan apa yg harus di return
// // maka yang di return adalah undefined

// // variable yang di deklarasikan didalam function
// // tidak bisa di akses di luar function

// // function dapat mengakses variabel di luar function tsb
// // kode diluar function tidak bisa mengakses variabel yg ada di dalam function

// // CALLBACK FUNCTION
// // Function yg di running oleh function lainnya

// function dua(){
//     console.log('Ini dari function dua')
//     // return undefined
// }

// function satu(x, fn){
//     console.log('Nilai X : ' + x)

//     // calling function
//     // fn berisi sebuah function
//     fn()
    
//     // return undefined
// }

// // 'dua' tidak memerlukan ()
// // satu(43, dua)

// function tiga(q, fn){
//     // q = 5
//     //  fn = function empat
//     console.log('Nilai Q: ' + q);

//     // nilai pada 'q' akan masuk ke 'x' milih function empat
//     fn(q)
    
// }

// function empat(x) {
//     console.log(x + ' di kali dua : ' + (x *2))
// }

// // tiga(5, empat)

// function lima(number, fun){
//     console.log('number kuadrat :' + ( number * number))

//     fun()
// }

// // lima(5, function() {console.log('Fn tanpa declaration')})

// function enam(x, fn) {
//     // x : 9
//     // fn: function tujuh
//     var num1 = 25
//     var num2 = 35

//     console.log('Nilai X adalah ' + x)

//     fn(num1, num2)

// }
// function tujuh(y, z){
//     console.log(y)
//     console.log(z)
//     // y : num1
//     // z : num2
//     console.log('Y + Z : ' + ( y + z))
// }

// // enam(9, tujuh)

// // function return function
// function delapan () {

//     console.log('EZ yah ?');
    
//     return function() { // masuk ke 'itu'
//         console.log('Function hasil return dari function delapan');
        
//     }

// }

// var ini = delapan
// var itu = delapan()

// ini() // function delapan
// itu() // function yg ada di line 128

// var nama = 'Druid'
// var copy = nama



// function pengurangan(x, y){
//     var hasil = x - y

//     return hasil
// }

// var result = pengurangan(3, 4)

// var halo = 65

// console.log(result);

// tidak di rekomendasikan membuat variabel tanpa keyword var / let
// function total(x,y) {
//     z = x + y
//     return z
// }

// console.log(total(4,5))
// console.log(z)

// function pangkat(x, y) {
//     if (y==1){
//         return x
//     }else {
//         return x = x * pangkat (x, y-1)
//     }
// }

// var hasil = pangkat (7,2)
// console.log(hasil )

// function sayHello() {
//     console.log('Hello...');
    
// }
// console.log('Pertama');
// // 3000ms = 3 detik
// setTimeout(sayHello,3000)
// console.log('Terakhir');

// function sayHello() {
//     console.log('Hello...');
    
// }
// console.log('Pertama');
// // 3000ms = 3 detik
// setTimeout(sayHello,3000)

// // cancel set timeout
// clearTimeout(x);
// console.log('Terakhir');

// setInterval(sayHello, 1500) //print sayHello setiap 1.5 detik

// ARRAY
// syntax : menggunakan kurung siku
// urutan data start dari 0
// var buah1 = 'apel'
// var buah2 = 'belimbing'
// var buah3 = 'ceri'

// var buah = ['apel', 'belimbing' ,'ceri']
// console.log(buah);
// console.log(buah.toString());//menampilkan string dengan pemisah (,)
// console.log(buah.join(' - '));//menampilkan string dengan memodifikasi pemisah(-)
// console.log(buah.join());
// console.log(buah[0]);//menampilkan index array ke-1
// console.log(buah[1]);//menampilkan index array ke-2
// console.log(buah[2]);//menampilkan index array ke-3

// // menghitung banyak data pada array
// console.log('Banyak data: '+ buah.length);

// //loping sebanyak data yang ada di array
// for (var i = 0; i<buah.length;i++){
//     console.log('buah '+ buah[i]);
    
// }
// var buah = ['apel', 'belimbing' ,'ceri']
// // // console.log('Banyak data: '+ buah.length)
// //menambahkan data setelah index terakhir
// buah.push('kiwi')
// console.log(buah);
// //menghilangkan data index terakhir
// buah.pop()
// console.log(buah);
// // mengurangi data sari index pertama
// buah.shift()
// console.log(buah);
// // menambah data dari depan
// buah.unshift('Lemon')
// console.log(buah);

// let buah = ['jeruk', 'nanas', 'banana','anggur', 'leci']
// buah.splice(2,3)//(index data yang mau dihapus, banyaknya data yang mau dihapus)
// console.log(buah);


// var hari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu']
// var len = hari.length
// console.log('length: '+ len);

// var sort = hari.sort()//urutan berdasarkan abjad
// console.log('sort: '+ sort);

// var rev = hari.reverse()//membalik urutan array paling terakhir ke pertama
// console.log('rev: '+ rev);

// var idx = hari.indexOf('rabu')
// console.log('Index of rabu: '+ idx);

// var idx2 = hari.indexOf('Sunday')
// console.log('Index of Sunday: '+ idx2);

// console.log(hari)

// // MERGING
// let nama = ['Reyhan', 'Haniful', 'Donny']
// let nama1 = ['Ifan', 'Lukito', 'Syaiful']
// let nama3 = ['Ilham', 'Aisyah', 'Ayu']
// let name1 = nama.concat(nama1)
// let name2 = nama.concat(nama1,nama3)

// console.log(name1);
// console.log(name2);

//*******************************lesson9******************************
// OBJECT
// variabel didalam object dinamakan '
// key : value
// var orang = ['Angga', 'Candra']
// var manusia = {
//     firstName : 'Angga',
//     lastName : 'Candra',
//     Age : 32,
//     job : 'Actor',
//     sayHello : function(nama){
//         console.log('Hello' + nama)
//     },
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName
//     }
// }
// // console.log(manusia);
// var namLengkap = manusia.fullName()
// manusia.sayHello('Kevin')
// console.log(manusia.firstName);
// console.log(manusia.lastName);

// Object Literal
// var orang = {firstName: 'Janice', lastName: 'Manuella'}
// console.log(orang);
// orang.job = 'Lawyer'
// console.log(orang);
// delete orang.firstName
// console.log(orang);

// object constructor
// var manusia = function(nama, umur, job){
//     this.firstName = nama,
//     this.age = umur,
//     this.job = job
// }

// var baron= new manusia('Baron',21, 'Lead academic')
// var brian= new manusia('Brian', 27, 'Lead Tech')
// console.log(baron);
// console.log(brian);
// console.log(manusia);

// var objOne = {
//     propOne : 'string biasa',
//     propTwo : {
//         subPropOne : 23,
//         subPropTwo : function(x){
//             console.log('Sub Property ' + x)  
//         }
//     },
//     propThree : ["red","green", "blue"],
//     propFour: [
//         12,
//         {insideOne: 44, insideTwo:45}
//     ]
// }
// objOne.propFour[0]
// objOne.propTwo.subPropTwo(45)

// var hari = {
// pertama:'senin',
// kedua:'selasa',
// ketiga:'rabu',
// keempat:'kamis',
// kelima:'jumat',
// keenam:'sabtu',
// ketujuh:'minggu'
// }
// console.log(hari.pertama);
// console.log(hari['pertama']);


// // looping for in looping sebanyak property didalam object
// for(var namaProp in hari){
//     console.log(namaProp + ' : '); + hari[namaProp]

// CLASS
class MakhlukHidup{
    constructor(nama,place,hidup){
        this.name = nama,
        this.tempatTinggal = place,
        this.bernyawa = hidup
    }
    makan(sesuatu){
        console.log('Sedang Makan' + sesuatu);
        
    }
    bernafas(){
        console.log('Sedang bernafas');
        
    }
}
var simba = new MakhlukHidup('amin','Bumi', true)
console.log(simba);
class Manusia extends MakhlukHidup {//nambah properties dari Makhluk hidup
        constructor(nama,place,hidup,akal,karya){
            super(nama,place,hidup)
            this.berakal = akal,
            this.berkarya = karya
        }
        bergerak(arah){
            console.log(this.name + 'sedang mencari uang')
        }

}
var mufasa = new Manusia('Aby', 'Mars', true, false, 'painting')
console.log(mufasa);











