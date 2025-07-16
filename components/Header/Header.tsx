'use client'
import { useState, useEffect, useRef } from 'react'
import Logo from '@/assets/images/logo.svg'
import { useModalStore } from '@/helpers/zustand'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import BurgerButton from './BurgerButton'

const navigation = [
   { name: "Services", id: "service" },
   { name: "Clients", id: "clients" },
   { name: "Benefits", id: "benefits" },
   { name: "Team", id: "team" },
   { name: "News", id: "news" },
]
export default function Header() {

   const { open } = useModalStore()
   const pathname = usePathname()

   //================= SCROLL FOR NAV ======================
   const [activeSection, setActiveSection] = useState<string | null>(null)

   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

   useEffect(() => {
      const options = {
         root: null,
         rootMargin: '0px',
         threshold: 0.6
      }
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               setActiveSection(entry.target.id)
            }
         })
      }, options)
      navigation.forEach(item => {
         const el = document.getElementById(item.id)
         if (el) observer.observe(el)
         sectionRefs.current[item.id] = el
      })

      const handleScroll = () => {
         if (window.scrollY < 50) {
            setActiveSection(null)
         }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
         navigation.forEach(item => {
            const el = sectionRefs.current[item.id]
            if (el) observer.unobserve(el)
         })
      }
   }, [])

   const handleClick = (id: string) => {
      const section = document.getElementById(id)
      if (section) {
         section.scrollIntoView({ behavior: 'smooth' })
      }
   }

   //================== MOBILE MENU ======================
   const [isOpen, setIsOpen] = useState(false)
   const mobileMenuRef = useRef<HTMLUListElement | null>(null)
   const burgerRef = useRef<HTMLButtonElement | null>(null)

   //================== UNSET SCROLL FOR BODY ======================
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden'
      } else {
         const timeout = setTimeout(() => {
            document.body.style.overflow = ''
         }, 300)

         return () => clearTimeout(timeout)
      }
   }, [isOpen])

   //================== OUTSIDE CLICK ======================
   useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
         const target = event.target as Node
         const menuEl = mobileMenuRef.current
         const burgerEl = burgerRef.current

         if (isOpen && menuEl && !menuEl.contains(target) && burgerEl && !burgerEl.contains(target)) {
            setIsOpen(false)
         }
      }

      document.addEventListener('mousedown', handleOutsideClick)

      return () => {
         document.removeEventListener('mousedown', handleOutsideClick)
      }
   }, [isOpen])

   return (
      <header className="header" id="header">
         <BurgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            ref={burgerRef}
         />
         <div className="container">
            <div className="header__inner">
               <Link href="/" className="header__logo">
                  <Logo className="header__logo-img" />
               </Link>
               <nav className="header__nav" id="header__nav">
                  <ul className="header__nav-list">
                     {pathname === '/' && navigation.map((item, index) => (
                        <li className={`header__nav-item${activeSection === item.id ? '--active' : ''} header__nav-link`} key={index} onClick={() => handleClick(item.id)}>
                           {item.name}
                        </li>
                     ))}
                     {pathname !== '/' &&
                        <>
                           <Link href={'/'}>
                              < li className={`header__nav-item header__nav-link`}>
                                 Home page
                              </li>
                           </Link>
                           {pathname === '/news' && <Link href={'/privacy'}>
                              < li className={`header__nav-item header__nav-link`}>
                                 Privacy policy
                              </li>
                           </Link>}
                           {pathname === '/privacy' && <Link href={'/news'}>
                              < li className={`header__nav-item header__nav-link`}>
                                 Our blog
                              </li>
                           </Link>}
                        </>
                     }
                     <button
                        className="header__nav-item header__nav-link"
                        onClick={open}
                     >
                        Contact Us
                     </button>
                  </ul>
               </nav>
            </div>
            <AnimatePresence mode='wait'>
               {isOpen &&
                  <motion.nav
                     className="header__mobile"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                  >
                     <motion.ul
                        ref={mobileMenuRef}
                        className="header__mobile-list"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                     >
                        {pathname === '/' && navigation.map((item, index) => (
                           <li className={`header__mobile-item`} key={index} onClick={() => handleClick(item.id)}>
                              {item.name}
                           </li>
                        ))}
                        {pathname !== '/' &&
                           <>
                              <Link href={'/'}>
                                 < li className={`header__mobile-item`}>
                                    Home page
                                 </li>
                              </Link>
                              {pathname === '/news' && <Link href={'/privacy'}>
                                 < li className={`header__mobile-item`}>
                                    Privacy policy
                                 </li>
                              </Link>}
                              {pathname === '/privacy' && <Link href={'/news'}>
                                 < li className={`header__mobile-item`}>
                                    Our blog
                                 </li>
                              </Link>}
                           </>
                        }
                     </motion.ul>
                  </motion.nav>}
            </AnimatePresence>
         </div>
      </header >
   )
}