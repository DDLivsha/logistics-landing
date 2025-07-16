import { News } from '@/interfaces/news'
import React, { FC } from 'react'
import BlogButtonWrapper from './BlogButtonWrapper'
import Link from 'next/link'

interface Props {
   data: News[]
}
const Blog: FC<Props> = ({ data }) => {
   return (
      <div className="container">
         <h2 className="clients__title title" ><span>Interesting</span> to read</h2>
         <div className="news__list">
            {data.map((item, key) => (
               <article key={key} className="news__list-item">
                  <Link className="news__item-link" href="/news">
                     <h4 className="news__item-title">{item.title}</h4>
                     <p className="news__item-text">{item.text}</p>
                     <time dateTime={`${item.date}`} className="news__item-time">{item.date}</time>
                  </Link>
               </article>
            ))}
         </div>
         <BlogButtonWrapper />
      </div>
   )
}

export default Blog