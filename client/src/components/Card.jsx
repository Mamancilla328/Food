import "./Card.css"
import React from "react"
// import { useDispatch } from 'react-redux';
// import { getRecipe } from '../Redux/Actions.js';
import { NavLink } from "react-router-dom";

const Card = ({image,name,id, diets,score}) => {
    return (
        <div className="card">
            <div className="shadow">
            <div className="img">
            <img src={image} alt={name}/>
            </div>
            <div className="info">
            <NavLink to={`/Recipes/${id}`} className='font'>{name}</NavLink>
            <p className='font'>{diets.join(', ')}</p>
            <p>{score}</p>
            </div>
            </div>
        </div>
    )
}

export default Card;


