import neko1 from '../../src/assets/proyects-previews/neko-store_mobile.png'
import neko2 from '../../src/assets/proyects-previews/neko-store_1.png'
import neko3 from '../../src/assets/proyects-previews/neko-store_2.png'
import wowGuides1 from '../../src/assets/proyects-previews/guides-wow_mobile.png'
import wowGuides2 from '../../src/assets/proyects-previews/guides-wow_tablet.png'
import wowGuides3 from '../../src/assets/proyects-previews/guides-wow_desktop.png'
import forest1 from '../../src/assets/proyects-previews/forest-mobile.png'
import forest2 from '../../src/assets/proyects-previews/forest-tablet.png'
import forest3 from '../../src/assets/proyects-previews/forest_desktop.png'
import ecoStore1 from '../../src/assets/proyects-previews/eco-store_mobile.png'
import ecoStore2 from '../../src/assets/proyects-previews/eco-store_tablet.png'
import ecoStore3 from '../../src/assets/proyects-previews/eco-store_desktop.png'



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
        this.images = images
        this.imagesToDescription = []
        this.id = id;
        this.categories = categories;
        this.description = description;
        this.state = state
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
            neko1,
            neko2,
            neko3
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
            wowGuides1,
            wowGuides2,
            wowGuides3
        ],
        state: true,
        description: 'Página de guias generales de World Of Warcraft:'+
        ' Wrath of The Lich King.',
        categories: 'Desarrollo web'
    }),

    new proyect({  // forest
        name: 'Forest',
        url: 'https://dkzanderson.github.io/Forest/',
        technologies: [
            'HTML',
            'CSS',
            'React',
            'JavaScript',
            'Tailwind'
        ],
        images: [
            forest1,
            forest2,
            forest3
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
            ecoStore1,
            ecoStore2,
            ecoStore3
        ],
        technologies: [
            'HTML',
            'CSS'
        ],

    })
]

