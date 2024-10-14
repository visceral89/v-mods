"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return null
    }

    const switchThemes = () => {
        if(theme === "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
   return (
    <div>
        {/* Toggle Switch goes here */}
    </div>
   )
}
