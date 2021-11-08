import "./Search.css"
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getRecipes, setRecipeName } from '../Redux/Actions.js'
import { IoIosSearch } from "react-icons/io";

const SearchInput = styled.input`

`
function Search() {
    const [input, setInput] = React.useState("")

    const dispatch = useDispatch()

    const handleOnChange = (e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(setRecipeName(input))
        dispatch(getRecipes({name:input})) 
        setInput("")
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <SearchInput type="text" placeholder="Search..." onChange={handleOnChange} value={input} className="Search"/>
            <button type="submit" className="lupa" ><IoIosSearch/></button>
        </form>
    )
}

export default Search