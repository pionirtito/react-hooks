// primer za useState ... PRAVILNO
import React, { useState } from 'react'
import "./Ball.css"

function Ball() {

    const [position,moveRight] = useState(0);

    const style = {
        left:position+"px"
    }

    function moveBall() {
        for (let i = 0; i < 5; i++) {
            // moveRight(position+20) // !!! NEPRAVILNO => NECE SE POMERATI 5X
            moveRight((previousPossition)=>{return previousPossition + 20}) // mora AF sa PRETHODNIM STANJEM kao argumentom
        }
    }

    return (
        <div onClick={moveBall} className="Ball" style={style}></div>
    )
}

export default Ball