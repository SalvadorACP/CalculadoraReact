import './App.css';
import React, { useState } from 'react';

function App() {
  
    
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput("Error");
    }
  };

  return (
    <div className="calculadora">
      <div className="calculadora-input">
        <div>{input}</div>
      </div>
      <div className="botonera">
        <button onClick={() => agregarInput('1')}>1</button>
        <button onClick={() => agregarInput('2')}>2</button>
        <button onClick={() => agregarInput('3')}>3</button>
        <button onClick={() => agregarInput('+')}>+</button>
        <button onClick={() => agregarInput('4')}>4</button>
        <button onClick={() => agregarInput('5')}>5</button>
        <button onClick={() => agregarInput('6')}>6</button>
        <button onClick={() => agregarInput('-')}>-</button>
        <button onClick={() => agregarInput('7')}>7</button>
        <button onClick={() => agregarInput('8')}>8</button>
        <button onClick={() => agregarInput('9')}>9</button>
        <button onClick={() => agregarInput('*')}>*</button>
        <button onClick={() => agregarInput('.')}>.</button>
        <button onClick={() => agregarInput('0')}>0</button>
        <button onClick={() => setInput('')}>C</button>
        <button onClick={() => agregarInput('/')}>/</button>
        <button onClick={calcularResultado}>=</button>
      </div>
    </div>
  );
}

export default App;
