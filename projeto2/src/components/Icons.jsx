import React, { useState } from 'react';
import { BsDice6Fill, BsDice5Fill, BsDice4Fill, BsDice3Fill, BsDice2Fill, BsDice1Fill} from "react-icons/bs";
import SlotMachine from './SlotMachine';
const sides = [
    BsDice6Fill,
    BsDice5Fill,
    BsDice4Fill,
    BsDice3Fill,
    BsDice2Fill,
    BsDice1Fill
];



const RandomDice = () => {
    const [diceSide, setDiceSide] = useState(null);



    const generateDiceSide = () => {
        const randomIndex1 = Math.floor(Math.random() * sides.length);
        setDiceSide(sides[randomIndex1])
    }

  
    return (
        <div style={{ textAlign: "center", padding: "5px"}}>
            <h1>Hakari Bet</h1>

            <button
                onClick={generateDiceSide}
                style={{
                    padding: '10px 20px', 
                    fontSize: '90px', 
                    cursor: 'pointer', 
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px'
                }}
            >
                Role O Dado
            </button>

            <div style={{ marginTop: '20px', fontSize:'150px'}}>
                {diceSide ? diceSide : <p></p>}
            </div>
            <div>
            <button

            onClick={SlotMachine}style={{
             padding: '10px 20px', 
              fontSize: '90px', 
               cursor: 'pointer', 
               backgroundColor: '#4CAF50', 
               color: 'white', 
               border: 'none', 
              borderRadius: '5px'
             }}
            >
          Caça-niquel

            </button>

            </div>


        
        </div>
    );
};

export default RandomDice;