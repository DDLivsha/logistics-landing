import { useState, useEffect, useRef } from 'react'

export default function Header() {

   const [activeSection, setActiveSection] = useState(null)
   const navigation = [
      { name: "Services", id: "service" },
      { name: "Clients", id: "clients" },
      { name: "Benefits", id: "benefits" },
      { name: "Team", id: "team" },
      { name: "News", id: "news" },
   ]

   const sectionRefs = useRef({})

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

   const handleClick = (id) => {
      const section = document.getElementById(id)
      if (section) {
         section.scrollIntoView({ behavior: 'smooth' })
      }
   }


   return (
      <header className="header" id="header">
         <div className="overlay" />
         <div className="container">
            <div className="header__inner">
               <a href="/" className="header__logo">
                  <img src="images/logo.svg" alt="CenterLogistic" className="header__logo-img" />
               </a>
               <nav className="header__nav" id="header__nav">
                  <ul className="header__nav-list">
                     {navigation.map((item, index) => (
                        <li className={`header__nav-item${activeSection === item.id ? '--active' : ''}`} key={index} onClick={() => handleClick(item.id)}>
                           <button
                              className={`header__nav-link`}
                           >
                              {item.name}
                           </button>
                        </li>
                     ))}

                     <li className="header__nav-item">
                        <a href="#" className="header__nav-link" data-modal="#BecomeCLientModal">Contact Us</a>
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
   )
}