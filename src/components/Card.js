import React, { useState } from 'react'
import js from '../img/js-badge.svg'
import './Card.css'

const Card = ({ order, onClick, boardIsFreeze, image}) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const flipCard = permiso => { 
        if(permiso){
            setIsFlipped(false) 
        }else{
            // if(isFlipped) return
            if(boardIsFreeze) return
            setIsFlipped(true) 
        }
        
    }

    return (
        <div style={{order:order}} onClick={()=>onClick(isFlipped, image.name, flipCard)} className={`card ${isFlipped ? 'flip' : ''}`}>
            <img className="back-face" src={js} height="150px" width="100px" alt=""/>
            <img className="front-face" src={image.svg} height="150px" width="100px" alt=""/>
        </div>
    )
}


export default Card
