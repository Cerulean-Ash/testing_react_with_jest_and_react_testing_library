import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleClick = () => {
    setButtonColor(newButtonColor);
  };

  const handleChange = () => {
    setDisabled(!disabled);
  };

  return (
    <div className='App'>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={handleClick}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        onChange={handleChange}
        defaultChecked={disabled}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
