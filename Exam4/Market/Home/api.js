import { get1} from "./dom.js";
import { get2} from "./dom.js";


let urlProd="http://localhost:3000/products"
let urlCateg="http://localhost:3000/categories"

export async function getProd(){
    try {
        let {data}=await axios.get(urlProd)
         get1(data)
    } catch (error) {
        console.error(error);
    }
}
export async function getCateg(){
    try {
        let {data}=await axios.get(urlCateg)
        get2(data)
    } catch (error) {
        console.error(error);
    }
}