// let first=document.querySelector(".first")
// let others = document.querySelectorAll(".others")

// let slideShow = Array.from(others)
// let cnt = 0
// function slider() {
//     slideShow[cnt].style.display = 'none';
//     cnt++;
//     if (cnt === slideShow.length) {
//         cnt = 0;
//     }
//     slideShow[cnt].style.display = 'block';
//     others.src = slideShow[cnt].src;
// }
// setInterval(slider, 1000)


let slideProd=document.querySelector(".slideProd")
let slideCateg=document.querySelector(".slideCateg")
let firstImg=document.querySelector(".firstImg")

let cnt=0
setInterval(() => {
    cnt++;
    if(cnt==3)
    {
        firstImg.src="../../photos/ps5.webp"
        // cnt=0
    }
    if(cnt==6)
    {
        firstImg.src="../../photos/Parfume.jpg"
    }
    if(cnt==9)
    {
        firstImg.src="../../photos/tv.jpg"
    }
    if(cnt==12)
    {
        firstImg.src="../../photos/apple.png"
        cnt=0  
    }
}, 1000);


export function get1(data) {
    slideProd.innerHTML=""
    data.forEach((el)=>{
        let divProd= document.createElement("div");
        divProd.classList.add("divProd");
        let imgProd= document.createElement("img");
        imgProd.style.width="200px";
        imgProd.style.height="200px";
        imgProd.src=el.image;


        let nameProd=document.createElement("h3");
        nameProd.style.marginTop="10px";
        nameProd.innerHTML=el.product;

        let priceProd=document.createElement("p");
        priceProd.style.color="red";
        priceProd.innerHTML=`$${el.price}`

        divProd.append(imgProd, nameProd, priceProd);
        slideProd.append(divProd);
    })
}
export function get2(data) {
    slideCateg.innerHTML=""
    data.forEach((el)=>{
        let divCat= document.createElement("div");
        divCat.classList.add("divCat");


        let imgCat=document.createElement("img");
        imgCat.style.width="200px";
        imgCat.style.height="200px";
        imgCat.src=el.img;

        let nameCat=document.createElement("h3");
        nameCat.innerHTML=el.name;

        divCat.append(imgCat, nameCat);
        slideCateg.append(divCat);
        
    })
}
