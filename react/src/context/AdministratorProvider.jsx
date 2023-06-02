import { createContext, useState } from "react"

const AdministratorSectionContext = createContext();

function AdministratorContext({ children }) {
    const [administrator, setAdministrator] = useState(null)
    const [adminTheme, setAdminTheme] = useState('')

    return (
        <AdministratorSectionContext.Provider value={{
                administrator,
                setAdministrator,
                adminTheme, 
                setAdminTheme
            }
        }>
            {children}
        </AdministratorSectionContext.Provider>
    )
}

export default AdministratorContext
export { AdministratorSectionContext }