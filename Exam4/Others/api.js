import get from './dom.js';
let url = "http://localhost:3000/categories"

let adModalCateg = document.querySelector(".adModalCateg")
let inpCatSearch=document.querySelector(".inpCatSearch")

export default async function getCategory() {
    try {
        let { data } = await axios.get(url)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

export async function delCateg(id) {
    try {
        await axios.delete(`${url}/${id}`)
        getCategory()
    } catch (error) {
        console.error(error);
    }
}



let file = null
adModalCateg["inpFileCateg"].onchange = () => {
    let files = adModalCateg["inpFileCateg"].files[0]
    let reader = new FileReader(files)
    reader.readAsDataURL(files)
    reader.onload = () => {
        file = reader.result
    }
}
adModalCateg.onsubmit = async (event) => {
    
    event.preventDefault()
    let addCateg = {
        name: adModalCateg["inpNameCateg"].value,
        img: file
    }
    try {
        await axios.post(url, addCateg)
        adModalCateg.close()
    } catch (error) {
        console.error(error);
    }
}

inpCatSearch.oninput = async ()=>{
    try {
       let {data}= await axios.get(url)
       let result=data.filter((e)=>
       {
       return e.name.toLowerCase().includes(inpCatSearch.value.toLowerCase())
       })
       get(result)
    } catch (error) {
        console.error(error);
    }
}