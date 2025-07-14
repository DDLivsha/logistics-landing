import { Service } from '@/interfaces/service'
import React, { FC } from 'react'

interface Props {
   data: Service[]
}
const Services: FC<Props> = ({ data }) => {
   return (
      <div className="container">
         <div className="service__inner">
            {data.map((item, key) => (
               <div key={key} className="service__content-block">
                  <h3 className="service__title">{item.title}</h3>
                  <p className="service__text">{item.text}</p>
                  <div className="service__link-wrapper w-[100px]">
                     <a href={item.link} className="service__link">Learn more</a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Services