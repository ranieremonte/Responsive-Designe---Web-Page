const colseNav = document.querySelector('.close-nav')
const openNav = document.querySelector('.open-nav')
const nav = document.querySelector('.nav')

colseNav.addEventListener("click", () => {
    nav.classList.remove('navigation-open')
})

openNav.addEventListener("click", () => {
    nav.classList.add('navigation-open')
})

