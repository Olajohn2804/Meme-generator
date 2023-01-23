import React from 'react'
import Memesdata from '../Memesdata'
const Meme = () => {
    let url;
    const getMeme = () => {
        const memeArray =  Memesdata.data.memes;
        const randomNumber  =  Math.floor(Math.random()* memeArray.length);
        url = memeArray[randomNumber].url
    }
  return (
    <>
        <div className="meme">
            <input type="text" className='meme-input' placeholder='Top text'/>
            <input type="text" className='meme-input' placeholder='bottom text'/> <br />
            <button className='meme-button' onClick={getMeme}>Get a new meme image  🖼</button>
        </div>
    </>
  )
}

export default Meme