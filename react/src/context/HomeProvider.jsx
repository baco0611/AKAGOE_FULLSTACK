import { createContext, useState } from "react"

const HomeSectionContext = createContext()

function HomeContext({ children }) {
    const [themeColor, setThemeColor] = useState('default')

    return (
        <HomeSectionContext.Provider value={{
                themeColor,
                setThemeColor
            }
        }>
            {children}
        </HomeSectionContext.Provider>
    )
}

export default HomeContext
export { HomeSectionContext }