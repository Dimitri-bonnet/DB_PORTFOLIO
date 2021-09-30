const swup = new Swup()
const mount = () => {
    console.log('mount swup');
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
//TODO DESTROY ALL EVENT UNMOUNT SWUP
const unmount = () => {
    console.log('unmount swup');
}
swup.on('contentReplaced', mount);


