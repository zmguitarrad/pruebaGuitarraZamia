import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    // Validaciones
    if (title.trim().length < 3 || title.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit} style={{ border: `2px solid, white`, padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
        <div >
          <label>Nombre:</label> <br />
          <input 
            type="text" 
            value={title} 
            onChange={handleTitleChange} 
            required
            placeholder='Ingresa tu nombre' 
          />
        </div>
        <div>
          <label>Color favorito:</label> <br />
          <input 
            type="text" 
            value={color} 
            onChange={handleColorChange}
            placeholder='Ingresa tu color favorito' 
          />
        </div>
        <button style={{padding: '10px', borderRadius: '5px', marginTop: '20px', backgroundColor: 'blue' }} type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submitted && <Card title={title} color={color} />}
    </div>
  );
}

export default App;