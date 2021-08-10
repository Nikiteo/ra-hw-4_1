import { useState } from 'react';
import './App.css';
import hexToRgb from './utils/hexToRgb';
import validateInput from './utils/validateInput';

export default function App() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(() => e.target.value);
  };

  let result = '';

  const validaton = validateInput(input);

  if (!validaton.result) {
    result = validaton.err;
  } else {
    result = hexToRgb(input).string;
    document.body.style.background = result;
  }


  return (
    <div className="App">
      <input id="hex" type="text" placeholder="hex" autoComplete="off" value={input} onChange={handleInput}/>
      <div className="result">{result}</div>
    </div>
  );
}