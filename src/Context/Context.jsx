import { createContext, useState } from "react";

const Context = createContext();

function Provider ({children}){

    const [book, setBook] = useState([]);

    return (
        <Context.Provider value={{book, setBook}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}