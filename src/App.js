import { useState } from 'react';
import './App.css';

const GAME_DURATION = 4;

const BACKGROUND_COLOR = "#282c34";
const WIN_COLOR = "#22ee22";
const LOSE_COLOR = "#ee2222";
const PLAYING_COLOR = "#14161a";

const SUDDEN_SPEED = 0;
const RELAXED_SPEED = 3000;

const green_unpressed_fill =  { fill: "#19b400" }
const green_pressed_fill =    { fill: "#067400" }
const blue_unpressed_fill =   { fill: "#268bd1" }
const blue_pressed_fill =     { fill: "#00599f" }
const red_unpressed_fill =    { fill: "#c92700" }
const red_pressed_fill =      { fill: "#741a00" }
const yellow_unpressed_fill = { fill: "#e9a400" }
const yellow_pressed_fill =   { fill: "#946000" }

const timeout = (delay) => new Promise( res => setTimeout(res, delay) );

let sequence = [];
let sequenceCountdown = [...sequence];

function App() {
  let [isPressed, setIsPressed] = useState([false, false, false, false]);
  let [gameStarted, setGameStarted] = useState(false);

  let [headerColor, setHeaderColor] = useState(BACKGROUND_COLOR);
  let [headerSpeed, setHeaderSpeed] = useState(RELAXED_SPEED);

  const clickEvent = (index) => {
    if(!gameStarted) return;
    console.log(index);
    console.log(sequenceCountdown[0])
    if(sequenceCountdown.shift() === index) {
      if(sequenceCountdown.length === 0) {
        playGame();
        setGameStarted(false);
      }
    } else {
      gameLost();
      setGameStarted(false);
    }
  }

  const togglePressed = (index, toggle) => {
    let pressed = [...isPressed];
    pressed[index] = toggle;
    setIsPressed(pressed)
  }

  const displayButtonPress = async (index) => {
    let pressed = [...isPressed];
    pressed[index] = true;
    setIsPressed(pressed);
    await timeout(500);
    pressed = [...isPressed];
    setIsPressed(pressed)
  }

  const playGame = async () => {
    await timeout(1000);
    if(sequence.length === GAME_DURATION) {
      gameWon();
      return;
    }

    sequence.push(Math.floor(Math.random() * 4));
    for(let i = 0; i < sequence.length; i++) {
      await displayButtonPress(sequence[i]);
      await timeout(250);
    }

    sequenceCountdown = [...sequence]

    setGameStarted(true)
  }

  const startGame = () => {
    document.getElementById("startButton").remove();
    setHeaderColor(PLAYING_COLOR);
    playGame();
  }

  const gameWon = async () => {
    console.log("Win!");
    setHeaderSpeed(SUDDEN_SPEED);
    setHeaderColor(WIN_COLOR);
    await timeout(SUDDEN_SPEED + 100);
    setHeaderSpeed(RELAXED_SPEED);
    setHeaderColor(BACKGROUND_COLOR);
  }

  const gameLost = async () => {
    console.log("Lose!");
    setHeaderSpeed(SUDDEN_SPEED);
    setHeaderColor(LOSE_COLOR);
    await timeout(SUDDEN_SPEED + 100);
    setHeaderSpeed(RELAXED_SPEED);
    setHeaderColor(BACKGROUND_COLOR);
  }

  return (
    <div className="App">
      <header id="header" className="App-header" style={{backgroundColor: headerColor, transitionDuration: headerSpeed + 'ms'}}>
        <div style={{flex: 0.5}}><h1 style={{fontSize: "4em"}}>Light and Sound</h1></div>
        <div id="buttonContainer" style={{float: "left", flex: 2}}>
          <svg height="256" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284.29 251.52" style={{marginRight: 50, marginBottom: 50}}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path onMouseDown={() => togglePressed(0, true)} onMouseUp={() => togglePressed(0, false)} onMouseLeave={() => isPressed ? togglePressed(0, false) : ""} onClick={() => clickEvent(0)} style={isPressed[0] ? green_pressed_fill : green_unpressed_fill} className="cls-1" d="M20,246.52A15,15,0,0,1,7,224L129.14,12.51a15,15,0,0,1,26,0L277.25,224a15,15,0,0,1-13,22.52Z"/><path onMouseDown={() => togglePressed(0, true)} onMouseUp={() => togglePressed(0, false)} onMouseLeave={() => isPressed ? togglePressed(0, false) : ""} onClick={() => clickEvent(0)} style={{fill: "#008a03"}} className="cls-2" d="M142.15,10a9.85,9.85,0,0,1,8.67,5L272.92,226.5a10,10,0,0,1-8.67,15H20a10,10,0,0,1-8.67-15L133.47,15a9.85,9.85,0,0,1,8.68-5m0-10a19.85,19.85,0,0,0-17.34,10L2.71,221.5a20,20,0,0,0,17.33,30H264.25a20,20,0,0,0,17.33-30L159.48,10A19.83,19.83,0,0,0,142.15,0Z"/></g></g></svg>
          <svg height="256" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{marginRight: 50, marginBottom: 50}}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect onMouseDown={() => togglePressed(1, true)} onMouseUp={() => togglePressed(1, false)} onMouseLeave={() => isPressed ? togglePressed(1, false) : ""} onClick={() => clickEvent(1)} style={isPressed[1] ? blue_pressed_fill : blue_unpressed_fill} className="cls-1" x="5" y="5" width="246" height="246" rx="15.01"/><path onMouseDown={() => togglePressed(1, true)} onMouseUp={() => togglePressed(1, false)} onMouseLeave={() => isPressed ? togglePressed(1, false) : ""} onClick={() => clickEvent(1)} style={{fill: "#0071bc"}} className="cls-2" d="M236,10a10,10,0,0,1,10,10V236a10,10,0,0,1-10,10H20a10,10,0,0,1-10-10V20A10,10,0,0,1,20,10H236m0-10H20A20,20,0,0,0,0,20V236a20,20,0,0,0,20,20H236a20,20,0,0,0,20-20V20A20,20,0,0,0,236,0Z"/></g></g></svg>
          <svg height="256" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{marginRight: 50, marginBottom: 50}}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path onMouseDown={() => togglePressed(2, true)} onMouseUp={() => togglePressed(2, false)} onMouseLeave={() => isPressed ? togglePressed(2, false) : ""} onClick={() => clickEvent(2)} style={isPressed[2] ? red_pressed_fill : red_unpressed_fill} className="cls-1" d="M128,251A123,123,0,1,1,251,128,123.14,123.14,0,0,1,128,251Z"/><path onMouseDown={() => togglePressed(2, true)} onMouseUp={() => togglePressed(2, false)} onMouseLeave={() => isPressed ? togglePressed(2, false) : ""} onClick={() => clickEvent(2)} style={{fill: "#9f1f00"}} className="cls-2" d="M128,10a118,118,0,0,1,83.44,201.44A118,118,0,0,1,44.56,44.56,117.22,117.22,0,0,1,128,10m0-10h0A128,128,0,0,0,0,128H0A128,128,0,0,0,128,256h0A128,128,0,0,0,256,128h0A128,128,0,0,0,128,0Z"/></g></g></svg>
          <svg height="256" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.41 256" style={{marginBottom: 50}}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path onMouseDown={() => togglePressed(3, true)} onMouseUp={() => togglePressed(3, false)} onMouseLeave={() => isPressed ? togglePressed(3, false) : ""} onClick={() => clickEvent(3)} style={isPressed[3] ? yellow_pressed_fill : yellow_unpressed_fill} className="cls-1" d="M82.36,251a15,15,0,0,1-13-7.51L7,135.51a15.08,15.08,0,0,1,0-15l62.35-108A15,15,0,0,1,82.36,5H207.05a15,15,0,0,1,13,7.51l62.35,108a15.08,15.08,0,0,1,0,15l-62.35,108a15,15,0,0,1-13,7.51Z"/><path onMouseDown={() => togglePressed(3, true)} onMouseUp={() => togglePressed(3, false)} onMouseLeave={() => isPressed ? togglePressed(3, false) : ""} onClick={() => clickEvent(3)} style={{fill: "#bf7b00"}} className="cls-2" d="M207.05,10a10,10,0,0,1,8.67,5l62.35,108a10.07,10.07,0,0,1,0,10L215.72,241a10,10,0,0,1-8.67,5H82.36a10,10,0,0,1-8.67-5L11.34,133a10.07,10.07,0,0,1,0-10L73.69,15a10,10,0,0,1,8.67-5H207.05m0-10H82.36A20,20,0,0,0,65,10L2.68,118a20.05,20.05,0,0,0,0,20L65,246a20,20,0,0,0,17.33,10H207.05a20,20,0,0,0,17.33-10l62.35-108a20.05,20.05,0,0,0,0-20L224.38,10A20,20,0,0,0,207.05,0Z"/></g></g></svg>
        </div>
        <div style={{flex: 1}}>
          <div id="startButton" onClick={startGame} style={{width: 400, height: 100, backgroundColor: "#52456d", borderRadius: 50, borderWidth: 5, borderColor: "#3a304f", borderStyle: "solid", verticalAlign: "middle", display: "table-cell"}}>
            <h2 style={{margin: 0}}>Start Game</h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
