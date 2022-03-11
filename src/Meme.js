import React from "react";
import memesData from "./memesData";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        // console.log(randomNumber);        
        
        setMemeImage(memesArray[randomNumber].url);
    }

    return(
        <main>
            <div className="form">
                <input 
                className="form--input" 
                placeholder="Top text"
                type="text" />

                <input 
                className="form--input"
                placeholder="Bottom text" 
                type="text" />

                <button 
                className="form--button" 
                onClick={getMemeImage}
                >
                    Get a new image 🖼 
                </button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
    );
}