import { createContext, useState } from "react";

const Context = createContext();

function Provider ({children}){

    const [book, setBook] = useState([]);
    const [sear, setSear] = useState([])
    const [dark, setDark] = useState('')

    return (
        <Context.Provider value={{book, setBook, sear, setSear, dark, setDark}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}