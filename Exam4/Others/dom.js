let divCateg = document.querySelector(".divCateg")
let modalCateg=document.querySelector(".modalCateg")
let btnCat=document.querySelector(".btnCat")
let btnX=document.querySelector(".btnX")
let btnXed=document.querySelector(".btnXed")
let btnCancel=document.querySelector(".btnCancel")
let btnEdCancel=document.querySelector(".btnEdCancel")
let adModalCateg=document.querySelector(".adModalCateg")
let editmodalCateg=document.querySelector(".editmodalCateg")
import { delCateg } from "./api.js";


export default function  get(data){
    divCateg.innerHTML=''
    data.forEach((el)=>{
        let div=document.createElement("div")
        div.classList.add("divCategory")
        
        let img=document.createElement("img")
        img.src=el.img
        img.classList.add("imgCategory")

        let name=document.createElement("h3")
        name.innerHTML=el.name
        name.style.marginLeft="10px"

        let btnEdit=document.createElement("button")
        btnEdit.classList.add("btnEd")
        btnEdit.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
      </svg>
      `
        btnEdit.onclick=()=>{
          editmodalCateg.showModal()
          localStorage.setItem("editmodal",JSON.stringify(el))
        }

      let btnDell=document.createElement('button')
      btnDell.classList.add('btnDell')
      btnDell.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
      <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
    </svg>
    `
    btnDell.onclick=()=>{
        delCateg(el.id)
        get(data)
    }
      div.append(btnEdit,img, btnDell,name)
      divCateg.append(div)
    })
  }

  btnX.onclick=()=>{
    modalCateg.close()
    adModalCateg.reset()

}
  btnXed.onclick=()=>{
    editmodalCateg.close()
    editmodalCateg.reset()

}
btnCancel.onclick=(event)=>{
    event.preventDefault()
    modalCateg.close()
    adModalCateg.reset()
}
btnEdCancel.onclick=(event)=>{
    event.preventDefault()
    editmodalCateg.close()
    // editmodalCateg.reset()
}
  btnCat.onclick=()=>{
    modalCateg.showModal()
  }

