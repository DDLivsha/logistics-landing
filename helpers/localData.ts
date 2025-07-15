import { Benefit } from "@/interfaces/benefit";
import { Client } from "@/interfaces/client";
import { Service } from "@/interfaces/service";
import { TeamMember } from "@/interfaces/teamMember";

export const services: Service[] = [
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
]

export const sliderData: Client[] = [
   {
      name: 'John Smith',
      position: 'FOX Hub CEO',
      image: '/review-photo.jpg',
      content: [
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
         'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      ]
   },
   {
      name: 'John Smith',
      position: 'FOX Hub CEO',
      image: '/review-photo.jpg',
      content: [
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
         'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      ]
   },
   {
      name: 'John Smith',
      position: 'FOX Hub CEO',
      image: '/review-photo.jpg',
      content: [
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
         'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      ]
   },
]

export const imgData: { img: string }[] = [
   { img: '/logos/atica.svg' },
   { img: '/logos/hex-lab-1.svg' },
   { img: '/logos/amara.svg' },
   { img: '/logos/muzica-2.svg' },
   { img: '/logos/solaytic.svg' },
   { img: '/logos/hexa.svg' },
   { img: '/logos/utosia-2.svg' },
   { img: '/logos/fox-hub.svg' },
]

export const team: TeamMember[] = [
   {
      name: "John Smith",
      position: "Logistic manager - 8 years experience",
      image: "@/assets/images/team/John-1.jpg",
      email: 'john@centerlogistic.com',
      phone: '+987412512543'
   },
   {
      name: "Daniel Kore",
      position: "Software engineer",
      image: "@/assets/images/team/Daniel.jpg",
      email: 'john@centerlogistic.com',
      phone: '+987412512543'
   },
   {
      name: "Anna Smith",
      position: "Logistic manager - 8 years experience",
      image: "@/assets/images/team/Anna.jpg",
      email: 'john@centerlogistic.com',
      phone: '+987412512543'
   },
]

export const benefits: Benefit[] = [
   {
      title: 'Safety', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor'
   },
   {
      title: 'High quality drivers', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor'
   },
   {
      title: 'Guarantee & Support 24/7', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor'
   },
   {
      title: 'Personal manager', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor'
   },
]