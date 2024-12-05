let btnBack = document.querySelector('.btnBack');
let addForm = document.querySelector(".addForm")
let url = "http://localhost:3000/products"

btnBack.onclick = () => {
    window.location = "../Products/index.html"
}

let file = null
addForm["inpfile"].onchange = () => {
    let files = addForm["inpfile"].files[0]
    let reader = new FileReader(files)
    reader.readAsDataURL(files)
    reader.onload=()=> {
        file = reader.result
    }
}
addForm.onsubmit = async (event) => {
    event.preventDefault()
    let addProduct = {
        product: addForm["prodName"].value,
        Description: addForm["descipt"].value,
        Categories: addForm["selCategory"].value,
        price: addForm["price"].value,
        Count: addForm["count"].value,
        Size: addForm["size"].value,
        weigt: addForm["selvazn"].value,
        color: addForm["color"].value,
        image: file
    }
    try {
      await axios.post(url,addProduct)
      window.location="../Products/index.html"  
    } catch (error) {
        console.error(error);
    }
}

