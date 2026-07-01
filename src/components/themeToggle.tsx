import { useState, useEffect } from "react"
import { Moon, Sun } from 'lucide-react'
import { cn } from "../lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme === 'dark') {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)

        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300")}>
            {isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300"></Sun>) : (<Moon className="h-6 w-6 text-blue-300"></Moon>)}
        </button>
    )
}