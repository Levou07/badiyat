import { createContext, useState } from "react";

const Context = createContext();

function Provider ({children}){

    const [book, setBook] = useState([]);
    const [sear, setSear] = useState([])

    return (
        <Context.Provider value={{book, setBook, sear, setSear}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}