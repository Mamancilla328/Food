import { OrderType, OrderDiet, getDiets} from "../Redux/Actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./Filters.css";


function Order(){

   let dispatch = useDispatch()
//    const { name, page } = useSelector(state=> state)
    
   const allDiets = useSelector(store => store.diets)

   useEffect(() => {
    dispatch(getDiets())
   }, [])

    function handleChangeOrder(event){
        event.preventDefault()
        dispatch(OrderType(event.target.value))
    }

    function handleChangeDiets(event){
        event.preventDefault()
        dispatch(OrderDiet(event.target.value))
    }

    // const handleSelect = (e)=>{
    //    dispatch(setOrder(e.target.value))
    //     dispatch(getRecipes({name, page, order:e.target.value}))
    // }
    return (
        <div className="filterContainers">
        <div>
        <select className="filter" onChange={(event)=> handleChangeDiets(event)}>
            <option value="All">Diets</option>
            {allDiets.map(d => 
            <option value={d.name}>{d.name}</option>)}
        </select>
        </div>
        <div>
        <select className="filter" onChange={(event)=> handleChangeOrder(event)}> 
            <option value="A-Z">Order</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="HighToLow">LowToHigh</option>
            <option value="HighToLow">HighToLow</option>
        </select>
        </div>
        </div> 
    )  
}

export default Order

// import "./Order.css"
// import React from 'react'
// import  { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { getRecipes,setOrder } from '../Redux/Actions'
// import {lastScore, topScore} from './constants'



// function Order() {

//     const { name, page, recipes } = useSelector(state=> state)
//     const [order] = useState({ type: '' })
//     const dispatch = useDispatch()

//     const handleSubmit = (e) => {
//         if (order.type === 'scorefirst') {
//         	setOrder(prev => ({ ...prev, type: e.target.value }));
//         	return topScore(recipes);
//         };
//         if (order.type === 'scorelast') {
//         	setOrder(prev => ({ ...prev, type: e.target.value }));
//         	return lastScore(recipes);
//         };
//     };


//     const handleSelect = (e)=>{
//        dispatch(setOrder(e.target.value))
//         dispatch(getRecipes({name, page, order:e.target.value}))
//     }

//     return (
//         <>
//         <div className= "AtoZ">
//             <select onChange={handleSelect} className="order">     
//                 <option selected value="asc">Aa-Zz</option>
//                 <option value="desc">Zz-Aa</option>  
//             </select>
//         </div>
//         <div className= "Score">
//             <select onChange={handleSubmit} className="score">     
//                 <option value='scorefirst'>Top Score</option>
//  		        <option value='scorelast'>Last Score</option>
//             </select>
//         </div>
//         </>
//     )
// }





