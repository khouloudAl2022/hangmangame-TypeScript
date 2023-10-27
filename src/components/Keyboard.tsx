import styles from "./keyboard.module.css"

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];


type KeyBoardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter }: KeyBoardProps) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr)",
            gap: ".5rem"
        }}>
            {alphabet.map((key) => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button 
                    onClick={() => addGuessedLetter(key)} 
                    className={`${styles.btn}
                          ${isActive ? styles.active : ""}
                          ${isInactive ? styles.inactive : ""}`}
                        key={key}
                    >
                        {key}
                    </button>
                )

            })}


        </div>
    )
}

export default Keyboard
