const hamBtn = document.querySelector('.hamburger');
const menuContainer = document.querySelector('.lists-container')

let isOpen = false;

hamBtn.addEventListener('click',clickHamburgerBtn)

function clickHamburgerBtn(){
    if(!isOpen){
        menuContainer.style.top = '15%';
        hamBtn.classList.remove('fa-bars','hamburger')
        hamBtn.classList.add("fa-times")
        isOpen = true
    }else{
        menuContainer.style.top = '-100%';
        hamBtn.classList.remove('fa-times')
        hamBtn.classList.add('fa-bars','hamburger')
        isOpen = false
    }
}