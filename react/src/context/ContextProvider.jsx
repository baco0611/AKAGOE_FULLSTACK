import { createContext, useState } from "react";

const UserContext = createContext()

function StateContext({ children }) {

    // const [user, setUser] = useState()
    const [user, setUser] = useState({
        name: 'Huynh Van Nguyen Bao'
    })
    const [token, _setToken] = useState(localStorage.getItem('ACCES_TOKEN'))
    // const [token, _setToken] = useState(123)

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
                setUser,
                setToken
            }
        }>
            {children}
        </UserContext.Provider>
    )
}

export default StateContext
export { UserContext }