import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='navlogo'>FARHAN SHAHRIYAR</a>
                <div className='navmenu'>
                    <ul className='navlist grid'>
                        <li className='navitem'>
                            <a href='' className='navlink'>
                                <i className='uil uil- navicon'>Home</i>
                            </a>
                        </li>

                        <li className='navitem'>
                            <a href='' className='navlink'>
                                <i className='uil uil- navicon'>About Me</i>
                            </a>
                        </li>

                        <li className='navitem'>
                            <a href='' className='navlink'>
                                <i className='uil uil- navicon'>Portfolio</i>
                            </a>
                        </li>

                        <li className='navitem'>
                            <a href='' className='navlink'>
                                <i className='uil uil- navicon'>Connect</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header