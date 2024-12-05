import getData from './api.js'
getData()


let dashBd = document.querySelector(".dashBd")
let dashBdOrder = document.querySelector(".dashBdOrder")
let dashBdProd = document.querySelector(".dashBdProd")
let dashBdOther = document.querySelector(".dashBdOther")


dashBd.onclick=()=>{
    window.location="../Dashboard/index.html"
}

dashBdOther.onclick=()=>{
    window.location="../Others/index.html"
}