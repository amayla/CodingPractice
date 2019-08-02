// mengambil element HTML yang memiliki ID = 'nama'
// let something = document.getElementById('nama')
// console.log(something);

// atau
let myfunction = () => {
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    // let genderArray = document.getElementsByName('gender')
    // for (var i = 0; i < genderArray.length; i++) {
    //     if (genderArray[i].checked) {
    //         var gender = genderArray[i].value

    //     }
    // }
    /*cara lain*/
    let gender = document.querySelector('input[name=gender]:checked').value
    // let gender = document.querySelector('input[name=gender]:checked')
    let job = document.getElementById('pekerjaan').value
    let skill = document.querySelectorAll('input[name=skill]:checked')
    let skillFull = ''
    for(var i=0; i<skill.length;i++){
        skillFull += skill[i].value+", "
    }
    // console.log(nama, umur, gender)
    let p = document.getElementById('disini')
    //ngasih koma
    skillFull = skillFull.slice(0,-2)
  
    p.innerHTML = `nama: ${nama}<br> usia: ${umur}<br> gender: ${gender}<br> pekerjaan: ${job}<br> skill:${skillFull} `

}