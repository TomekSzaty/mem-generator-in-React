import React from "react";
import memesData from "./memesData";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        setMeme(prevMeme => {
            const {name, value} = event.target
            return {
                ...prevMeme,
               [name] : value
            }
        });
    }

    return(
        <main>
            <div className="form">
                <input 
                className="form--input" 
                placeholder="Top text"
                type="text" 
                name="topText"
                onChange={handleChange}
                value={meme.topText}
                />

                <input 
                className="form--input"
                placeholder="Bottom text" 
                type="text" 
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
                />
                

                <button 
                className="form--button" 
                onClick={getMemeImage}
                >Get a new image 🖼 
                </button>
            </div>

            <div className="meme">            
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}