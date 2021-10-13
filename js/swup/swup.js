const swup = new Swup()
document.addEventListener("DOMContentLoaded", () => {
   console.log('ici');
});
const mount = () => {
    console.log('mount swup');
    if(document.querySelector(".home")){
        const home = new Home()
        home.init()
    }
    if(document.querySelector(".about")){
        console.log('about');
        const about = new About()
        about.init()
    }
    if(document.querySelector(".portfolio")){
        const portfolio = new PortFolio(new Modal(), new Service(), new SliderDrag())
        portfolio.init()
    }
}
//TODO DESTROY ALL EVENT UNMOUNT SWUP
const unmount = () => {
    console.log('unmount swup');
}

swup.on('willReplaceContent', unmount)
swup.on('contentReplaced', mount);
window.addEventListener('load', (event) => {
    unmount()
    mount()
});

