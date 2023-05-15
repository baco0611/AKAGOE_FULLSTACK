import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

function StateContext({ children }) {

    // const [user, setUser] = useState()
    const [user, setUser] = useState({
        name: 'Huynh Van Nguyen Bao'
    })
    const [token, _setToken] = useState(localStorage.getItem('ACCES_TOKEN'))
    // const [token, _setToken] = useState(123)

    const [defaultLanguage, _setDefaultLanguage] = useState(localStorage.getItem('DEFAULT_LANGUAGE'))

    const setDefaultLanguage = (language) => {
        localStorage.setItem('DEFAULT_LANGUAGE', language)
        _setDefaultLanguage(language)
    }

    useEffect(() => {
        if(!defaultLanguage) {
            setDefaultLanguage('eng')
        }
    }, [])

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCES_TOKEN', token)
        } else { 
            localStorage.removeItem('ACCES_TOKEN')
        }
    } 

    return (
        <UserContext.Provider value={{
                user,
                token,
                defaultLanguage,
                setUser,
                setToken,
                setDefaultLanguage
            }
        }>
            {children}
        </UserContext.Provider>
    )
}

export default StateContext
export { UserContext }