class Form {
    constructor() {
        this.form = document.querySelector('form');
        this.itemsForm = document.querySelectorAll('.input')
        this.overlayIsValid = document.querySelector('.overlayIsValid')
    }

    submit(modal) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const errors = document.querySelectorAll("form p")
            errors.forEach((err) => {
                err.remove()
            })
            const formData = new FormData(e.target)
            const formDataJson = Object.fromEntries(formData.entries())
            const isValid = this.verifForm()
            if (isValid) {
                this.isValid(modal)
                this.sendEmail(formDataJson)
            } else {
                console.log('errors');
            }
        })
    }
    isValid(modal) {
        this.overlayIsValid.style.display = "block"
        setTimeout(() => {
            this.resetForm()
            modal.modal.style.display = "none"
            this.overlayIsValid.style.display = "none"
        }, 1500)

    }
    verifForm1() {
        this.itemsForm.forEach((item) => {
            item.addEventListener('input', (e) => {
                const errors = document.querySelectorAll("form p")
                errors.forEach((err) => {
                    err.remove()
                })
                if (item.name === "name" || item.name === "firstName") {
                    const regexEmpty = new RegExp(/^[A-Za-z-]+$/);
                    if (!item.value) {
                        item.style.borderColor = "#2f3542"
                    } else if (!regexEmpty.test(item.value)) {
                        item.style.borderColor = "red"
                        const err = `Seul les caractéres alphanumériques sont acceptés, utilisé (-) pour les ${item.id} composés.`
                        item.after(this.templateError(err))
                    } else if (item.value.length < 3) {
                        item.style.borderColor = "red"
                    } else {
                        item.style.borderColor = "green"
                    }
                } else if (item.name === "email") {
                    const regexEmail = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
                    if (!item.value) {
                        item.style.borderColor = "#2f3542"
                    } else if (!regexEmail.test(item.value)) {
                        item.style.borderColor = "red"
                        const err = `Veuillez renseigner un email valid.`
                        item.after(this.templateError(err))
                    }
                    else {
                        item.style.borderColor = "green"
                    }
                } else if (item.name === "objet" || item.name === "message") {
                    if (!item.value) {
                        item.style.borderColor = "#2f3542"
                    } else if (item.value.length < 10) {
                        item.style.borderColor = "red"
                        const err = `Veuillez renseigner 10 caractères au minimumn pour le ${item.name}.`
                        item.after(this.templateError(err))
                    } else {
                        item.style.borderColor = "green"
                    }
                }
            }
            )
        })
    }
    verifForm() {
        this.itemsForm.forEach((item) => {
            if (item.name === "name" || item.name === "firstName") {
                const regexEmpty = new RegExp(/^[A-Za-z-]+$/);
                if (!item.value) {
                    const err = `Veuillez renseigner un ${item.id}.`
                    item.after(this.templateError(err))
                } else if (!regexEmpty.test(item.value)) {
                    const err = `Seul les caractéres alphanumériques sont acceptés, utilisé (-) pour les ${item.id} composés.`
                    item.after(this.templateError(err))
                } else if (item.value.length < 3) {
                    const err = `Veuillez renseigner 3 caractères au minimumn pour le ${item.name}.`
                    item.after(this.templateError(err))
                }
            } else if (item.name === "email") {
                const regexEmail = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
                if (!item.value) {
                    const err = `Veuillez renseigner un ${item.name}.`
                    item.after(this.templateError(err))
                } else if (!regexEmail.test(item.value)) {
                    const err = `Veuillez renseigner un email valid.`
                    item.after(this.templateError(err))
                }
            } else if (item.name === "objet" || item.name === "message") {
                //TODO FIND REGEX TO INPUT TEXT AVOID JS 
                /* const regexEmpty = new RegExp(/^[A-Za-z-]+$/);  */               if (!item.value) {
                    const err = `Veuillez renseigner un ${item.name}.`
                    item.after(this.templateError(err))
                }/*  else if (!regexEmpty.test(item.value)) {
                    const err = `Attention  ${item.name}`
                    item.after(this.templateError(err)) 
                } */ else if (item.value.length < 10) {
                    const err = `Veuillez renseigner 10 caractères au minimumn pour le ${item.name}.`
                    item.after(this.templateError(err))
                }
            }

        });
        const errors = document.querySelectorAll("form p")
        if (!errors.length) {
            return true
        }
    }
    templateError(err) {
        const pError = document.createElement('p')
        pError.textContent = err
        return pError
    }
    resetForm() {
        this.form.reset()
        this.itemsForm.forEach((item) => {
            item.style.borderColor = "#2f3542"
        })
        const errors = document.querySelectorAll("form p")
        errors.forEach((err) => {
            err.remove()
        })
    }
    sendEmail(data){
        console.log(data);
    }
}
