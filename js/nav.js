const hamberger = document.querySelector(".hamburger")
const nav = document.querySelector(".responsiveNav")
const itemsNav = document.querySelectorAll(".responsiveNav a")

hamberger.addEventListener('click',() => {
    hamberger.classList.toggle("isActive")
    nav.classList.toggle("navIsActive")
    itemsNav.forEach((item) => {
        item.addEventListener('click', () => {
            nav.classList.remove("navIsActive")
            hamberger.classList.remove("isActive")
        })
    })
})

