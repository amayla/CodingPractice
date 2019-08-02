//*************************************Soal No 1*************************
//latihan soal
// var x = 4, y = 3, z = 2
// var w = ((x + y * z)/ (x * y)) **  (z)
// console.log(w)
// console.log(Math.round (w))

// *************************Tugas No. 3*********************************
// var a = 8
// console.log(Math.cbrt(a))


// ***************************Tugas No. 5*******************************
// var andiPerBudi = 0.4
// var andiPlusBudi = 49
// var budi = andiPlusBudi / (andiPerBudi + 1)
// var andi = 49 - budi
// console.log(andi + 2)
// console.log(budi + 2)

// bisa memanfaatkan rasio andi = 2 budi = 5 rasio andi+budi = 7
 

//****************************Tugas No. 6*******************************
// var tanggalNow = new Date()
// var tanggal = tanggalNow.getDate()
// var bulan = tanggalNow.getMonth()
// var tahun = tanggalNow.getFullYear()
// function pad(n) {
//     return n<10 ? '0'+n : n;
// }
// var tgBlTh = pad(tanggal) + ' - '+ pad (bulan+1) + ' - ' + tahun
// var namaBulan = [
//     1,2,3,4,5,6,7,8,9,10,11,12
//     // "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
//   ];
// var tanggalLengkap =  pad (tanggal) + ' - ' + namaBulan[bulan] + ' - ' + tahun

// // console.log(tanggalLengkap)
// var tanggalSekarang = tanggalNow.getDate() - 1
// var bulanSekarang = tanggalNow.getMonth() + 3
// var tahunSekarang = tanggalNow.getFullYear() - 2

// var tanggalItu = pad (tanggalSekarang) + ' - ' + namaBulan[bulanSekarang] + ' - ' + tahunSekarang
// var tanggalBesok = pad (tanggalSekarang + 1) + ' - ' + namaBulan[bulanSekarang] + ' - ' + tahunSekarang
// var tanggalKemarin = pad (tanggalSekarang - 1) + ' - ' + namaBulan[bulanSekarang] + ' - ' + tahunSekarang

// console.log('Sekarang tanggal ' + tanggalItu + '\n' + 'Besok tanggal ' + tanggalBesok)
// console.log('Kemarin tanggal ' + tanggalKemarin)

// ************************Tugas No. 9*************************************
// //Aplikasi random angka 1-100
// var angka = Math.random() * 100
// var hasilAngka = Math.ceil(angka)
// console.log('Angka anda: ' + hasilAngka)

// *************************Tugas No. 4************************************
// var hari = 485
// // cari berapa tahun
// var tahun = Math.floor(hari / 360)
// // sisa hari setelah tahun
// var sisahari = hari % 360

// //Cari berapa bulan
// var bulan = Math.floor (hari / 30)
// //sisa
// var sisaHariB = hari % 30

// //Cari berapa minggu
// var minggu = Math.floor (hari / 7)
// //sisa hari
// var sisaHariM = hari % 7

// console.log ('485 hari sama dengan')
// console.log ( tahun + ' Tahun'+ ' ' + sisahari + ' Hari')
// console.log ( bulan + ' Bulan' + ' ' + sisaHariB + ' Hari')
// console.log ( minggu + ' Minggu' + ' ' + sisaHariM + ' Hari')

// ***************************Tugas No. 7 *********************************
// var text = 'abracadabra'
// //banyak karakter pada string
// var pjtext = text.length
// // hilangkan a
// var text2 = text.replace(/a/g, '')
// // jml karakter setelah a hilang
// var panjang2 = text2.length
// //banyaknya a = jml karakter text-jml karakter tanpa a
// var hasil = pjtext - panjang2
// console.log('banyaknya huruf a pada kata ' + (text) + ' adalah ' + (hasil))

// // ***************************Tugas No. 8***********************************
// var A = 60
// var B = 40
// var jarak = 120
// var waktu = jarak / (A+B)
// var jam = Math.floor(waktu)
// var menit = (waktu * 60) % 60
// var crash = 9 + jam + ' : ' + menit
// console.log(crash)

// ****************************Tugas No. 9***********************************
//  // //Aplikasi random angka 1-100
// var angka = (Math.random() * 100)
// var hasilAngka = Math.floor(angka) + 1
// console.log('Angka anda: ' + hasilAngka)

        