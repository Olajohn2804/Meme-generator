import React, { useState } from 'react'
import Memesdata from '../Memesdata'
const Meme = () => {
    let url;
    // const [memeImage, setmemeImage] = useState("")
    
     const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(Memesdata)
    
    const getMeme = () => {
        const memeArray =  allMemeImages.data.memes;
        const randomNumber  =  Math.floor(Math.random()* memeArray.length);
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

  return (
    <>
        <div className="meme">
            <input type="text" className='meme-input' placeholder='Top text'/>
            <input type="text" className='meme-input' placeholder='bottom text'/> <br />
            <button className='meme-button' onClick={getMeme}>Get a new meme image  🖼</button>
        </div>
        <img src={meme.randomImage} alt="" className='meme-img'/>
    </>
  )
}

export default Meme