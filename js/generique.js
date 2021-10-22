class Generique {
    constructor(modal, form) {
        this.modal = modal
        this.form = form
    }
    init() {
        this.openModalForm()
        this.isActiveNav()
    }
    isActiveNav() {
        const itemsNav = document.querySelectorAll('.isActiveItemNav')
        itemsNav.forEach((item) => {
            item.addEventListener('click', (e) => {
                itemsNav.forEach((item) => {
                    item.classList.remove('isActiveItem')
                })
                if (e.target.classList.contains('y')) {
                    item.classList.add('isActiveItem')
                }
            })
        })
    }
    openModalForm() {
        const btnsContact = document.querySelectorAll(".contact")
        btnsContact.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                this.modal.init(e)
                this.form.submit(this.modal)
                this.form.verifForm1()
                this.form.resetForm()
            })
        })
    }
}
(async function () {
    const generique = new Generique(new Modal(), new Form())
    generique.init()
})();