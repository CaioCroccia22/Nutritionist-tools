// Categorias de IMC:
// Abaixo de 18,5: Baixo peso.
// Entre 18,5 e 24,9: Peso normal.
// Entre 25 e 29,9: Sobrepeso.
// 30 ou mais: Obesidade.

import React, { useEffect, useState } from 'react';


const DashBoard = () => {
    const [Height, setHeight] = React.useState(0);
    const [weight, setWeight] = React.useState(0);
    const [IMC, setIMC] = React.useState(0);
    const [category, setCategory] = React.useState('');



    const calculateIMC = (e) => {
        console.log(Height);
        console.log(weight);
        e.preventDefault();
        const IMC = (weight / (Height * Height)) * 100000;
        console.log(IMC)
        setIMC(IMC);
        if (IMC <= 18.5){
            setCategory('Baixo peso');
        }
        else if (IMC > 18.5 && IMC < 25){
            setCategory('Peso normal');
        }
    }


    return (
        <>
            <h1>Preencha o formulário do Paciente:</h1>
            <form onChange={calculateIMC}>
                <label htmlFor="Height">Digite sua altura:</label>
                <input
                    onChange={e => setHeight(Number(e.target.value))}
                    id="Height"
                    name='Height'
                    type='number'
                    />
                <label htmlFor="weight">Digite seu peso</label>
                <input
                    onChange={e => setWeight(Number(e.target.value))} 
                    type="number" 
                    id="weight" 
                    name="weight" 
                    />
                <button type="submit">Enviar formulário</button>
                <p>{IMC}</p>
                <p>{category}</p>
            </form>
        </>
    )
}

export default DashBoard;