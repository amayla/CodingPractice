// // -------------------------------1 st Session-------------------------------
// //print text
// console.log('Halo..')

// //print lokasi folder saat ini
// console.log(__dirname)

// //print nama file saat ini
// console.log(__filename)

// //Munculkan terminal : CTRL + J
// //Mengganti script jadi comment ; command /

// // Variable = tempat menyimpang suatu data
// var nama = 'Andi';
// // ubah nilai pada variabel nama
// nama = 'Amanda'
// console.log(nama);

// // -------------------------------2 nd Session-------------------------------

// // Variabel bisa menyimpan angka
// var usia;
// usia = 22;
// usia = 32;
// console.log(usia);

// let jomblo = true;
// console.log(jomblo);


// // var vs. let
// var x = 21
// var x = 22
// console.log(x);

// let y = ('Halo')
// let y = ('Hi')
// console.log(y)

// let tidur = true
// console.log(tidur)

//VAR vs LET

// var x = '21'
// var x = '22'
// console.log(x)

// String & number
// String adalah teks yang diapit oleh tanda kutip
// Numbers : Integer (Bilangan bulan), Float (Decimals)
// let nama = 'Andi';
// let usia = 0.4567;
// let jomblo = true;
// let kerja;

// var hasil = typeof(nama)
// var hasil = typeof(usia)
// var hasil = typeof(jomblo)
// var hasil = typeof(kerja)

// console.log(hasil)
// console.log(usia)
// console.log(jomblo)
// console.log(kerja)

// console.log(typeof(nama))
// console.log(typeof(usia));
// console.log(typeof(jomblo));
// console.log(typeof(kerja));

// https://github.com/rochafialvin/JC10-Fundamental

// mencari jumlah karakter pada suatu string
//  var hello = ('Hi There!')
//  console.log(hello.length)
//  var hasil = hello.length
//  console.log(hasil)
//  console.log(hello.indexOf('There'))//Menemukan index
//  console.log(hello.indexOf('h'))//Menemukan urutan karakter pada string
//  console.log(hello.substr('3,4'))//Mengambil dari index 3 sebanyak 4 karakter
//  console.log(hello.slice('0,1'))//Mengambil dari index 3 sampai 4

// var x = 'halohalohalo';
// var y = 'DUNIA';
// var z = 12345;
// var u = '12345'
// // mengubah string menjadi kapital
// console.log(x.toUpperCase());

// // mengubah string menjadi huruf kecil
// console.log(y.toLowerCase());

// // menngganti karakter pada string, untuk temuan pertama saja
// console.log(x.replace('ha', 'mi'))

// //mengganti karakter pada string secara menyelurug pada nilai variabel
// console.log(x.replace(/ha/g, 'mi'))

// // mengganti nilai integer ke string
// console.log (z)
// console.log(z.toString())
// console.log(typeof(z.toString()))
// // mengganti nilai string menjadi integer
// var result = parseInt(u)
// var resalt = parseInt (y)
// console.log (result)
// console.log(typeof(parseInt(u)))

// console.log (resalt)
// console.log(typeof(parseInt(y)))

// var usia = 33
// var namaDepan = 'Brew' //istilah var style camel case
// var namaBelakang = 'Master'

// console.log(namaDepan + usia) //string + number = string + string
// console.log(namaDepan + namaBelakang)
// console.log(namaBelakang + usia)
// console.log(usia + usia)//number + number = penjumlahan integer

// // -------------------------------3 rd Session-------------------------------
// let a = parseInt('123');
// let b = parseFloat('123'); //bedanya dangan fungsi parseInt adalah
// let c = parseInt('1234.5678');
// let d = parseFloat('1234.5678');
// let e = parseInt('Halo Dunia');
// let f = parseFloat('Halo Dunia');
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


// // Penjumlahan aritmatika
// var usiaAndi = 1;
// var usiaBudi = 4;

// console.log(usiaAndi * usiaBudi); 
// console.log(usiaAndi / usiaBudi);
// console.log(usiaAndi + usiaBudi);
// console.log(usiaAndi - usiaBudi);
// console.log(usiaAndi % usiaBudi); // 40:20 = 2, sisa 0 hanya berlaku untuk bilangan integer
// console.log(usiaAndi ** usiaBudi);

// var usiaAndi = 40;
// var usiaBudi = 20;

// // usiaAndi++   // usia Andi +1
// // usiaAndi + 1 // perintah untuk menghitung
// // usiaAndi++ // perintah untuk menghitung
// console.log(usiaAndi + 1); // print operasi aritmatika tanpa mengganti nilai pada var
// usiaAndi = usiaAndi + 1 // mengganti nilai variabel berdasarkan operator instruksi
// console.log(usiaAndi); 

// usiaBudi--   // usia Budi -1
// usiaBudi--
// console.log(usiaBudi);

