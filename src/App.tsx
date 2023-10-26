import { useCallback, useEffect, useState } from "react"
import wordList from "./wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import Keyboard from "./components/Keyboard"
import HangmanWord from "./components/HangmanWord"

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })
  console.log("guessed word :", wordToGuess)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))


  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return
    setGuessedLetters(currentletters => [...currentletters, letter]); {/*Managing the list of guessed letters and updating the game state*/ }
  }, [guessedLetters])




  // useEffect for handling keyboard event to get the guessedLetters
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return {/* Preventing non-alphabet characters from being processed*/ }
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        Lose - Win
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>{/*Stretch the item to fill the vertical space*/}
        <Keyboard activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} />
      </div>
    </div>
  )
}

export default App
