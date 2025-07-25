import bg1 from '@/assets/images/header/bg-1.jpg'
import Image from 'next/image'
import IntroForm from './IntroForm'

export default function Intro() {
   return (

      <section className="intro" id="intro">
         <div className="intro__img-box">
            <Image
               src={bg1}
               alt="truck"
               className="intro__img"
               width={1300}
               height={600}
               placeholder='blur'
               quality={90}
            />
         </div>
         <div className="container">
            <div className="intro__inner">
               <div className="intro__form form">
                  <div className="form__head">
                     <h3 className="head__title">Get Callback</h3>
                     <h5 className="head__subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut</h5>
                  </div>
                  <IntroForm />
               </div>
               <div className="intro__text">
                  <p className="intro__text-subtitle">USA, Europe, Asia</p>
                  <div className="intro__text-title">Trans
                     Logistic</div>
               </div>
            </div>
         </div>
      </section>
   )
}
