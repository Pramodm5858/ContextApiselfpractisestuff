import React, { useContext } from 'react'
import NoteContext from './Context/NoteContext'


export default function Profile() {

    const { user } = useContext(NoteContext)

    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>

}
