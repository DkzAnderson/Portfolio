import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ProyectsList } from './ProyectsList'
import { Contact } from './Contact'

import perfilImage from '../assets/foto-perfil.png'
import icon_react from '../assets/react.svg'
import icon_html from '../assets/html-icon.png'
import icon_js from '../assets/js-icon.png'
import icon_css from '../assets/css-icon.png' 
import icon_tailwind from '../assets/tailwind-css.svg'
import icon_sass from '../assets/sass-icon.png'
import icon_github from '../assets/github-icon.png'
import { HeaderNav } from '../layout/HeaderNav'
import { Footer } from '../layout/Footer'


export const Start = () => {

    const technologies = [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'SASS',
      'Tailwind',
      'React'
    ]

    const location = useLocation();

    const styles = {
      main : 'w-full py-10 min-h-[80vh] flex justify-center',
      content: 'max-w-[1200px] shadow-lg shadow-transparent xl:shadow-blue-500 rounded-lg items-center p-5 md:p-10 flex flex-col gap-10',
      link : 'justify-center duration-500 flex w-48 py-0 bg-indigo-700 text-white rounded-lg hover:bg-green-700',
      
      titleBox: 'grid gap-5 w-full grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 justify-center justify-items-center sm:justify-items-start',
      title: 'text-2xl md:text-4xl text-white sm:col-span-2 row-start-2 sm:row-start-1',
      subTitle: 'text-xl font-light text-gray-500 row-start-3 sm:row-start-2 sm:col-span-3',
      poster: 'size-[250px] border-2 rounded-full p-3 sm:col-start-3',
      posterImg: 'rounded-full size-full object-cover ',

      techContent: 'flex flex-col gap-5 w-full my-20',
      othersTittles: 'text-3xl text-sky-400 w-full',
      techList : 'flex flex-wrap border border-transparent justify-evenly shadow-inner shadow-sky-400 p-5 rounded-lg gap-8',
      techItem : 'flex flex-col justify-between gap-2 w-16 h-24 text-gray-400 items-center cursor-default',
      techIcon : 'w-full h-4/5',

    }

    const specialStyles = {
      name: 'text-indigo-700 ',
      marked: 'text-indigo-700'
    }

    useEffect(()=>{
      if(location.hash){
        const id = location.hash.replace('#','');
        const element = document.getElementById(id);

        if(element){
          element.scrollIntoView();
        }
      }
    },[location])

  return (
    <section className='w-full flex flex-col'>
      <HeaderNav/>
      <div className={styles.main}>
        <div className={styles.content}>

          <div className={styles.titleBox} id='about'>
            <h2 className={styles.title}>
              Hola, soy <b className={specialStyles.name}>Anderson Ollarves</b>, soy desarrollador web
              en Perú y ofrezco mis servicios de <b className={specialStyles.marked}>programación</b>
              y <b className={specialStyles.marked}>desarrollo</b> en todo tipo de proyectos web.

            </h2>

            <picture className={styles.poster}>
            <img
              className={styles.posterImg}
              src={perfilImage}
              alt="foto-perfil"
            />
            </picture>

            <h3 className={styles.subTitle}>
              Te ayudo a crear tu sitio o aplicación web, tener más
              visibilidad y relevancia en
              internet. <a className={styles.link} href='#contact'>
                Contacta conmigo
              </a>
            </h3>
          </div>

          <h2 className={styles.othersTittles}>
            Algunos de mis proyectos
          </h2>

          <ProyectsList limit={3} />

          <div className={styles.techContent}>
            <h2 className={styles.othersTittles}>Conocimientos</h2>

            <ul className={styles.techList} id='skills'>

              {
                technologies.map((tech, index) => {
                  let icon

                  switch (tech) {
                    case 'CSS':
                      icon = icon_css
                      break;
                    case 'JavaScript':
                      icon = icon_js
                      break;
                    case 'GitHub':
                      icon = icon_github
                      break;
                    case 'SASS':
                      icon = icon_sass
                      break;
                    case 'Tailwind':
                      icon = icon_tailwind
                      break;
                    case 'React':
                      icon = icon_react
                      break;
                    default:
                      // HTML
                      icon = icon_html
                      break;
                  }

                  return (
                    <li
                      key={index}
                      className={styles.techItem}
                    >
                      <img
                        className={styles.techIcon}
                        src={icon}
                        alt={tech}
                      />
                      <h5>
                        {tech}
                      </h5>
                    </li>
                  )
                })
              }

            </ul>

            <h4 className='text-lg text-gray-300'>
              Actualmente sigo mejorando en las tecnologias antes
              mencionadas y tambien estoy estudiando node.js
            </h4>
          </div>

          <Contact />
        </div>
      </div>
      <Footer/>
    </section>

  )
}
