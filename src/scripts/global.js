let userDiv = document.getElementById('user-div')
let registerDiv = document.getElementById('register-div')


let userName = localStorage.getItem('name')
let email = localStorage.getItem('email')
let password = localStorage.getItem('password')

if(userName && email && password){
    let userNameDiv = document.getElementById('user-name-div')
    let emailDiv = document.getElementById('email-div')

    userNameDiv.innerText =  userName
    emailDiv.innerText =  email

    userDiv.classList.add('block')
    registerDiv.classList.add('hidden')
}else{
    userDiv.classList.add('hidden')
    registerDiv.classList.add('block')
}


function signOut(){
    localStorage.clear()
    window.location.href = './pages/login.html'
}