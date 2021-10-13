const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".responsiveNav")
const itemsNav = document.querySelectorAll(".responsiveNav a")

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle("isActive")
    nav.classList.toggle("navIsActive")
    itemsNav.forEach((item) => {
        item.addEventListener('click', () => {
            nav.classList.remove("navIsActive")
            hamburger.classList.remove("isActive")
        })
    })
})

