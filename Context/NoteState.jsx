import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = ({children}) => {


    const [user, setUser] = useState(null);



    return(
        <NoteContext.Provider value={{user, setUser}}>
            {children}
        </NoteContext.Provider>
    )
}
export default NoteState
