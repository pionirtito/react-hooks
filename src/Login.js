import React, { useEffect,useRef } from 'react'

function Login() {

    const textInput = useRef()

    useEffect(() => {
       textInput.current.focus() // !!! fokusirano na input polje

    }, [])

    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <input type="text" ref={textInput} placeholder="name" /> {/* sa atributom REF skrecemo paznju na textInput polje */}
                <input type="text" placeholder="email" />
            </form>
        </div>
    )
}

export default Login
