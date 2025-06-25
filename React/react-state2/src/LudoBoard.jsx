import { useState } from "react"

function LudoBoard(){
    let [moves, setMoves] = useState({Blue: 0, Yellow: 0, Green: 0, Red: 0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        // moves.Blue += 1;
        console.log(`moves.blue = ${moves.Blue}`)
        // setMoves({...moves, Blue: moves.Blue +1})
        // setMoves((prevMoves) => {
        //     return {...prevMoves, Blue: prevMoves.Blue +1}
        // })

        setArr((prevArr) => {return [...prevArr, "blue moves"]})
        console.log(arr)
    }

        let updateYellow = () => {
        // moves.Yellow += 1;
        console.log(`moves.Yellow = ${moves.Yellow}`)
        // setMoves({...moves, Yellow: moves.Yellow +1})
        setMoves((prevMoves) => {
            return {...prevMoves, Yellow: prevMoves.Yellow +1}
        })
    }

        let updateGreen = () => {
        // moves.Green += 1;
        console.log(`moves.Green = ${moves.Green}`)
        // setMoves({...moves, Green: moves.Green +1})
        setMoves((prevMoves) => {
            return {...prevMoves, Green: prevMoves.Green +1}
        })
    }

        let updateRed = () => {
        // moves.Red += 1;
        console.log(`moves.red = ${moves.Red}`)
        // setMoves({...moves, Red: moves.Red +1})
        setMoves((prevMoves) => {
            return {...prevMoves, Red: prevMoves.Red +1}
        })
    }

    return(
        <>
           <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.Blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.Yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.Green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves ={moves.Red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
           </div>
        </>
    )

} 
   export default LudoBoard