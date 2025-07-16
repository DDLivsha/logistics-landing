'use client'
import { Client } from '@/interfaces/client'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { useModalStore } from '@/helpers/zustand'
import Button from '../common/Button'
import Link from 'next/link'
import Title from '../common/Title'


interface Props {
   imgData: { img: string }[]
   sliderData: Client[]
}
const Clients: FC<Props> = ({ imgData, sliderData }) => {

   const { open } = useModalStore()


   return (
      <div className="container">
         {/* <h2 className="clients__title title"><span>Our</span> Clients</h2> */}
         <Title blueText="Our" blackText="Clients" />
         <div className="clients__inner">
            <ul className="clients__logos-list">
               {imgData.map((item, key) => (
                  <li key={key} className="clients__list-item">
                     <Link href="#" target="_blank" className="clients__list-link">
                        <img src={item.img} alt="logo" className="clients__img" />
                     </Link>
                  </li>
               ))}
            </ul>

            <div className="clients__slider">
               <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  loop
                  spaceBetween={50}
                  slidesPerView={1}
               >
                  {sliderData.map((client, index) => (
                     <SwiperSlide key={index}>
                        <div className="clients__slide">
                           <div className="clients__slide-header">
                              <div className="clients__img-box">
                                 <Image
                                    src={client.image}
                                    alt={client.name}
                                    className="clients__header-img"
                                    width={100}
                                    height={100}
                                 />
                              </div>
                              <div className="clients__title-wrapper">
                                 <h4 className="clients__header-title">{client.name}</h4>
                                 <h6 className="clients__header-subtitle">{client.position}</h6>
                              </div>
                           </div>
                           <div className="slider__content">
                              {client.content.map((text, i) => (
                                 <p key={i} className="mb-2">
                                    {text}
                                 </p>
                              ))}
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
         <div className="clients__bottom">
            <Button onClick={() => open()}>Become a client</Button>
            <p className="clients__love">we love our clients</p>
         </div>
      </div>
   )
}

export default Clients