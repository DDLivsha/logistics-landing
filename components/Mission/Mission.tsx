import React, { FC } from 'react'
import * as motion from "motion/react-client"
import Button from '../common/Button'
import MissionButtonWrapper from './MissionButtonWrapper'

interface Props {
   className?: string
}
const Mission: FC<Props> = ({ className }) => {
   return (
      <div className="container">
         <div className="mission__content-wrapper">
            <h2 className="mission__title">Our mission</h2>
            <div className="mission__inner">
               <h3 className="mission__inner-title">To provide our customer qualified services according the
                  international</h3>
               <p className="mission__inner-subtitle">Book your Cargo now & Your job just got a lot easier</p>
               <div className="mission__lines">
                  <motion.div
                     className="mission__blue-line"
                     whileInView={{ opacity: 1, width: '100%' }}
                     initial={{ opacity: 0, width: 0 }}
                     transition={{ duration: 2 }}
                  />
                  <motion.div
                     className="mission__orange-line"
                     whileInView={{ opacity: 1, width: '100%' }}
                     initial={{ opacity: 0, width: 0 }}
                     transition={{ duration: 2 }}
                  />
               </div>
            </div>
         </div>
         <MissionButtonWrapper />
      </div>
   )
}

export default Mission