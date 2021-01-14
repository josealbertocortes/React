import React from 'react'
import imagen from '../assets/wolf.jpg'
import './Card.css'
const Card = ({title,description, author,tags,views}) => {
    return (
        <>
        
        <div className="card">
            <h2 className="card__title">{title}</h2>
            <img className="card__img" src={imagen} alt="aqui va la foto"/>
            <p className="card__description">{description} </p>
            <p className="card__author">{author}</p>
            <ul className="card__tags">{tags.map(tag=>{return <li>tag</li>})}</ul>
            <p className="card_views">{views} visitas</p>
            <p className="card__date">17/2/2020</p>
        </div>
        </>
    )

}
export default Card