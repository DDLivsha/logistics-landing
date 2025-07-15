import React, { FC } from 'react'
import truck from '@/assets/images/way-truck.jpg'
import Image from 'next/image'
import { Benefit } from '@/interfaces/benefit'

interface Props {
   data: Benefit[]
}
const Benefits: FC<Props> = ({ data }) => {
   return (
      <div className="container">
         <div className="benefits__inner">
               <ul className="benefits__list">
                  {data.map((item, key) => (
                     <li key={key} className="benefits__list-item">
                        <h4 className="benefits__list-title">{item.title}</h4>
                        <p className="benefits__list-text">{item.description}</p>
                     </li>
                  ))}
               </ul>
            <div className="benefits__img-box">
               <Image src={truck} alt="truck" width={600} height={456} className="benefits__img" placeholder='blur' />
            </div>
         </div>
      </div>
   )
}

export default Benefits