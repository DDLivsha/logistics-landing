import React from 'react'

export default function Intro() {
   return (
      <section className="main__intro intro" id="intro">
         <div className="intro__slider" id="IntroSlider">
               <img src="images/header/bg-1.jpg" alt="truck" className="slick__img" />
         </div>
         <div className="container">
            <div className="intro__inner">
               <div className="intro__form form" data-aos="fade-right">
                  <div className="form__head">
                     <h3 className="head__title">Get Callback</h3>
                     <h5 className="head__subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut</h5>
                  </div>
                  <form className="form__content">
                     <label className="form__label">
                        <img src="images/icons/name.svg" alt="man" className="name__icon" />
                        <input type="text" className="form__input name__input" placeholder="Your name" />
                     </label>
                     <label className="form__label">
                        <img src="images/icons/phone.svg" alt="man" className="phone__icon" />
                        <input type="tel" className="form__input phone__input" placeholder="Your phone" />
                     </label>
                     <label className="form__label">
                        <img src="images/icons/mail.svg" alt="man" className="mail__icon" />
                        <input type="email" className="form__input mail__input" placeholder="Your e-mail" />
                     </label>
                     <button className="form__button button" type="submit" data-thanks="#ThanksModal">Call me back</button>
                  </form>
               </div>
               <div className="intro__text" data-aos="fade-left">
                  <p className="intro__text-subtitle">USA, Europe, Asia</p>
                  <h1 className="intro__text-title">Trans
                     Logistic</h1>
               </div>
               {/* <div className="intro__slider-arrows">
                  <button className="intro__slider-prev" type="button">
                     <img src="images/icons/arrow-left.svg" alt="prev" className="intro__slider-arrow" />
                  </button>
                  <button className="intro__slider-next" type="button"> <img src="images/icons/arrow-right.svg" alt="prev"
                     className="intro__slider-arrow" /></button>
               </div> */}
            </div>
         </div>
      </section>
   )
}
