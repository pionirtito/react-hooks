import React,{ useContext } from 'react'
import { NameContext,LastNameContext } from "./App"

// Primer sa Use context
function Aside() {

    const name = useContext(NameContext)
    const lastName = useContext(LastNameContext)

    return (
        <div>
            <h1>Aside && name: {name} {lastName}</h1>
        </div>
    )
}


// Primer bez useContext
/* function Aside() {
    return (
        <div>
            <NameContext.Consumer>
                {
                    name=>{

                        return (
                            <h1>Aside name: {name}</h1> // vrednost iz value iz maina .. moze bilo koje ime

                        )
                    }
                }
            </NameContext.Consumer>
        </div>
    )
} */

export default Aside
