let tBody = document.querySelector(".tBody")
let btnAdd=document.querySelector(".btnAdd")
import { DelUser } from "./api.js";

export default function get(data) {
    tBody.innerHTML = ''
    data.forEach((user) => {
        let tr = document.createElement("tr")

        let tdCheckbox = document.createElement("td")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        let tdProduct = document.createElement("td")
        tdProduct.classList.add("product")
        
       let  tdName = document.createElement("p")
        tdName.innerHTML = user.product

        let tdImg = document.createElement("img")
        tdImg.classList.add("img")
        tdImg.src = user.image

        let tdINnvent = document.createElement("td")
        tdINnvent.innerHTML = user.Count
        if(user.Count>0){
          tdINnvent.innerHTML=`${user.Count} in stock`
        }
        else if(user.Count==0 || user.Count<0){
          tdINnvent.innerHTML="Out of stock"
          tdINnvent.style.color="red"
        }


        let tdCategory = document.createElement("td")
        tdCategory.innerHTML = user.Categories

        let tdPrice = document.createElement("td")
        tdPrice.innerHTML = `$${user.price}`

        let tdActions = document.createElement("td");

        let btnEdit = document.createElement("button");
        btnEdit.classList.add("btnEdit")
        btnEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-edit">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
      `
      btnEdit.onclick=async()=>{
        
      }

        let btnDel = document.createElement("button")
        btnDel.classList.add("btnDel")
        btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-del">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
      `
      btnDel.onclick = () => {
        DelUser(user.id)
        get(data)
      }
      
      tdProduct.append(tdImg,tdName)
        tdCheckbox.append(checkbox)
        tdActions.append(btnEdit, btnDel)
        tr.append(tdCheckbox, tdProduct, tdINnvent, tdCategory, tdPrice, tdActions)
        tBody.append(tr)

    })
}

btnAdd.onclick = () => {
    window.location = "../add/index.html"
}

