import React from 'react'
import { useNavigate} from 'react-router-dom'

import icon_react from '../assets/react.svg'
import icon_html from '../assets/html-icon.png'
import icon_js from '../assets/js-icon.png'
import icon_css from '../assets/css-icon.png' 
import icon_tailwind from '../assets/tailwind-css.svg'
import icon_sass from '../assets/sass-icon.png'
import icon_github from '../assets/github-icon.png'

export const ProyectPreview = ({proyect}) => {

    const Navigate = useNavigate();

    const styles = {
        main : 'w-full min-w-[250px] h-[400px] rounded-lg border overflow-hidden cursor-pointer group',
        mainBgImg : `url(${proyect.images[0]})`,
        mainBgPosition : 'center',
        mainBgSize : 'cover',

        content: 'w-full h-full flex flex-col gap-3 justify-end p-2 bg-gradient-to-b from-transparent text-white to-black group-hover:bg-[#2968f7a1]',
        title : 'text-lg text-blue-400 font-bold group-hover:text-green-500 group-hover:underline',
        description : 'text-[12px]',
        techList : 'flex gap-2',
        techListItem: 'flex flex-col items-center gap-1',
        techIcons : 'size-7',
        techText : 'text-[12px]'
    }

  return (
    <article
        className={styles.main}
        style={{ 
            backgroundImage: styles.mainBgImg, 
            backgroundPosition: styles.mainBgPosition,
            backgroundSize: styles.mainBgSize
        }}
        onClick={e=>{Navigate(`/proyect/${proyect.name}`)}}
    >
        <div className={styles.content}>
            <span className={styles.title}>
                {/* Title */}
                {proyect.name}
            </span>

            <p className={styles.description}>
                {/* Short description */}
                {proyect.description}
            </p>

            <ul className={styles.techList}>
                {/* Technologies */}
                {
                    proyect.technologies.map((item,itemIndex) =>{

                        let icon = ''
                        switch (item) {
                            case 'CSS':
                                icon = icon_css
                                break;
                            case 'JavaScript':
                                icon = icon_js
                                break;
                            case 'React':
                                icon = icon_react
                                break;
                            case 'Tailwind':
                                // cambiar
                                icon = icon_tailwind
                                break;
                            case 'SASS':
                                icon = icon_sass
                                break;
                            case 'GitHub':
                                icon = icon_github
                                break;
                            default:
                                // HTML
                                icon = icon_html
                                break;
                        }

                        return (
                            <li 
                                key={itemIndex}
                                className={styles.techListItem}
                            >
                                <img 
                                    className={styles.techIcons}
                                    src={icon} 
                                    alt={item}
                                />

                                <h5 className={styles.techText}>
                                     {item}
                                </h5>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </article>
  )
}
