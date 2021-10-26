import React, { useState, useEffect } from 'react'
import Card from './Card.js'
import './Board.css'
import IMAGES from './Images.js'

export default function Board() {

    // eslint-disable-next-line
    const [cards, setCards] = useState([...IMAGES, ...IMAGES])
    // eslint-disable-next-line
    const [orders, setOrders] = useState(()=>{
        const o = []
        cards.forEach(()=> o.push(Math.floor(Math.random()*cards.length)))
        return o
    })

    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)

    const [freezeBoard, setFreezeBoard] = useState(false)

    
    useEffect(() => {
       
        checkMatch()
       // eslint-disable-next-line
    }, [secondCard])
    


    const handleCardClick = (isFlipped, name, callback) => {
        if(isFlipped) return
        callback(false)
        if(!firstCard){
            return setFirstCard({name, callback})
        }
        if(!secondCard){
            setSecondCard({name, callback})
        }
    }

    const checkMatch = () => {
        if(!secondCard) return

        setFreezeBoard(true)

        if(firstCard.name===secondCard.name){
            console.log('matchearon')
            setFirstCard(null)
            setSecondCard(null)
            setFreezeBoard(false)
        }
        else{
            setTimeout( () => {
                firstCard.callback(true)
                secondCard.callback(true)
                setFirstCard(null)
                setSecondCard(null)
                setFreezeBoard(false)
            }, 2000)
        }
        
    }
    

    return (
        <section id="board">
            {cards.map( (i,idx) => {

                return <Card 
                        onClick={handleCardClick}
                        boardIsFreeze={freezeBoard}
                        key={idx} 
                        image={i}
                        order={orders[idx]}
                        />
            })}
        </section>
    )
}