// //latihan
// var numOne = 9
// numOne + 1

// console.log(numOne)

// numOne += 1

// console.log(numOne)


// console.log(Math.PI); //nilai pi

// console.log(Math.abs(-4.7)) //Math.abs(x) returns the absolute (positive) value of x:

// console.log(Math.pow(8, 2)) //Math.pow(x, y) returns the value of x to the power of y:

// console.log(Math.sqrt(64)) //Math.sqrt(x) returns the square root of x

// console.log(Math.cbrt(8)) // Math.cbrt(x) akar pangkat 3 dari x


// // Nulis function yang sama dalam beberapa line yang berbeda; Press option + Klik line yang dituju
// var a = Math.round(4.7)
// console.log(a)
// var b = Math.round (4.4)
// console.log(b)
// var c = Math.floor (4.9)
// console.log(c)
// var d = Math.ceil (4.9)
// console.log(d) 

// console.log(Math.round(4.7)); //Math.round(x) returns the value of x rounded to its nearest integer:

// console.log(Math.round(4.4));

// console.log(Math.floor(4.7)); //Math.floor(x) returns the value of x rounded down to its nearest integer:

// console.log(Math.ceil(4.4)); //Math.ceil(x) returns the value of x rounded up to its nearest integer:


// console.log(Math.random()); //Nilainya random 0 > x > 0.99

// console.log(Math.max(1,3,5));

// console.log(Math.min(1,3,5));

// //Aplikasi random dadu
// var dadu = Math.random() * 6
// var hasilDadu = Math.floor(dadu)
// console.log(hasilDadu + 1)

// var dadu = Math.random() * 6
// var hasilDadu = Math.ceil(dadu)
// console.log(hasilDadu)


// //menampilkan deretan bilangan 
// x = [1,2,3,4,5]
// console.log(x)

// // Basic date object
// let a = new Date()
// console.log(a.getFullYear())
// console.log(a.getMonth())
// console.log(a.getDate())
// console.log(a.getDay())
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())
// console.log(a.getMilliseconds())

// -----------------------------------4th Session-----------------------------------

// var x = 5;
// var y = '5';
// var z = 6;
// console.log(x===y && y<z); // === tipe data harus sama
// console.log(x===y || y<z);
// console.log(!(x===y || y<z));


// var usiaAndi = 40;

// console.log(usiaAndi *= 2); 
// console.log(usiaAndi /= 2); 
// console.log(usiaAndi += 2); 
// console.log(usiaAndi -= 2);  
// console.log(usiaAndi %= 2);

// var x = 5;
// var y = '5'; 
// console.log(x == y);
// console.log(x === y);
// console.log(x > y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x <= y);


// Comparison Operators
// Boolean ; True / False
// console.log(4 == 4)
// console.log(4 === 4)
// console.log(4 == '4')
// console.log(4 === '4')

// var benar = 4 < 5
// var salah = 4 > 5

// console.log(benar && benar)
// console.log(benar && salah)
// console.log(benar || benar)
// console.log(benar || salah)

// var umur = 27
// var sim = true
// var ktp = false

// if(umur > 18 && ktp && sim){
//     console.log ('boleh berkendara')
// }else {
//     console.log ('Belum boleh berkendara')
// }

// var umur = "aaaaa"

// if(umur < 18 && ktp && sim){
//     console.log ('kurang dari 18 tahun')
// }else if (umur == 18){
//     console.log ('Pas 18 tahun')
// }else if (umur > 18 && umur < 25){
//     console.log ('Usia antara 18 - 25 tahun')
// }else if (isNaN(umur)){
//     console.log('Bukan Angka')
// }else {
//     console.log ('lebih dari 25 tahun')
// }

// var umur = 27

// if(umur < 18 ){
//     console.log ('kurang dari 18 tahun')
// }else if (umur == 18){
//     console.log ('Pas 18 tahun')
// }else if (umur > 18 && umur < 25){
//     console.log ('Usia antara 18 - 25 tahun')
// }else if (isNaN(umur)){
//     console.log('Bukan Angka')
// }else {
//     console.log ('lebih dari 25 tahun')
// }

// var umur = 19
// switch (true){
//     case umur < 18:
//         console.log ('Kurang dari 18 tahun')
//         break    
//     case umur == 18:
//         console.log ('Pas 18 tahun')
//         break
//     case umur > 18 && umur < 25:
//         console.log ('Diantara 18 - 24 tahun')
//         break
//     default:
//         console.log('tidak diketahui')


// var job = 'guru'
// switch  (job){
//     case 'guru':
//         console.log('Sedang mengajar');
//         break;
//     case 'murid':
//         console.log('Sedang belajar');
//         break;
//     case 'koki':
//         console.log('Sedang memasak');
//         break;
    // default:
    //     console.log ('Tidak diketahui');

