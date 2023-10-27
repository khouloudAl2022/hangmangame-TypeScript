import { useCallback, useEffect, useState } from "react"
import wordList from "./wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import Keyboard from "./components/Keyboard"
import HangmanWord from "./components/HangmanWord"

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  console.log("hhhhhhhhhhhhhhhhhhh", guessedLetters)

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    {/****currentletters***:you're using the functional update form of setState. 
  This pattern is often used to update a state variable based on its current value*/ }
    setGuessedLetters(currentletters => [...currentletters, letter]); {/*Managing the list of guessed letters and updating the game state*/ }
  }, [guessedLetters])




  // useEffect for handling keyboard event to get the guessedLetters
  useEffect(() => {
    console.log("wordtoguess", wordToGuess)
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
