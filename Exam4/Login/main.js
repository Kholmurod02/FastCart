let LoginForm=document.querySelector(".LoginForm")

let url="http://localhost:3000/usersLogin"
let data=[]

async function getData(){
    try {
        let  resp= await fetch(url)
    data=await resp.json()

    } catch (error) {
        console.error(error);
    }
}
getData()

LoginForm.onsubmit=(event)=>{
    event.preventDefault();

    let email=LoginForm["email"].value;
    let password=LoginForm["password"].value;

    if(email=="" || password==""){
        alert("Please enter your email");
        return
    }
    let admin=data.find((el)=>{
        return el.email===email && el.password===password
    })
    if(admin){
        window.location="../Dashboard/index.html"
    }
}