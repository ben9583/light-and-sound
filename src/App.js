import { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const green_unpressed_fill = {
    fill: "#19b400"
  }

  const green_pressed_fill = {
    fill: "#067400"
  }

  const incrementClicks = () => {
    setClicks(clicks + 1);
  }

  const togglePressed = (toggle) => {
    setIsPressed(toggle)
  }

  return (
    <div className="App">
      <header className="App-header">
        <svg width="256" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284.29 251.52"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path onMouseDown={() => togglePressed(true)} onMouseUp={() => togglePressed(false)} onMouseLeave={() => isPressed ? togglePressed(false) : ""} onClick={incrementClicks} style={isPressed ? green_pressed_fill : green_unpressed_fill} class="cls-1" d="M20,246.52A15,15,0,0,1,7,224L129.14,12.51a15,15,0,0,1,26,0L277.25,224a15,15,0,0,1-13,22.52Z"/><path onMouseDown={() => togglePressed(true)} onMouseUp={() => togglePressed(false)} onMouseLeave={() => isPressed ? togglePressed(false) : ""} onClick={incrementClicks} class="cls-2" style={{fill: "#008a03" }} d="M142.15,10a9.85,9.85,0,0,1,8.67,5L272.92,226.5a10,10,0,0,1-8.67,15H20a10,10,0,0,1-8.67-15L133.47,15a9.85,9.85,0,0,1,8.68-5m0-10a19.85,19.85,0,0,0-17.34,10L2.71,221.5a20,20,0,0,0,17.33,30H264.25a20,20,0,0,0,17.33-30L159.48,10A19.83,19.83,0,0,0,142.15,0Z"/></g></g></svg>
        <p>
          Triangle has been pressed {clicks} times
        </p>
      </header>
    </div>
  );
}

export default App;
