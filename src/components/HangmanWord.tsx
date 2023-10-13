import React from 'react'

const HangmanWord = () => {
    const word = "test"
    return (
        <div style={{
            display: "flex",
            gap: ".25rem",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace"
        }}>
            {word.split('').map((letter, index) =>
            (<span style={{borderBottom:"10px solid"}}> {letter}</span>
            ))}</div>
    )
}

export default HangmanWord
