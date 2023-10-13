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

const HangmanDrawing = () => {
    return (
        <div style={{ position: "relative" }}>
            {HEAD}
            <div style={{ width: "10px", height: "50px", backgroundColor: "black", top: 0, right: 0, position: "absolute" }} />
            <div style={{ width: "200px", height: "10px", backgroundColor: "black", marginLeft: "120px" }} />
            <div style={{ height: "400px", background: "black", width: "10px", marginLeft: "120px" }} />
            <div style={{ width: "250px", height: "10px", backgroundColor: "black" }} />
        </div>
    )
}

export default HangmanDrawing
