import React from 'react'
import { works } from '../data/Works'
import { ProyectPreview } from './ProyectPreview'

export const ProyectsList = ({ limit }) => {
    return (
        <div className='w-full flex justify-center'>

            <ul className='flex flex-col md:flex-row w-full lg:gap-x-12 gap-y-20 gap-x-5'>
                {
                    works.slice(0, limit).map(work =>
                        <ProyectPreview key={work.name} proyect={work} />
                    )
                }
            </ul>
        </div>
    )
}
