import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderNav.css'

export const HeaderNav = () => {
    const [menu,SetMenu] = useState(false);

    const cvUrl = 'https://dkzanderson.github.io/CV-Virtual/'

    const styles = {
        nav  : 'w-full hidden sm:flex max-w-[1024px] justify-between items-center px-5 md:px-5',
        list : 'hidden md:flex w-full justify-end gap-12',
        listItem: 'hover:tracking-widest md:text-xl hover:scale-125 hover:text-white duration-500 font-bold text-sky-500',
        logoContainer : 'flex w-52 md:w-1/5 lg:w-2/5 xl:w-3/5 gap-1 items-end logo-box text-cyan-600',
        container : '',
        textLogo : 'font-light leading-none',
        active : 'bg-sky-500 rounded px-3 text-white'
    }

    let menuMobileStyles = {
        main: 'border-b-2 border-sky-500 sm:py-3 flex flex-col items-center',
        mainBox: 'flex w-[90%] sm:hidden justify-between items-center py-2',
        menuBtn : 'w-9 h-9 stroke-white md:hidden cursor-pointer',
        List: 'py-2 sm:hidden w-full bg-sky-900 flex-col gap-3 border-t-2 border-sky-400 ',
        ListItem: 'text-gray-500 text-xl py-2 text-center',
        active: 'tracking-widest text-2xl text-white z-90',
    }

    menu ? menuMobileStyles.List += 'flex' : menuMobileStyles.List += 'hidden'
    return (
        <header className={menuMobileStyles.main}>

            <div className={menuMobileStyles.mainBox}>
                <div className={styles.logoContainer}>
                    <h2 className="logo">A</h2>
                    <span className={styles.container}>
                        <h3 className={styles.textLogo}>Anderson</h3>
                        <h3 className={styles.textLogo}>Ollarves</h3>
                        <h3 className={styles.textLogo}>Web</h3>
                    </span>
                </div>

                <div>
                    <svg
                        onClick={e => { SetMenu(!menu) }}
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className={menuMobileStyles.menuBtn}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

            </div>

            <ul className={menuMobileStyles.List}>
                <li className={menuMobileStyles.ListItem}>
                    {/* isActive: evalua si el elemento esta activo, atributo del elemento 
                             sacado mediante la desesctructuración */}
                    <NavLink
                        onClick={e => { SetMenu(!menu) }}
                        to={"/start"}
                        className={({ isActive }) => isActive ? menuMobileStyles.active : ""}>
                        Inicio
                    </NavLink>
                </li>

                <li className={menuMobileStyles.ListItem}>
                    <NavLink
                        onClick={e => { SetMenu(!menu) }}
                        to={"/portfolio"}
                        className={({ isActive }) => isActive ? menuMobileStyles.active : ""}>
                        Portafolio
                    </NavLink>
                </li>   
                <li className={styles.listItem}>
                        <a 
                            target='_blank'
                            href={cvUrl} 
                            className={({isActive}) => isActive ? styles.active : '' }
                        >
                            Curriculum
                        </a>
                </li>             
            </ul>

            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <h2 className="logo">A</h2>
                    <span className={styles.container}>
                        <h3 className={styles.textLogo}>Anderson</h3>
                        <h3 className={styles.textLogo}>Ollarves</h3>
                        <h3 className={styles.textLogo}>Web</h3>
                    </span>
                </div>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        {/* isActive: evalua si el elemento esta activo, atributo del elemento 
                             sacado mediante la desesctructuración */}
                        <NavLink to={"/start"} className={({ isActive }) => isActive ? styles.active : ""}>
                            Inicio
                        </NavLink>
                    </li>

                    <li className={styles.listItem}>
                        <NavLink to={"/portfolio"} className={({ isActive }) => isActive ? styles.active : ""}>
                            Portafolio
                        </NavLink>
                    </li>
                    <li className={styles.listItem}>
                        <a 
                            target='_blank'
                            href={cvUrl} 
                            className={({isActive}) => isActive ? styles.active : '' }
                        >
                            Curriculum
                        </a>
                    </li>

                </ul>

            </nav>

        </header>
    )

}
