import React from 'react'

export default function Privacy() {
   return (
      <>
         <header className="header" id="header">
            <div className="overlay"></div>
            <div className="container">
               <div className="header__inner">
                  <a href="index.html" className="header__logo">
                     <img src="images/logo.svg" alt="CenterLogistic" className="header__logo-img" />
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
            <div className="main__privacy-intro privacy__intro" id="intro">
            </div>
            <section className="main__privacy privacy">
               <div className="container">
                  <div className="privacy__inner">
                     <div className="privacy__content">
                        <h2 className="privacy__content-title title"><span>Privacy</span> Policy</h2>
                        <p className="privacy__content-text">It is a long established fact that a reader will be distracted by the
                           readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                           has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                           here', making it look like readable English. Many desktop publishing packages and web page editors
                           now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                           web sites still in their infancy.
                        </p>
                        <h5 className="privacy__content-subtitle">Some subtitle
                        </h5>
                        <p className="privacy__content-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                           industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                           unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                           survived not only five centuries, remaining essentially unchanged. It was popularised in the 1960s.
                        </p>
                        <ul className="privacy__list">
                           <li className="privacy__list-item">
                              <p className="privacy__item-text">- unordered list item
                              </p>
                           </li>
                           <li className="privacy__list-item">
                              <p className="privacy__item-text">- unordered list item
                              </p>
                           </li>
                        </ul>
                        <h5 className="privacy__content-subtitle">Some subtitle
                        </h5>
                        <p className="privacy__content-text">There are many variations of passages of Lorem Ipsum available, but
                           the majority have suffered alteration in some form, by injected humour, or randomised words which
                           don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                           be sure there isn't anything embarrassing hidden in the middle of text.If you are going to use a
                           passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle
                           of text.
                        </p>
                        <ol className="privacy__ordered-list">
                           <li className="privacy__list-item">ordered list item
                           </li>
                           <li className="privacy__list-item">ordered list item
                           </li>
                        </ol>
                        <a href="index.html" className="blog__button button">Back to home</a>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer className="footer">
            <div className="footer__content">
               <a href="index.html" className="footer__logo">
                  <img src="images/logo-black.svg" alt="CenterLogistic" className="footer__logo-img" />
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
      </>
   )
}
