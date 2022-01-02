import React from 'react'
import "./News.css";

export default function Card({article , index}) {
    
    const { title , urlToImage , publishedAt , url , source ,description } = article;
    return (
        <>
        <div className="imgg">
            <img
              src={urlToImage || 'https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I='}
              alt="rendom"
              target="_blank"
            />
            </div>

            <div className="date_source_tag">
           <span>{(new Date(publishedAt)).toDateString()}</span>
           <span>{source.name}</span>
            </div>
            <h3 className="news_heading">{title}</h3>
            <p className="news_description">{(description).substring(0,140)}....</p>
            <div className='card_bottom'>
            <span> <a href={url} className="learn_more" target="_blank" rel="noreferrer">LEARN MORE </a></span>
            <span className="no">{index+1}</span>
            </div>
            
        </>
    )
}
