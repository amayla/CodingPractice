// // CONSTANT
// // var yang nilainya tidak boleh/ tidak bisa diubah
// // const bunga = 0.3
// // bunga = 0.5
// // console.log(bunga);
// /*
// // LET & CONST
//     - dibatasi oleh function dan kurung kurawal
// */

// // function scope(){
// //     var didalam = 14
// //     let doom = 666
// //     const pi = 3.14
// // }

// // if(true){
// //     var diluar = 35
// //     let doomed = 999
// //     const hour = 24
// // }
// // console.log(diluar);
// // console.log(didalam);
// // console.log(doomed);

// // template string
// // TICK, dibawah tombol ESC
// // let text = `Halo 

// // Dunia`

// // let teks = 'Halo \nDunia'

// // console.log(teks);
// // console.log(text);
// // function something (name){
// //     console.log('HAAAI'+ name);
// // }
// // console.log(
// //     `HAAAAAI I'm ${name} "kutip dua"`//memasukan var/func diantara string formatnya ${}
// // );
// // console.log(
// //     `${number} dikali dua = ${number * 2}`
// // );
// // something ('fake',3)
// // let kalimat = `t-shirt mahal`
// // let hasil = kalimat.includes(`shirt`)//true
// // let hasil = kalimat.includes(`Shirt`)//false
// // console.log(hasil);
// // //hasilnya akan error karena nama var nya tidak boleh sama
// // let kalimat = `t-shirt mahal`
// // let hasil = kalimat.includes(`shirt`)//true
// // let result = kalimat.includes(`Shirt`)//false
// // console.log(hasil);
// // //true
// // function expression
// // var kuadrat = function (angka = 3){//nama function pada variabel
// //     console.log(angka * angka);
// // }
// // kuadrat()


// // ARROW FUNCTION
// //  hapus kurung kurawal jika kode yang dijalankan singkat
// // var sayHello = (name) => {
// //     console.log(`Hello ${name}`);
// // }
// // var sayHai = (name) => console.log(name) // versi singkat dengan arrow

// // var sayhai = function (name){ // function script line 68 dijabarkan
// //     console.log (name)
// // }

// // var renumb = (angka, number) =>{
// //     return angka * number
// // }
// // // var renumb = (angka, number) => angka * number

// // var retangka = angka => angka * 2

// // sayHello('Maverick')
// // sayHai('Rudolf')

// // ARRAY FILTERING
// /*
// - filter() menerima suatu input berupa function (callback)
// - callback function menerima satu input berupa data dari array
// - callback function HARUS return TRUE atau FALSE
// - jika return TRUE, data akan tetep ada, Jika FALSE akan menghilang
// - Filter() menghasilkan / mengeluarkan / me return array baru
// */

// // let angka = [0,1,2,3,4,5]// data dalam sebuah array disebut dengan element

// // let hasil = angka.filter((element)=> {
// //             return element < 3
// // })
// // console.log(angka) // [0, 1, 2, 3, 4, 5 ]
// // console.log(hasil) // [ 0, 1, 2 ]

// // program filtering tangpa menggunakan method filter

// // Array.prototype.filterx =  function (fun) {
// //     var filtered = [];
// //     for(let i = 0; i < this.length; i++) {
// //       if (fun(this[i], i, this)) filtered.push(this[i]);
// //     }
// //     return filtered;
// //   };
  
// //   var returnedArr = [1,2,3,4,5,6].filterx(function(element, index, arr) {
// //     return element > 5;
// //   });
  
// //   console.log(returnedArr);
//**********************************KELUAR DI UJIAN************************************************/
// let number = [1,2,3,4,5,6,7,8]

// let funFilter = (array, fun) => {
//     //array = {1,2,3,4,5,6,7,8}
//     //fun = return element < 7 fun = 12 +> return 12<14 == true
//     //element = array[i]
//     let arrayBaru = []
//     for(var i = 0; i< array.length; i++){
//         //array[0] = 12
//         var res = fun(array[i])//true
//         //res = true : parameter kapan data akan di push kedalam arrayBaru
//         if(res){
//             arrayBaru.push(array[i])
//         }
//      }return arrayBaru
// }

// var kurang = (element) => {return element <7}
// var genap = (element) => {return element %2 == 0}

// let end = funFilter(number, kurang)
// let endGenap = funFilter(number, genap)

// console.log(number)
// console.log(end)
// console.log(endGenap)

// ***********************************Lesson 12*******************************************
// MAP ARRAY
/* 
- Map() function yang menerima input berupa function / callback
- Callback function menerima input berupa element pada array
- map akan me return array yang baru
- map() akan mengubah bentuk suatu data ke bentuk lainnya
*/

let angka =[1,2,3,4,5]

let hasil = angka.map((element) => {
        return element * 2
})

let hasilBoolean = angka.map((element)=>{//element adalah variabel yang di declare didalam function. dia nggak bisa dipanggil ke luar
        return element < 4
}
)
let hasilObj = angka.map((element)=>{
    return {hari: 'Jumat', angka: element}
})
let hasilStr = hasilObj.map((element)=>{
    return element.hari + ' ' + element.angka
})
console.log(angka);//[ 1, 2, 3, 4, 5 ]
console.log(hasil);//[ 2, 4, 6, 8, 10 ]
console.log(hasilBoolean);//[ true, true, true, false, false ]
console.log(hasilObj);
/*{ hari: 'Jumat', angka: 1 },
{ hari: 'Jumat', angka: 2 },
{ hari: 'Jumat', angka: 3 },
{ hari: 'Jumat', angka: 4 },
{ hari: 'Jumat', angka: 5 } ]
*/

console.log(hasilStr);
//[ 'Jumat 1', 'Jumat 2', 'Jumat 3', 'Jumat 4', 'Jumat 5' ]






