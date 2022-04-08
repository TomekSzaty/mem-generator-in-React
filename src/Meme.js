import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemeImages(data.data.memes)
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url

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