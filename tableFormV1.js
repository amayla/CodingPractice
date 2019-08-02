//get data manusia
let arrHewan= []    
var fun2 = () => {
    let data_nama   = document.getElementById('nameH').value
    let data_umur    = document.getElementById('ageH').value
    let data_kelamin    = document.querySelector('input[name=sex]:checked').value
    let data_tipe    = document.querySelector('input[name=stat]:checked').value    
    
console.log(data_nama)
console.log(data_umur)
console.log(data_kelamin)
console.log(data_tipe)    

    arrHewan.push(
        {
        name : data_nama,
        age : data_umur,
        sex : data_kelamin,
        type : data_tipe
    
    }
    )
    show2()
    console.log(arrHewan);
}
    
    var show2 = () => {
        let list2 = arrHewan.map((hewan) => { //{name, age, sex, type}
            return `<tr>
                <td>${hewan.name}</td>
                <td>${hewan.age}</td>
                <td>${hewan.sex}</td>
                <td>${hewan.type}</td>
    
            </tr>`
        })
    
    document.getElementById('hews').innerHTML = list2.join('')
    }
    