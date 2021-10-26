class Service {
    constructor() {

    }
    fetchProjects() {   
        const dataProjects = [
            {
                id: 1,
                imgs: ["mockup-portfolio-reservia.png","reservia.jpg"],
                title: "Réservia",
                subtitle:"Projet Openclassrooms : transformez une maquette en site web",
                logo: "reservia.svg",
                desc : "Intégration d'une maquette pour un site de réservation pour hébergement de vacances, le site est résponsive et la semantique est réspectée.",
                category : "Integration, Responsive",
                tags : [
                    "CSS","HTML",
                ],
                linkGit :  "https://github.com/Dimitri-bonnet/DimitriBonnet_2_28-12-2020",
                linkUrl : "https://dimitri-bonnet.github.io/DimitriBonnet_2_28-12-2020"
            },

            {
                id: 2,
                imgs: ["mockup-portfolio-ohmyfood.png", "ohmyfood.jpg"],
                title: "Ohmyfood",
                subtitle: "Projet Openclassrooms, dynamisez une page web avec des animations CSS",
                logo: "ohmyfood.svg",
                desc: "Intégration d'une maquette pour une application de réservation pour restaurant en appliquant la statégie mobile first.",
                category: 'Intégration , Mobile first',
                tags : [
                    "SCSS","HTML",
                ],
                linkGit : "https://github.com/Dimitri-bonnet/DimitriBonnet_3_22-01-2021",
                linkUrl: "https://dimitri-bonnet.github.io/DimitriBonnet_3_22-01-2021/",
            },
            {
                id: 3,
                imgs : ["mockup-portfolio-gameon.png","gameon.jpg"],
                title: "GameOn",
                subtitle: "Projet Openclassrooms, créez une landing page avec JavaScript",
                logo: "gameon.svg",
                desc: "Rentre le formulaire d'inscription pleinement fonctionnel pour l'inscription aux concours de GameOn.",
                category: "Responsive, Programmation",
                tags : [
                    "SCSS","HTML","JS",
                ],
                linkGit: "https://github.com/Dimitri-bonnet/GameOn-website-FR",
                linkUrl: "https://gameon-db.netlify.app"
            },
            {
                id: 4,
                imgs: ["mockup-portfolio-fisheye.png","fisheye.jpg"],
                title :"FishEye",
                subtitle: "Projet Openclassrooms, créez un site accessible pour une plateform de photographes",
                logo :"fishEye.svg",
                desc: "Intégration d'une maquette et exploitation de la donnée (JSON) afin de réaliser un site responsive et accéssible. Naviguation au clavier et utilisable par les lecteurs d'écran." ,
                category: "Intégration, Accésibilité, Résponsive, POO",
                tags : [
                    "SCSS","HTML","JS",
                ],
                linkGit : "https://github.com/Dimitri-bonnet/DimitriBonnet_6_02-04-2021",
                linkUrl : 'https://fisheye-db.netlify.app'
            },
            {
                id: 5,
                imgs:["mockup-portfolio-lespetitsplats.png","lespetitsplats.jpg"],
                title: "Les petits plats",
                subtitle: "Projet Openclassrooms, développez un algorithme de recherche en JavaScript",
                logo: "lespetitsplats.svg",
                desc: "Intégration d'une maquette, développement de deux solutions pour rechercher et filtrer des recettes dans un livre de cusine et selectionner la plus pérformante en fonction des réslutats.",
                category: "Intégration, Accésibilité, Résponsive, POO",
                tags : [
                    "SCSS","HTML","JS",
                ],
                linkGit :"https://github.com/Dimitri-bonnet/DimitriBonnet_7-07-09-2021",
                linkUrl: "https://les-petits-plats-db.netlify.app"
            },
         /*    {
                id: 6,
                imgs:["test.jpg", "test.jpg"],
                title: "DjAddict",
                subtitle: "",
                logo: "djAddict.jpg",
                desc: "",
                category: "",
                tags: [],
                linkGit: "",
            },
            {
                id: 7,
                imgs:[""],
                title: "DjAddict",
                subtitle: "",
                logo: "djAddict.jpg",
                desc: "",
                category: "",
                tags: [],
                linkGit: "",
            },
            {
                id: 8,
                imgs:[""],
                title: "DjAddict",
                subtitle: "",
                logo: "djAddict.jpg",
                desc: "",
                category: "",
                tags: [],
                linkGit: "",
            }, */        
        ]
        return dataProjects
    }
}