import React, { useState } from 'react'
import { works } from '../data/Works'
import icon_react from '../assets/react.svg'
import icon_html from '../assets/html-icon.png'
import icon_js from '../assets/js-icon.png'
import icon_css from '../assets/css-icon.png' 
import icon_tailwind from '../assets/tailwind-css.svg'
import icon_sass from '../assets/sass-icon.png'
import icon_github from '../assets/github-icon.png'
import { Link } from 'react-router-dom'

export const ImgSlider = ({images}) => {

    const [currentIndex,setCurrentIndex] = useState(0);

    const styles = {
        main : 'relative z-10 w-full sm:w-72 lg:w-60 h-[500px] md:h-[400px] border rounded-lg bg-center overflow-hidden duration-700 bg-cover bg-no-repeat ',
        description: 'w-full flex text-white items-end h-full mt-auto absolute bg-gradient-to-b from-transparent to-black z-20',
        descriptionData:'flex flex-col gap-2 px-4 py-3',
        descriptionTxt: 'text-sm text-gray-400 font-light',
        titleBox: 'flex gap-1 text-sky-400 cursor-pointer active:text-purple-700 hover:text-green-500',
        title: 'text-lg font-bold',
        subTitle: 'text-sky-600 text-sm',
        list: 'flex flex-wrap items-center gap-6 text-gray-400',
        itemsList: 'w-8 h-12 flex flex-col justify-between gap-0.5 text-[12px] items-center',
        icon: 'w-7 h-7',
    }

    const dragIconsBox = {
        main: 'absolute top-5 flex w-full justify-center z-90',
        list : 'flex gap-4 bg-slate-800 rounded-full',
        items: '',
        icons: 'w-[9px] h-[9px] cursor-pointer rounded-full z-100'
    }

    const arrows = {
        left : 'absolute cursor-pointer z-50 flex left-2 top-[42%] bg-gradient-to-l from-transparent to-blue-700 z-20 w-16 h-[70px] md:w-12 md:h-[45px] stroke-white rounded-full p-0.5 ',
        right: 'absolute cursor-pointer z-50 flex right-2 top-[42%] bg-gradient-to-r from-transparent to-blue-700 z-20 w-16 h-[70px] md:w-12 md:h-[45px] stroke-white rounded-full p-0.5 '
    }

    const nextSlide = ()=>{
        const lastSlide = currentIndex === images.length-1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const prevSlide = () =>{
        const firsSlide = currentIndex === 0;
        const newIndex = firsSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }


  return (
      <div
          className={styles.main}
      >
        <img 
            className='w-full h-full z-50 object-scale-down'
            src={images[currentIndex]} 
            alt="" 
        />
            {
              images.length > 1 ?
                  <div>
                      <svg
                          onClick={prevSlide}
                          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={arrows.left}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>

                      <svg
                          onClick={nextSlide}
                          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={arrows.right}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                  </div>
             : ''
            }

      </div>
  )
}
