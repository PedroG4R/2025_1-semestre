// src/IconDisplayGame.jsx
import React, { useState } from 'react';
import { IoHeart, IoRocket, IoDiamond, IoHappy, IoLogoReact } from 'react-icons/io5';

// Array of icons to choose from
const icons1 = [
  IoHeart,
  IoDiamond,
  IoHappy,
  IoLogoReact,
  IoRocket
];

const IconDisplayGame = () => {
  const [randomIcon1, setRandomIcon1] = useState(null);

  // Function to generate a random index and set the icon
  const generateRandomIcon1 = () => {
    const randomIndex = Math.floor(Math.random() * icons1.length);
    setRandomIcon1(icons1[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Joguinho das histórinhas</h1>
      
     
      <button 
        onClick={generateRandomIcon1} 
        style={{
          padding: '10px 20px', 
          fontSize: '18px', 
          cursor: 'pointer', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px'
        }}
      >
        Escolha seu tema principal:
      </button>

      <div style={{ marginTop: '20px', fontSize: '50px' }}>
        {randomIcon1 ? randomIcon1  : <p>Escolha seu tema principal:</p>}
      </div>

      <div>
        <if>
            {randomIcon1 == IoRocket}
        </if>


      </div>
    </div>
  );
};

export default IconDisplayGame;
