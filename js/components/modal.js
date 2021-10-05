class Modal {
    constructor() {
        this.modal = document.querySelector(".bgModal")
        this.modalContent = document.querySelector(".modal__content")
        this.btnCloseModal = document.querySelector(".cm")
    }
    init(e, content) {
        this.displayContentModal(e, content)
        this.openModal()
    }

    displayContentModal(e, content) {
        const form = document.querySelector(".formModal")
        if (e.target.classList.contains("contact")) {
            form.style.display = "block"
        } else if (e.target.classList.contains("project")) {
            this.modalContent.append(content)
            form.style.display = "none"
        }
        this.closeModal()
    }
    openModal() {
        this.modal.style.display = "block"
    }
    closeModal() {
        this.btnCloseModal.addEventListener('click', () => {
            this.modal.style.display = "none"
            const mainModalProject = document.querySelector(".projectModal")
            if (mainModalProject) {
                mainModalProject.remove()
            }
        })
    }
}
