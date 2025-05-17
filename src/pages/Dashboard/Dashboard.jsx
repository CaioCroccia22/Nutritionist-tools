// Categorias de IMC:
// Abaixo de 18,5: Baixo peso.
// Entre 18,5 e 24,9: Peso normal.
// Entre 25 e 29,9: Sobrepeso.
// 30 ou mais: Obesidade.

import React, { useEffect, useState } from 'react';
import styles from "./Dashboard.module.css";


const DashBoard = () => {
    const [Height, setHeight] = React.useState(0);
    const [weight, setWeight] = React.useState(0);
    const [IMC, setIMC] = React.useState(0);
    const [category, setCategory] = React.useState('');



    const calculateIMC = (e) => {
        console.log(Height);
        console.log(weight);
        e.preventDefault();
        if (Height != 0 && weight != 0) {
            const IMC = (weight / (Height * Height)) * 100000;
        console.log(IMC)
        setIMC(IMC);
        if (IMC <= 18.5){
            setCategory('Baixo peso');
        }
        else if (IMC > 18.5 && IMC < 24.9){
            setCategory('Peso normal');
        }
        else if(IMC > 25.0 && IMC < 29.9){
            setCategory('Sobrepeso');
        }
        else if(IMC > 30.0){
            setCategory('Obesidade');
            }
        }
    }

    return (
        <>
            <div className={styles.dashboardContent}>
                <h1 className={styles.dashboardTitle}>Preencha o formulário do Paciente:</h1>
                <p className={styles.dashboardText}>Aqui é nosso espaço para realizar o calculo de IMC do paciente</p>
                <form className={styles.dashboardForm} onChange={calculateIMC}>
                    <label className={styles.dashboardText} htmlFor="Height">Digite sua altura:</label>
                    <input
                        className={styles.dashboardInput}
                        onChange={e => setHeight(Number(e.target.value))}
                        id="Height"
                        name='Height'
                        type='number'
                        />
                    <label className={styles.dashboardText} htmlFor="weight">Digite seu peso</label>
                    <input
                        className={styles.dashboardInput}
                        onChange={e => setWeight(Number(e.target.value))} 
                        type="number" 
                        id="weight" 
                        name="weight" 
                        />
                    <p className={styles.dashboardData}>IMC: {IMC} {category}</p>
                </form>
            </div>
        </>
    )
}

export default DashBoard;