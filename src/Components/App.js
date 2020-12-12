import React, { useState } from "react";
import "../styles/style.css";

const emojiDictionary = {
    "🥨": "Pretzel",
    "🥯": "Bagel",
    "🥞": "Pancakes",
    "🧇": "Waffle",
    "🍔": "Hamburger",
    "🍟": "French Fries",
    "🍕": "Pizza",
    "🌭": "Hot Dog",
    "🥪": "Sandwich",
    "🌮": "Taco",
    "🌯": "Burrito",
    "🧆": "Falafel",
};

const emojisWeKnow = Object.keys(emojiDictionary);

const App = () => {
    const [meaning, setMeaning] = useState("Enter or click an emoji");

    function emojiInputHandler(e) {
        const userInput = e.target.value;
        let answer = emojiDictionary[userInput];

        if (!userInput) answer = "Enter or click an emoji";

        if (answer === undefined) answer = "We don't have this in our database";

        setMeaning(answer);
    }

    function handleEmojiClick(emoji) {
        let meaning = emojiDictionary[emoji];
        setMeaning(meaning);
    }

    return (
        <div className='emoji__container'>
            <h1 className='emoji__title'>🍳 Snackmoji 🍳</h1>
            <input className='emoji__input' onChange={emojiInputHandler} />

            <h2 className='emoji__meaning'>{meaning}</h2>

            <h3>Snack's we know</h3>
            <ul className='emoji__list'>
                {emojisWeKnow.map((emoji, index) => {
                    return (
                        <li
                            className='emoji__item'
                            key={index}
                            onClick={() => handleEmojiClick(emoji)}>
                            {emoji}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
