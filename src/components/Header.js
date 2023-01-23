import React from 'react'
import  memeLogo from '../images/meme-logo.png'
const Header = () => {
  return (
    <>
        <header className='header'>
            <img src={memeLogo} alt="memes-logo" className='header-img' />
            <h2 className='header-title'>Meme Generator</h2>
            <p className='header-paragraph'>React Course - Project 3</p>
        </header>
    </>
  )
}

export default Header