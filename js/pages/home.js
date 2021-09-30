class Home{
    constructor(){}
    init(){
        console.log('init homePage');
        const textAnim = document.querySelector('h3');
console.log(textAnim);
        new Typewriter(textAnim, {
            deleteSpeed: 20
        })
        .changeDelay(30)
        .typeString(`Bienvenue sur mon <strong>PORTFOLIO</strong>,`)
        .pauseFor(300)
        .typeString(`<br> je m'appelle <strong>DIMITRI</strong> et je suis développeur front-end, `)
        .changeDelay(100)
        .typeString(`<strong class="JAVASCRIPT">JAVASCRIPT</strong>`)
        .deleteChars(10)
        .typeString(`<strong class="ANGULAR">ANGULAR</strong>`)
        .deleteChars(7)
        .typeString(`<strong class="VUE">VUE</strong>`)
        .deleteChars(3)
        .typeString(`<strong class="REACT">REACT</strong>`) 
        .changeDeleteSpeed(20)
        .deleteChars(18)
        .pauseFor(200)
        .typeString(`<strong>FRONT-END !</strong>`)
        .start()
    }  
}

(async function () {
    const home = new Home()
    home.init()
})();



