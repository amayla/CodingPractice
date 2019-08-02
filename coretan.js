// var arrHewan = [
//     {id: 1, nama: "Molly", usia: 2},
//     {id: 2, nama: "Cimi", usia: 3},
//     {id: 4, nama: "Chaos Meteor", usia: 99}
// ]

// // console.log(typeof(arrHewan))//tipe datanya adalah objek
// // arrHewan.unshift(hewanT)//nambah array baru dalam object
// console.log(arrHewan);
// class baru extends arrHewan {
//     constructor (id,nama,usia){
//     this.id = id;
//     this.nama = nama;
//     this.usia = usia;
//   }
// }
//   var a = new baru(5, ucil, 7)
//   console.log(baru)
function orang(id, nama, usia) {
        this.id = id, this.nama = nama, this.usia = usia
    }
    
    var Andi = new orang(5, 'Meri', 7);
    

    console.log(Andi)
    
    