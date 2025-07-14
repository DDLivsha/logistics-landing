'use client'
import Intro from "@/components/Intro";

import { useState, useEffect, useRef } from 'react'

//====================== SLIDER ======================

const clientsData = [
  {
    name: 'John Smith',
    position: 'FOX Hub CEO',
    image: '/images/clients/review-photo.jpg',
    content: [
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
      'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    ]
  },
  {
    name: 'John Smith',
    position: 'FOX Hub CEO',
    image: '/images/clients/review-photo.jpg',
    content: [
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
      'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    ]
  },
]

export default function Home() {

  //====================== SERVICE DATA ======================
  const [services, setServices] = useState([
    {
      title: "Ground Shipping",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
      link: "#"
    },
    {
      title: "Railway Shipping",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam fokijas;fksjad f;asdj f;sadjf;kals df;asd jfadsj fasld;kjf as;dlkf jasdl;kjf asldk;",
      link: "#"
    },
    {
      title: "Water Shipping",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
      link: "#"
    },
    {
      title: "Air Shipping",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
      link: "#"
    },
  ])

  //====================== TEAM DATA ======================
  const [team, setTeam] = useState([
    {
      name: "John Smith",
      position: "Logistic manager - 8 years experience",
      image: "images/team/John-1.jpg",
      email: 'john@centerlogistic.com',
      phone: '+987412512543'
    },
    {
      name: "Daniel Kore",
      position: "Software engineer",
      image: "images/team/Daniel.jpg",
      email: 'john@centerlogistic.com',
      phone: '+987412512543'
    },
    {
      name: "Anna Smith",
      position: "Logistic manager - 8 years experience",
      image: "images/team/Anna.jpg",
      email: 'john@centerlogistic.com',
      phone: '+987412512543'
    },

  ])
  //====================== CLIENTS DATA ======================
  const [clients, setClients] = useState([
    { img: 'images/logos/atica.svg' },
    { img: 'images/logos/hex-lab-1.svg' },
    { img: 'images/logos/amara.svg' },
    { img: 'images/logos/muzica-2.svg' },
    { img: 'images/logos/solaytic.svg' },
    { img: 'images/logos/hexa.svg' },
    { img: 'images/logos/utosia-2.svg' },
    { img: 'images/logos/fox-hub.svg' },
  ])
  //====================== BENEFITS DATA ======================
  const [benefits, setBenefits] = useState([
    { title: 'Safety' },
    { title: 'High quality drivers' },
    { title: 'Guarantee & Support 24/7' },
    { title: 'Personal manager' },
  ])

  return (
    <>
      <main className="main">
        <Intro />
        {/* <section
          className="main__service service"
          id="service"
        >
          <div className="container">
            <div className="service__inner">
              {services.map((item, key) => (
                <div key={key} className="service__content-block">
                  <h3 className="service__title">{item.title}</h3>
                  <p className="service__text">{item.text}</p>
                  <div className="service__link-wrapper w-[100px]">
                    <a href={item.link} className="service__link">Learn more</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* <section
          className="main__clients clients"
          id="clients"
        >
          <div className="container">
            <h2 className="clients__title title" data-aos="fade-down"><span>Our</span> Clients</h2>
            <div className="clients__inner">
              <ul className="clients__logos-list">
                {clients.map((item, key) => (
                  <li key={key} className="clients__list-item">
                    <a href="#" target="_blank" className="clients__list-link">
                      <img src={item.img} alt="logo" className="clients__img" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="clients__slider">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  // navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  loop
                  spaceBetween={50}
                  slidesPerView={1}

                >
                  {clientsData.map((client, index) => (
                    <SwiperSlide key={index} className="!mb-6">
                      <div className="clients__slide">
                        <div className="clients__slide-header">
                          <div className="clients__img-box">
                            <img
                              src={client.image}
                              alt={client.name}
                              className="clients__header-img"
                            />
                          </div>
                          <div className="clients__title-wrapper">
                            <h4 className="clients__header-title">{client.name}</h4>
                            <h6 className="clients__header-subtitle">{client.position}</h6>
                          </div>
                        </div>
                        <div className="slider__content">
                          {client.content.map((text, i) => (
                            <p key={i} className="mb-2">
                              {text}
                            </p>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </div>
            <div className="clients__bottom" data-aos="fade-up">
              <a href="#" target="_blank" className="clients__button button" data-modal="#BecomeCLientModal">Become a
                client</a>
              <p className="clients__love">we love our clients</p>
            </div>
          </div>
        </section> */}

        {/* <section className="main__benefits benefits" id="benefits" data-scrollspy="#benefits">
          <div className="container">
            <div className="benefits__inner">
              <div className="benefits__content">
                <ul className="benefits__list">
                  {benefits.map((item, key) => (
                    <li key={key} className="benefits__list-item">
                      <h4 className="benefits__list-title">{item.title}</h4>
                      <p className="benefits__list-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="benefits__img-box" data-aos="fade-left" data-aos-delay="200">
                <img src="images/way-truck.jpg" alt="truck" className="benefits__img" />
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="main__team team" id="team" data-scrollspy="#team">
          <div className="container">
            <h2 className="team__title title" data-aos="fade-down"><span>Our</span> Team</h2>
            <div className="team__inner">
              <ul className="team__content-list">
                {team.map((item, key) => (
                  <li key={key} className="team__content-item">
                    <div className="team__img-box">
                      <img src={item.image} alt="John" className="team__img" />
                    </div>
                    <h4 className="team__item-title">{item.name}</h4>
                    <p className="team__item-subtitle">{item.position}</p>
                    <div className="team__mail">
                      <img src="images/icons/mail-black.svg" alt="mail" className="team__mail-img" />
                      <a href="mailto:john@centerlogistic.com" className="team__mail-link">{item.email}</a>
                    </div>
                    <div className="team__phone">
                      <img src="images/icons/phone-black.svg" alt="phone" className="team__phone-img" />
                      <a href="tel:987412512543" className="team__phone-link">{item.phone}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}

        {/* <section className="main__mission mission">
          <div className="container">
            <div className="mission__content-wrapper">
              <h2 className="mission__title">Our mission</h2>
              <div className="mission__inner" data-aos="fade-up">
                <h3 className="mission__inner-title">To provide our customer qualified services according the
                  international</h3>
                <p className="mission__inner-subtitle">Book your Cargo now & Your job just got a lot easier</p>
                <div className="mission__lines">
                  <div className="mission__blue-line"></div>
                  <div className="mission__orange-line"></div>
                </div>
              </div>
            </div>
            <div className="mission__button-wrapper">
              <a href="#" target="_blank" className="mission__button button">Become a client</a>
            </div>
          </div>
        </section> */}

        {/* <section className="main__news news" id="news" data-scrollspy="#news">
          <div className="container">
            <h2 className="clients__title title" data-aos="fade-down"><span>Interesting</span> to read</h2>
            <ul className="news__list">
              <li className="news__list-item" data-aos="flip-down">
                <article className="news__list-article">
                  <a className="news__item-link" href="#">
                    <h4 className="news__item-title">News title</h4>
                    <p className="news__item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua.
                      At
                      vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <time dateTime="21-03-2019" className="news__item-time">21 March, 2019</time>
                  </a>
                </article>
              </li>
              <li className="news__list-item" data-aos="flip-down">
                <article className="news__list-article">
                  <a className="news__item-link" href="#">
                    <h4 className="news__item-title">News title</h4>
                    <p className="news__item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua.
                      At
                      vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <time dateTime="21-03-2019" className="news__item-time">21 March, 2019</time>
                  </a>
                </article>
              </li>
            </ul>
            <a href="news.html" className="news__button button" data-aos="fade-up">Visit blog</a>
          </div>
        </section> */}
      </main>
    </>
  );
}
