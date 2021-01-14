import React from 'react'

const Buttons=({text})=> {

    const handleClick = (e) =>{
        console.log(e.target)
      }
    return (
    <button onClick={handleClick} >{text}</button>
        )}

export default Buttons
