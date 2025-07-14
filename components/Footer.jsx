import React from 'react'

export default function Footer() {
   return (
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
   )
}
