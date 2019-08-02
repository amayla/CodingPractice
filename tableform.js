//get data manusia
let arrHuman = []
let arrHewan= [] 

var fun1 = () =>{
    let data_name = document.getElementById('name').value
    let data_age = document.getElementById('age').value
    let data_sex = document.querySelector('input[name=sex]:checked').value
    let data_job = document.getElementById('job').value
    
    console.log(data_name);
    console.log(data_age);
    console.log(data_sex);
    console.log(data_job);
    
    arrHuman.push(
        {
            name : data_name,
            age : data_age,
            sex : data_sex,
            job : data_job
        }
        )
    show1();
    console.log(arrHuman);     
}

var show1 = ()=>{
    //human = {name, age, sex, job}
    let list = arrHuman.map((human) =>{
        return `<tr>
        <td>${human.name}</td>
        <td>${human.age}</td>
        <td>${human.sex}</td>
        <td>${human.job}</td>
        </tr>`        
    })
    document.getElementById('mans').innerHTML = list.join('')
}

   
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
        let list = arrHewan.map((hewan) => { //{name, age, sex, type}
            return `<tr>
                <td>${hewan.name}</td>
                <td>${hewan.age}</td>
                <td>${hewan.sex}</td>
                <td>${hewan.type}</td>
    
            </tr>`
        })
    
    document.getElementById('hews').innerHTML = list.join('')
    }
    // }