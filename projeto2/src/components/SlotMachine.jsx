import React, { useState } from 'react';
import {Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, Bs5Circle, Bs6Circle, Bs7Circle}  from "react-icons/bs";

const lucks = [
    Bs1Circle,
    Bs2Circle,
    Bs3Circle,
    Bs4Circle,
    Bs5Circle,
    Bs6Circle,
    Bs7Circle
];


const SlotMachine = () => {
    const [luckNumber, setLuckNumber] = useState(null);
    
    
    
    const generateLuckNumber = () => {
        const randomIndex2 = Math.floor(Math.random() * lucks.length);
        setLuckNumber(lucks[randomIndex2]);
    };

    <button
    onClick={generateLuckNumber}
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
    Caça-niquel
</button>


{luckNumber ? luckNumber : <p></p>}


}

export default SlotMachine