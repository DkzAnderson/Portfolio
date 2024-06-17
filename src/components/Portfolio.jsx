import React, { useState } from 'react'
import { ProyectsList } from './ProyectsList'
import { ProyectPreview } from './ProyectPreview'
import { works } from '../data/Works'
import { HeaderNav } from '../layout/HeaderNav'
import { Footer } from '../layout/Footer'


export const Portfolio = () => {

  const [show,setShow] = useState(false);

  function ShowAllProyects (){
      setShow(!show)
  }

  let styles = {
    main: 'w-full min-h-[80vh] flex justify-center',
    content: 'w-full max-w-[1200px] flex flex-col gap-10 px-10 py-10',
    
    titles: 'text-2xl text-sky-400',

    proyectBox1:'flex flex-col gap-5 max-w-[1200px]',
    proyectBox2:'w-full sm:grid-cols-2 lg:grid-cols-3 gap-10 ',

    allProyects: 'flex w-[280px] p-2 rounded-lg gap-4 items-center cursor-pointer text-2xl ',
    arrowUp: 'size-7 animate-pulse duration-300 ',
    arrowDown: 'size-7 animate-pulse duration-300 ',

  }

  if(show){
    styles.arrowDown += 'hidden';
    styles.arrowUp   += 'flex';
    styles.proyectBox2 += 'grid'
    styles.allProyects += 'bg-sky-400 text-white '
  } else {
    styles.arrowDown += 'flex';
    styles.arrowUp   += 'hidden';
    styles.proyectBox2 += 'hidden'
    styles.allProyects += 'text-sky-400';

  }

  return (
    <section className='w-full flex flex-col'>
      <HeaderNav />
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.proyectBox1}>
            <h2 className={styles.titles}>
              Ultimos proyectos
            </h2>

            <ProyectsList limit={3} />
          </div>

          <span
            className={styles.allProyects}
            onClick={e => { ShowAllProyects() }}
          >
            <h5>
              Todos mis proyectos
            </h5>

            <div className=''>
              <svg className={styles.arrowDown} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>

              <svg className={styles.arrowUp} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
              </svg>

            </div>
          </span>

          <ul className={styles.proyectBox2}>
            {
              works.map(proyect => {
                return (
                  <ProyectPreview
                    key={proyect.name}
                    proyect={proyect}
                  />
                )
              })
            }
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  )
}
