const swup = new Swup()

const mount = () => {
    if(document.querySelector(".home")){
        const home = new Home()
        home.init()
    }
    if(document.querySelector(".about")){
        const about = new About()
        about.init()
    }
    if(document.querySelector(".portfolio")){
        const portfolio = new PortFolio(new Modal(), new Service(), new SliderDrag())
        portfolio.init()
    }

}
const unmount = () => {
    
}
swup.on('willReplaceContent', unmount)
swup.on('contentReplaced', mount);

window.addEventListener('load', (event) => {
    unmount()
    mount()
});

