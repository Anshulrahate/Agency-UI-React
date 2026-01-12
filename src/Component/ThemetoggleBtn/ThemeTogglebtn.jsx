import React, { useEffect } from 'react'
import sun_icon from '../../assets/Images/sun_icon.svg'
import moon_icon from '../../assets/Images/moon_icon.svg'
const ThemeTogglebtn = ({theme, setTheme}) => {

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
        const prefersDarkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDarkmode ? 'dark' : 'light');
    }
}, []);



   useEffect(()=>{
    if(theme === 'dark'){
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
    localStorage.setItem('theme', theme)
}, [theme])

  return (
    
   <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
    <img
        src={theme === 'dark' ? sun_icon : moon_icon}
        className='w-8.5 p-1.5 border border-gray-500 rounded-full'
        alt="theme-toggle"
    />
</button>

   
  )
}

export default ThemeTogglebtn
