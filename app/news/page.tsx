import React from 'react'

export default function News() {
   return (
      <>
   <header className="header" id="header">
      <div className="overlay"></div>
      <div className="container">
         <div className="header__inner">
            <a href="index.html" className="header__logo">
               <img src="images/logo.svg" alt="CenterLogistic" className="header__logo-img"/>
            </a>
            <nav className="header__nav" id="header__nav">
               <ul className="header__nav-list">
                  <li className="header__nav-item">
                     <a href="index.html" className="header__nav-link">Home Page</a>
                  </li>
                  <li className="header__nav-item">
                     <a href="privacy.html" className="header__nav-link">Privacy Policy</a>
                  </li>
                  <li className="header__nav-item">
                     <a href="#" className="header__nav-link">Terms & Conditions</a>
                  </li>
               </ul>
            </nav>
            <button className="burger" id="navToggle">
               <span className="burger__line"></span>
               <span className="burger__line"></span>
               <span className="burger__line"></span>
               <span className="burger__line"></span>
            </button>
         </div>
      </div>
   </header>
   <main>
      <div className="main__news-intro news__intro" id="intro">
      </div>
      <section className="main__blog blog">
         <div className="container">
            <div className="blog__inner">
               <div className="blog__content">
                  <ul className="blog__content-list">
                     <h2 className="blog__content-title title" ><span>Interesting</span> to read</h2>
                     <li className="blog__content-item">
                        <article className="blog__item-article">
                           <a className="blog__item-link" href="#">
                              <h4 className="blog__item-title">News title</h4>
                              <p className="blog__item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                 diam
                                 nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                 voluptua.
                                 At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                 sea
                                 takimata sanctus est Lorem ipsum dolor sit amet. </p>
                              <time dateTime="2019-03-21" className="blog__item-time">21 March, 2019</time>
                           </a>
                        </article>
                     </li>
                     <li className="blog__content-item">
                        <article className="blog__item-article">
                           <a className="blog__item-link" href="#">
                              <h4 className="blog__item-title">News title</h4>
                              <p className="blog__item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                 diam
                                 nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                 voluptua.
                                 At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                 sea
                                 takimata sanctus est Lorem ipsum dolor sit amet. </p>
                              <time dateTime="2019-03-21" className="blog__item-time">21 March, 2019</time>
                           </a>
                        </article>
                     </li>
                     <li className="blog__content-item">
                        <article className="blog__item-article">
                           <a className="blog__item-link" href="#">
                              <h4 className="blog__item-title">News title</h4>
                              <p className="blog__item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                 diam
                                 nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                 voluptua.
                                 At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                 sea
                                 takimata sanctus est Lorem ipsum dolor sit amet. </p>
                              <time dateTime="2019-03-21" className="blog__item-time">21 March, 2019</time>
                           </a>
                        </article>
                     </li>
                     <li className="blog__content-item">
                        <article className="blog__item-article">
                           <a className="blog__item-link" href="#">
                              <h4 className="blog__item-title">News title</h4>
                              <p className="blog__item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                 diam
                                 nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                 voluptua.
                                 At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                 sea
                                 takimata sanctus est Lorem ipsum dolor sit amet. </p>
                              <time dateTime="2019-03-21" className="blog__item-time">21 March, 2019</time>
                           </a>
                        </article>
                     </li>
                  </ul>
                  <a href="index.html" className="blog__button button" >Back to home</a>
               </div>
               <div className="blog__form form">
                  <div className="form__head blog__form-head">
                     <h3 className="head__title">Get Callback</h3>
                     <h5 className="head__subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut</h5>
                  </div>
                  <form className="form__content">
                     <label className="form__label">
                        <img src="images/icons/name.svg" alt="man" className="name__icon"/>
                        <input type="text" className="form__input name__input" placeholder="Your name"/>
                     </label>
                     <label className="form__label">
                        <img src="images/icons/phone.svg" alt="phone" className="phone__icon"/>
                        <input type="tel" className="form__input phone__input" placeholder="Your phone"/>
                     </label>
                     <label className="form__label">
                        <img src="images/icons/mail.svg" alt="mail" className="mail__icon"/>
                        <input type="email" className="form__input mail__input" placeholder="Your e-mail"/>
                     </label>
                     <button className="form__button button" type="submit" >Call me back</button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   </main>
   <footer className="footer">
      <div className="footer__content">
         <a href="index.html" className="footer__logo">
            <img src="images/logo-black.svg" alt="CenterLogistic" className="footer__logo-img"/>
         </a>
         <h6 className="footer__info">New York, Street, ZIP code</h6>
         <h6 className="footer__info">Call Us: <a href="tel:9948373123" className="footer__info-link">+9948373123</a> or E-mail:
            <a href="mailto:hello@centerlogistic.com" className="footer__info-link">hello@centerlogistic.com</a>
         </h6>
         <nav className="footer__nav">
            <a href="#" className="footer__nav-item">Terms & Contidions</a>
            <a href="privacy.html" className="footer__nav-item">Privacy Policy</a>
            <a href="news.html" className="footer__nav-item">Our blog</a>
         </nav>
      </div>
   </footer>
   <aside className="modal__page">
      <div className="request__modal" id="ThanksModal">
         <div className="modal__inner">
            <div className="modal__img-box"> <img src="images/icons/thanks.svg" alt="thanks" className="modal__thanks-img"/>
            </div>
            <h3 className="modal__title">Thanks for your request</h3>
            <p className="modal__subtitle modal__thanks">We call you back as soon as possible!</p>
            <div className="modal__contacts">
               <h4 className="modal__contacts-title">Our contacts</h4>
               <p className="modal__contacts-info">New York, Street, ZIP code</p>
               <p className="modal__contacts-info">Phone: <a href="tel:9948373123" className="modal__info-link">+9948373123</a>
               </p>
               <p className="modal__contacts-info">E-mail:
                  <a href="mailto:hello@centerlogistic.com" className="modal__info-link">hello@centerlogistic.com</a>
               </p>
            </div>
            <button className="modal__close">
               <img src="images/icons/close.svg" alt="close"/>
            </button>
         </div>
      </div>
   </aside>

      </>
   )
}
