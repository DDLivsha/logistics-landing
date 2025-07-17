import { Service } from '@/interfaces/service'
import React, { FC } from 'react'
import * as motion from "motion/react-client"

interface Props {
   data: Service[]
}
const Services: FC<Props> = ({ data }) => {
   return (
      <div className="container">
         <div className="service__inner">
            {data.map((item, key) => (
               <motion.div 
               key={key} 
               className="service__content-block"
               initial={{ opacity: 0, y: 100}}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: key * 0.2 }}
               >
                  <h3 className="service__title">{item.title}</h3>
                  <p className="service__text">{item.text}</p>
                  <div className="service__link-wrapper w-[100px]">
                     <a href={item.link} className="service__link">Learn more</a>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
   )
}

export default Services