import React from 'react'

const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        right: "-30px",
        top: "50px"
    }} />

)
const BODY = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        right: "0px",
        top: "120px"
    }} />

)
const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-100px",
        top: "150px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }} />

)
const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "10px",
        top: "150px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }} />
)
const LEFT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "0px",
        top: "210px",
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }} />
)
const RIGHT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-90px",
        top: "210px",
        rotate: "60deg",
        transformOrigin: " left bottom"
    }} />
)
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
    return (
        <div style={{ position: "relative" }}>
            {BODY_PARTS.slice(0,numberOfGuesses)}

            <div style={{ width: "10px", height: "50px", backgroundColor: "black", top: 0, right: 0, position: "absolute" }} />
            <div style={{ width: "200px", height: "10px", backgroundColor: "black", marginLeft: "120px" }} />
            <div style={{ height: "400px", background: "black", width: "10px", marginLeft: "120px" }} />
            <div style={{ width: "250px", height: "10px", backgroundColor: "black" }} />
        </div>
    )
}


export default HangmanDrawing
