import { createContext, useContext } from "react";
import MockApiClient from "../api/MockApiClient";
import Api from "../api/Api";


const ApiContext = createContext();

export default function ApiContextProvider ({children}) {
    
    const client = new MockApiClient();
    const api = new Api(client);

    return(
        <ApiContext.Provider value={{api}}>
            {children}
        </ApiContext.Provider>
    )
}

export function useApiContext () {
    return useContext(ApiContext)
}