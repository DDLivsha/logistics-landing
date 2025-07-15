import React from 'react'
import bg from '@/assets/images/header/interesting.jpg'
import Image from 'next/image'
import PrivacyButtonWrapper from '../privacy/PrivacyButtonWrapper'
import IntroForm from '@/components/Intro/IntroForm'
import { news } from '@/helpers/localData'

export default function News() {
   return (
      <main>
         <Image src={bg} alt="truck" className="header__img" width={1300} height={350} placeholder='blur' quality={90} />
         <section className="main__blog">
            <div className="container">
               <div className="flex justify-between gap-4">
                  <div className="blog__content">
                     <div className="flex flex-col gap-[45px] max-w-[600px]">
                        <h2 className="title" ><span>Interesting</span> to read</h2>
                        {news.map((item, key) => (
                           <div key={key} className="news__list-item" >
                              <article className="news__list-article">
                                 <a className="news__item-link" href="/news">
                                    <h4 className="news__item-title">{item.title}</h4>
                                    <p className="news__item-text">{item.text}</p>
                                    <time dateTime="21-03-2019" className="news__item-time">{item.date}</time>
                                 </a>
                              </article>
                           </div>
                        ))}
                     </div>
                     <PrivacyButtonWrapper />
                  </div>
                  <div className="form !h-fit">
                     <div className="form__head">
                        <h3 className="head__title">Get Callback</h3>
                        <h5 className="head__subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                           nonumy eirmod tempor invidunt ut</h5>
                     </div>
                     <IntroForm />
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}
