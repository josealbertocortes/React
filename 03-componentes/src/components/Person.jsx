import React from 'react'

const Person = ({info, hobbies, bio, children}) =>{
    console.log(children)
    if(bio){    
    return(
        <>
        <p>Soy {info.name} tengo {info.age} años. naci en {info.birthday.getFullYear()}. Mis hobbies son {hobbies.join(" ")} </p>
        {bio}
        </>
    )}else{
        return <p>no hay persona</p>
    }
}

export default Person