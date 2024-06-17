import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../data/Works';
import { ImgSlider } from './ImgSlider';

export const Proyects = () => {
    // usamos el parametro para buscar el proyecto 
    // seleccionado
    const params = useParams();
    const [proyect,setProyect] = useState(works[0])

    useEffect(()=>{
        // buscamos el proyecto
        let work = works.filter(work => work.name === params.id);
        setProyect(work[0])
    },[])

    const styles = {
        main : 'flex justify-center w-full',
        content: 'flex flex-col gap-4 p-5 w-full max-w-[1200px] min-h-[70vh] items-center',

        imgBoxMobile: 'flex w-full mt-5 md:hidden',
        title: 'text-cyan-400 text-3xl',
        descriptionBox : 'flex flex-col gap-3 self-start items-start',
        url: 'underline text-purple-500',
        descriptionTxt : 'text-gray-400 ',

        imgBoxDesktop: 'hidden md:flex gap-10 w-[100%] md:h-[350px] lg:h-[600px] items-center justify-between overflow-hidden',
        imgListLi: 'h-full border rounded-lg overflow-hidden min-w-[200px] w-full',
        imgListItem:'w-full h-full',
        lastImage: 'w-full h-[95%] border rounded-lg'

    }

    return (
        <section className={styles.main}>

            <div className={styles.content}>

                <div className={styles.descriptionBox}>
                    <h2 className={styles.title}>
                        {proyect.name}
                    </h2>

                    <p className={styles.descriptionTxt}>
                        {proyect.description}
                    </p>

                    <a
                        target='_blank'
                        href={proyect.url}
                        className={styles.url}>
                        Ir a la web del proyecto.
                    </a>
                </div>

                <ul className={styles.imgBoxDesktop}>
                    {
                        proyect.images.slice(0, 2).map((image, imageIndex) => {
                            return (
                                <li
                                    key={imageIndex}
                                    className={styles.imgListLi}
                                >
                                    <img
                                        className={styles.imgListItem}
                                        src={image}
                                        alt={`${proyect.name} preview image ${imageIndex}`}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>

                <div className={styles.imgBoxDesktop}>
                    <img
                        className={styles.lastImage}
                        src={proyect.images[2]}
                        alt={`${proyect.name} preview image 3`}
                    />
                </div>

                <div className={styles.imgBoxMobile}>
                    <ImgSlider images={proyect.images} />
                </div>
            </div>

        </section>
    )
}
