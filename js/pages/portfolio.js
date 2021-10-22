class PortFolio {
    constructor(modal,service, sliderDrag) {
        this.modal = modal
        this.service = service
        this.sliderDrag = sliderDrag
        this.projects = [];
        this.sliderPortfolio = document.querySelector(".slideshow") 
    }
    init(){
        this.getProjects()
        this.displayPortfolioProjects()
        this.sliderDrag.init()     
    }
    getProjects() {
        const dataProjects = this.service.fetchProjects()
        dataProjects.forEach((project) => {
            project = new Project(project.id,project.imgs, project.title,project.subtitle,project.logo,project.desc,project.category,project.tags, project.linkGit,project.linkUrl)
            this.projects.push(project)
        })
    }
    displayPortfolioProjects(){
        this.projects.forEach((p) => {
            this.sliderPortfolio.append(p.templatePortfolioSlider(this.modal))
        })
    }
}


