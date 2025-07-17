import React, { FC } from 'react'
import * as motion from "motion/react-client"
import MissionButtonWrapper from './MissionButtonWrapper'

const Mission: FC = () => {
   return (
      <div className="container">
            <div className="mission__inner">
            <motion.h2 
            className="mission__title"
            initial={{ opacity: 0  }}
            whileInView={{ opacity: 1 }}
            >Our mission</motion.h2>
               <h3 className="mission__inner-title">To provide our customer qualified services according the
                  international</h3>
               <p className="mission__inner-subtitle">Book your Cargo now & Your job just got a lot easier</p>
               <div className="mission__lines">
                  <motion.div
                     className="mission__blue-line"
                     whileInView={{ opacity: 1, width: '100%' }}
                     initial={{ opacity: 0, width: 0 }}
                     transition={{ duration: 2 }}
                     viewport={{ once: true }}
                  />
                  <motion.div
                     className="mission__orange-line"
                     whileInView={{ opacity: 1, width: '100%' }}
                     initial={{ opacity: 0, width: 0 }}
                     transition={{ duration: 2 }}
                     viewport={{ once: true }}
                  />
               </div>
            </div>
         <MissionButtonWrapper />
      </div>
   )
}

export default Mission