import  get  from "./dom.js";

let urlProd="http://localhost:3000/products"

let inputSearch=document.querySelector(".inputSearch")
let selStock=document.querySelector(".selStock")

export default async function getData(){
    try {
        let {data}=await axios.get(urlProd)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

export async function DelUser(id){
    try {
        await axios.delete(`${urlProd}/${id}`)
        getData()
    } catch (error) {
        console.error(error);
    }
}

 inputSearch.oninput = async ()=>{
    try {
       let {data}= await axios.get(urlProd)
       let result=data.filter((e)=>
       {
       return e.product.toLowerCase().includes(inputSearch.value.toLowerCase())
       })
       get(result)
    } catch (error) {
        console.error(error);
    }
}

selStock.onchange = async () => {
 try {
    let {data} = await axios.get(urlProd)
    if(selStock.value=="all"){
        getData()
    }
    else if(selStock.value=="in"){
        let filter=data.filter((e)=>e.Count>0)
        get(filter)
    }
    else{
        let filter=data.filter((e)=>e.Count==0)
        get(filter)
    }
 } catch (error) {
    console.error(error);
 }
 }