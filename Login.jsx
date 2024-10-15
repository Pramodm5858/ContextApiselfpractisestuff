import React, { useContext, useState } from 'react'
import NoteContext from './Context/NoteContext'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const { setUser } = useContext(NoteContext)

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div>
            <h1>Login</h1>
            <input type='text' placeholder='Enter username' value={username} onChange={(e) => { setUsername(e.target.value) }} />

            <input type='text' placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

            <button onClick={HandleSubmit}>Submit</button>
        </div>
    )
}
