import getCategory from "./api.js";
let url = "http://localhost:3000/categories"

let dashBd = document.querySelector(".dashBd")
let dashBdProd = document.querySelector(".dashBdProd")
let editModalCateg = document.querySelector(".editModalCateg")

getCategory()

dashBd.onclick = () => {
    window.location = "../Dashboard/index.html"
}

dashBdProd.onclick = () => {
    window.location = "../Products/index.html"
}






let user = JSON.parse(localStorage.getItem("editmodal"))
console.log(user);
editModalCateg["inpEdNameCateg"].value==user.name 
// let img.src=user.img

let file = null
editModalCateg["inpFileCateg"].onchange = () => {
    let files = editModalCateg["inpFileCateg"].files[0]
    let reader = new FileReader(files)
    reader.readAsDataURL(files)
    reader.onload = () => {
        file = reader.result
    }
}

editModalCateg.onsubmit = async (event) => {
    event.preventDefault()
    let editt = {
        name: user["inpEdNameCateg"].value,
        img: file
    }

    console.log(editt);
    try {
        await axios.put(`${url}/${user.id}`, editt)
    } catch (error) {
        console.error(error);
    }
}


