class About {
    constructor() {

    }
    init() {

        const btnsTab = document.querySelectorAll(".tab__action button")
        const itemsTab = document.querySelectorAll(".tab__item")
        btnsTab.forEach((btn) => {
            itemsTab[1].style.display = " none"
            btnsTab[0].classList.add("active")
            btn.addEventListener("click", (e) => {
                const tabName = e.target.value
                this.switchTab(e, tabName)
            })
        })
        this.openItem()
    }
    switchTab = (e, tab) => {
        const btnsTab = document.querySelectorAll(".tab__action button")
        const itemsTab = document.querySelectorAll(".tab__item")
        itemsTab.forEach((tab) => {
            tab.style.display = "none"
        })
        btnsTab.forEach((btn) => {
            btn.classList.remove("active")
        })
        document.getElementById(tab).style.display = "block"
        e.currentTarget.className += 'active'
    }
    openItem() {
        const items = document.querySelectorAll('.content__parcours .item')
        items.forEach((item) => {
            item.addEventListener('click', () => {
                //Je vérifie si item a un enfant
                if (item.children[1]) {
                    if (item.children[1].classList.contains('itemIsActive')) {
                        /* CONTENT */
                        item.children[1].classList.remove('itemIsActive')
                        /* ICON */
                        item.children[0].children[0].children[0].style.display = "block"
                        item.children[0].children[0].children[1].style.display = "none"
                    } else {
                        const itemsHidden = document.querySelectorAll('.item__hidden')
                        const iconDown = document.querySelectorAll(".fa-chevron-circle-down")
                        const iconUp = document.querySelectorAll(".fa-chevron-circle-up")
                        /* CONTENT */
                        itemsHidden.forEach((i) => {
                            i.classList.remove('itemIsActive')
                        })
                        item.children[1].classList.add('itemIsActive')
                        /* ICON */
                        iconUp.forEach((i) => {
                            i.style.display = "none"
                        })
                        iconDown.forEach((i) => {
                            i.style.display = "block"
                        })
                        item.children[0].children[0].children[0].style.display = "none"
                        item.children[0].children[0].children[1].style.display = "block"
                    }
                }
            })
        })
    }
}
