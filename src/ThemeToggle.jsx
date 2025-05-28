import React from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { useGlobalContext } from './context'

const ThemeToggle = () => {
  const { isDarkTheme, ToggleTheme } = useGlobalContext()

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={ToggleTheme}>
        {isDarkTheme ? <BsMoonFill className="toggle-icon" /> : <BsSunFill className="toggle-icon" />}
      </button>
    </section>
  )
}

export default ThemeToggle
