"use client"

import { ThemeProvider } from "@emotion/react"
import theme from "../theme"

export function Styledroot({children}:Readonly<{children: React.ReactNode}>){
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}