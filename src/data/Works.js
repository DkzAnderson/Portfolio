
class proyect {
    constructor({
        name, url,
        technologies,
        categories,
        images,id=name,
        description, state
    }){
        this.name = name;
        this.url = url;
        this.technologies = technologies;
        this.images = []
        this.imagesToDescription = []
        this.id = id;
        this.categories = categories;
        this.description = description;
        this.state = state

        images.forEach(element => {
            this.images.push(`./src/assets/proyects-previews/${element}`)
        });

        images.forEach(element=>{
            this.imagesToDescription.push(element)
        })
    }
}

export const works = [
    new proyect({   // nekostore
        name:'Neko-Store',
        url: 'https://dkzanderson.github.io/neko-StoreV3/',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'SASS'
        ],
        images: [
            'neko-store_mobile.png',
            'neko-store_1.png',
            'neko-store_2.png'
        ],
        state: true,
        categories: 'Desarrollo web',
        description: 'Página donde ver Animes online.'
    }),

    new proyect({  // guides-wow
        name:'Guides-Wow',
        url: 'https://dkzanderson.github.io/Wow-Guides/',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        images: [
            'guides-wow_mobile.png',
            'guides-wow_tablet.png',
            'guides-wow_desktop.png',

        ],
        state: true,
        description: 'Página de guias generales de World Of Warcraft:'+
        ' Wrath of The Lich King.',
        categories: 'Desarrollo web'
    }),

    new proyect({  // forest
        name: 'Forest',
        url: '',
        technologies: [
            'HTML',
            'CSS',
            'React',
            'JavaScript',
            'Tailwind'
        ],
        images: [
            'forest-mobile.png',
            'forest-tablet.png',
            'forest_desktop.png'
        ],
        state: false,
        description: 'RPG de combate por turnos, esta en desarrollo.',
        categories: 'Videojuego'
    }),

    new proyect({  // eco-store
        name: 'Eco-Store',
        description: 'Landing page con diseño responsive.',
        categories: 'Desarrollo web',
        images: [
            'eco-store_mobile.png',
            'eco-store_tablet.png',
            'eco-store_desktop.png',

        ],
        technologies: [
            'HTML',
            'CSS'
        ],

    })
]

