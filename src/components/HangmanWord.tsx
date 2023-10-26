type HangmanWordProps = {
    guessedLetters: string [],
    wordToGuess: string
}

const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
    return (
        <div style={{
            display: "flex",
            gap: "1rem",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace"
        }}>
            {wordToGuess.split('').map((letter, index) =>
            (<span style={{ borderBottom: ".1em solid black " }} key={index}>
                <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>

            </span>
            ))}</div>
    )
}

export default HangmanWord
