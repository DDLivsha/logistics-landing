import { TeamMember } from '@/interfaces/teamMember'
import Image from 'next/image'
import React, { FC } from 'react'
import MailBlack from '@/assets/images/icons/mail-black.svg'
import PhoneBlack from '@/assets/images/icons/phone-black.svg'
import Title from '../common/Title'

interface Props {
   data: TeamMember[]
}
const Team: FC<Props> = ({ data }) => {
   return (
      <div className="container">
         <Title blueText="Our" blackText="Team" />
         <ul className="team__content-list">
            {data.map((item, key) => (
               <li key={key} className="team__content-item">
                  <div className="team__img-box">
                     <Image width={370} height={195} src={item.image} alt="John" />
                  </div>
                  <h4 className="team__item-title">{item.name}</h4>
                  <p className="team__item-subtitle">{item.position}</p>
                  <div className="team__mail">
                     <MailBlack className="team__mail-img" />
                     <a href={`mailto:${item.email}`} className="team__mail-link">{item.email}</a>
                  </div>
                  <div className="team__phone">
                     <PhoneBlack className="team__phone-img" />
                     <a href={`tel:${item.phone}`} className="team__phone-link">{item.phone}</a>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Team