import React from 'react'
import LogoBlack from '@/assets/images/logo-black.svg'
import Link from 'next/link'

export default function Footer() {
   return (
      <footer className="footer footer__content">
         <Link href="/" className="footer__logo">
            <LogoBlack className="footer__logo-img" />
         </Link>
         <h6 className="footer__info">New York, Street, ZIP code</h6>
         <h6 className="footer__info">Call Us: <a href="tel:9948373123" className="footer__info-link">+9948373123</a> or E-mail:
            <a href="mailto:hello@centerlogistic.com" className="footer__info-link">hello@centerlogistic.com</a>
         </h6>
         <nav className="footer__nav">
            <Link href="#" className="footer__nav-item">Terms & Contidions</Link>
            <Link href="/privacy" className="footer__nav-item">Privacy Policy</Link>
            <Link href="/news" className="footer__nav-item">Our blog</Link>
         </nav>
      </footer>
   )
}
