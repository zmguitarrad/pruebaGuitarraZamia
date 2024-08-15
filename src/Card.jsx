import React from 'react';

function Card({ title,  color }) {
  return (
    <div  style={{ border: `2px solid, white`, padding: '10px', borderRadius: '5px', marginTop: '20px' }} >
      <h2>Hola {title} !</h2>
      <h2>Sabemos que tu color favorito es: </h2>
      <h2 style={{ backgroundColor: ` ${color}`, padding: '10px', borderRadius: '5px', marginTop: '20px', }}> {color}</h2>
    </div>
  );
}

export default Card;