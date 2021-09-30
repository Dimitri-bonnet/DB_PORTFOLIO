class Generique {
    constructor(modal, form) {
        this.modal = modal
        this.form = form
    }
    init() {
        this.openModalForm()
    }
    openModalForm() {
        const btnsContact = document.querySelectorAll(".contact")
        btnsContact.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                this.modal.init(e)
                this.form.submit(this.modal)
                this.form.resetForm()
            })
        })

    }
}
(async function () {
    const generique = new Generique(new Modal(), new Form())
    generique.init()
})();

/* swup.on('contentReplaced', console.log('ici')) */

/* const mount = () => {
    this.displayf
}
swup.on('contentReplaced', mount()) */
/* const mount = () => { */
/* } */
/*  */
/* mount() */
/*  */
/* const unmount = () => { */
/*  */
/* } */
/* swup.on('contentReplaced', mount) */
/* swup.on('willReplaceContent', unmount()) */

/* isLoader(){
     window.addEventListener("load", (e) => {
         const loader = document.querySelector(".bgLoader")
         loader.classList.add("hiddenLoader")
       });
 } */