import styles from "./keyboard.module.css"

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const Keyboard = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr)",
            gap: ".5rem"
        }}>
            {alphabet.map((key) => {
                return (<button className={`${styles.btn}`}>{key}</button>)

            })}


        </div>
    )
}

export default Keyboard
