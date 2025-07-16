'use client'
import { useState, useEffect, useRef } from 'react'
import Logo from '@/assets/images/logo.svg'
import { useModalStore } from '@/helpers/zustand'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

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

   return (
      <header className="header" id="header">
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
         </div>
      </header >
   )
}