import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    const styles = {
        main : 'flex flex-col w-full bg-zinc-700 items-center gap-4 justify-center mt-10 py-5 border-t-2 border-sky-500',
        txt  : 'text-white',
        list : 'flex gap-5',
        itemList: 'text-gray-300 hover:text-white hover:bg-sky-400 hover:font-bold hover:tracking-widest hover:scale-125 duration-300 rounded-full px-2',
        title:'text-sky-400 font-bold text-lg cursor-default'
    }

  return (
    <footer className={styles.main}>
      <h2 className={styles.title}>
        Anderson Yoel Ollarves Martinez
      </h2>

      <ul className={styles.list}>
        <li className={styles.itemList}>
          <Link to={'/start#skills'}>
              Habilidades
          </Link>
        </li>

        <li className={styles.itemList}>
          <Link to={'/portfolio'}>
              Proyectos
          </Link>
        </li>

        <li className={styles.itemList}>
          <Link to={'/start#about'}>
              Sobre mí
          </Link>

        </li>
        
      </ul>
        <h3 className={styles.txt}>
        ©️ 2024 Anderson Ollarves Web 
        </h3>
    </footer>
  )
}
