class Project {
    constructor(id, imgs, title, subtitle, logo, desc, category, tags, linkGit, linkUrl) {
        this.id = id;
        this.imgs = imgs
        this.title = title,
            this.subtitle = subtitle,
            this.logo = logo,
            this.desc = desc
        this.category = category
        this.tags = tags
        this.linkGit = linkGit,
            this.linkUrl = linkUrl
    }

    templateModalProject() {
        const container = document.createElement('div');
        container.classList.add('projectModal')
        const contentLeft = document.createElement('div');
        contentLeft.classList.add("left");
        const imgProject = document.createElement("img");
        imgProject.src = `/assets/img/projects/${this.imgs[1]}`;
        const contentRight = document.createElement("div");
        contentRight.classList.add("right");
        const svgTop = document.createElement("img");
        svgTop.classList.add("bgWaveTop");
        svgTop.src = "assets/svgs/rect.svg";
        const svgBottom = document.createElement("img");
        svgBottom.classList.add("bgWaveBottom");
        svgBottom.src = "assets/svgs/rect1.svg";
        const logoProject = document.createElement("img");
        logoProject.src = `/assets/img/projects/logo/${this.logo}`;
        logoProject.classList.add("logo")
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("title");
        const subtitleProject = document.createElement("h5");
        subtitleProject.append(this.subtitle);
        const descProject = document.createElement("p");
        descProject.classList.add("desc")
        descProject.append(this.desc);
        const category = document.createElement("p");
        category.append('Catégorie : ');
        category.classList.add("category")
        const spanCategory = document.createElement("span");
        spanCategory.append(this.category);
        const containerTags = document.createElement("div");
        containerTags.classList.add("tags");
        this.tags.forEach((tag) => {
            const tagItem = document.createElement("span");
            tagItem.classList.add("tags__item");
            if (tag === "HTML") {
                tagItem.classList.add("itemHTML");
            } else if (tag === "CSS") {
                tagItem.classList.add("itemCSS");
            } else if (tag === "JS") {
                tagItem.classList.add("itemJS");
            } else if (tag === "SCSS") {
                tagItem.classList.add("itemSCSS")
            } else {
                tagItem.classList.add("item")
            }
            tagItem.append(tag);
            containerTags.append(tagItem)
        });
        const actionContainer = document.createElement("div");
        actionContainer.classList.add("action");
        const linkGit = document.createElement("a")
        linkGit.href = this.linkGit
        linkGit.setAttribute("target", "_blank")
        const iconGit = document.createElement("i")
        iconGit.classList.add("fab", "fa-github")
        linkGit.append(iconGit)
        if (this.linkUrl != undefined) {
            const linkUrl = document.createElement("a")
            linkUrl.href = this.linkUrl
            linkUrl.setAttribute("target", "_blank")
            const iconLinkUrl = document.createElement("i")
            iconLinkUrl.classList.add("fas", "fa-link")
            linkUrl.append(iconLinkUrl)
            actionContainer.append(linkGit, linkUrl)
        } else {
            actionContainer.append(linkGit)
        }
        contentLeft.append(imgProject)
        titleContainer.append(subtitleProject)
        category.append(spanCategory)
        contentRight.append(svgTop,svgBottom,logoProject,actionContainer,titleContainer,descProject,containerTags)
        container.append(contentLeft, contentRight)
        return container
    }
    templatePortfolioSlider(modal) {
        const itemSlider = document.createElement("div");
        itemSlider.classList.add("slide")
        const img = document.createElement("img");
        const btn = document.createElement("button")
        btn.classList.add('project')
        btn.innerHTML = `${this.title}`
        img.src = `/assets/img/projects/${this.imgs[0]}`;
        btn.addEventListener("click", (e) => {
            modal.init(e, this.templateModalProject())
        })
        itemSlider.append(img, btn)
        return itemSlider
    }

}