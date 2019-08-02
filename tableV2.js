let arrManusia = [
{nama: 'Alex', umur:22, job: 'Dev'},
{nama: 'Budi', umur:23, job: 'CEO'},
{nama: 'Charlie', umur:24, job: 'PM'},
{nama: 'Daniel', umur:25, job: 'CTO'},
{nama: 'Ebo', umur:26, job: 'Dev'}
]

let arrJob = ['All', 'Dev', 'CEO','PM','CTO']

let funInputData = () => { 
//get data
let nama = document.getElementById('nama').value
let umur = document.getElementById('umur').value
let job = document.getElementById('jobInput').value

// push data
arrManusia.push({
    nama,umur, job
})
let ada = arrJob.includes(job)
if(!ada){
    arrJob.push(job)
}
funShow()

}

let remove = (removeIndex) => {
    let hasilRemove = arrManusia.filter((val,index) => {
        return index != removeIndex
    })

    arrManusia = hasilRemove

    funShow(arrManusia)
}

//RENDER LIST
let funShow = () => {
    let listManusia = arrManusia.map((val,index) => {
        return `<tr>
     <td>${val.nama}</td>       
     <td>${val.umur}</td>   
     <td>${val.job}</td>   
     <td><input type = "button" value="Delete" onclick= "remove(${index})"></td>
     <tr>`
    })

    let listJob = arrJob.map((val) => {
        return `<option value = "${val}">${val}</option>`
    
    })

document.getElementById('here').innerHTML = listManusia.join('')
document.getElementById('job').innerHTML = listJob.join('')


}


//FILTER NAME
let funFilterName = () => {
    //Get data from user
    let filter = document.getElementById('search').value//berisi data dari setiap elemen pada objek


    //Filtering
    let hasilFilter = arrManusia.filter((val) => {//val = {name,age,job}}
    let namaLow = val.nama.toLowerCase()
    let filterLow = filter.toLowerCase()
    return namaLow.includes(filterLow)
})
    //Render List
    let list = hasilFilter.map((val) => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`

    })
    document.getElementById('here').innerHTML = list.join('')
}


//Filter usia
let funFilterUmur = () => {
    //num1 = min
    let num1 = document.getElementById('num1').value
    //num2 = max
    let num2 = document.getElementById('num2').value
    let list
    if(!(num1==''|| num2 == '')){
        list = arrManusia.filter((val) => {
            return (val.umur >= num1 && val.umur <= num2)
        })
    }
    list = list.map(val =>{
        return  `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })
    document.getElementById('here').innerHTML = list.join('') 
}


//Filter Job
let funFilterJob = () => {

    let job = document.getElementById('job').value
     //Filtering
     if(job == 'All'){
         list = arrManusia
    }
    else {
        var list = arrManusia.filter((val) => {
        return (val.job.includes(job))
    }
    )} 
//rendering 
      list = list.map((val) => {
         return`<tr>  
         <td>${val.nama}</td>
         <td>${val.umur}</td>
         <td>${val.job}</td>
         </tr>`
     })
     document.getElementById('here').innerHTML = list.join('')


}
funShow()
