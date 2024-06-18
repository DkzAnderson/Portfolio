import React from 'react'
import { Routes, Route, BrowserRouter , Navigate} from 'react-router-dom'

import { Start } from '../components/Start'
import { Portfolio } from '../components/Portfolio'
import { Curriculum } from '../components/Curriculum'
import { Contact } from '../components/Contact'
import { Footer } from '../layout/Footer'
import { HeaderNav } from '../layout/HeaderNav'
import { Proyects } from '../components/Proyects'


export const MyRoutes = () => {


  const styles = {
    mainSection : 'w-full max-w-[600px]'
  }

  return (
    <BrowserRouter>
    { /* Contenido Central */}
      <section className={styles.mainSection}>
        <Routes>
          <Route path='/' element={<Navigate to={"/start"}/>} />
          <Route path='/start' element={<Start />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/proyect/:id' element={<Proyects/>}/>
          
          
          <Route path='*' element={
            <div className='w-full h-full flex items-center justify-center'>
                <h1 className='text-3xl text-red-700 py-52'>
                  Error 404
                </h1>
            </div>
          }/>
        </Routes>
      </section>
    </BrowserRouter>
  )
}
