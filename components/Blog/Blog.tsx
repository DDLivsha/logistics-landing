import { News } from '@/interfaces/news'
import React, { FC } from 'react'
import BlogButtonWrapper from './BlogButtonWrapper'

interface Props {
   data: News[]
}
const Blog: FC<Props> = ({ data }) => {
   return (
      <div className="container">
         <h2 className="clients__title title" ><span>Interesting</span> to read</h2>
         <div className="news__list">
            {data.map((item, key) => (
               <div key={key} className="news__list-item" >
                  <article className="news__list-article">
                     <a className="news__item-link" href="/news">
                        <h4 className="news__item-title">{item.title}</h4>
                        <p className="news__item-text">{item.text}</p>
                        <time dateTime="21-03-2019" className="news__item-time">{item.date}</time>
                     </a>
                  </article>
               </div>
            ))}
         </div>
         <BlogButtonWrapper />
      </div>
   )
}

export default Blog