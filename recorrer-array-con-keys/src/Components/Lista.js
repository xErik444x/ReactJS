import React, { useState } from 'react';

import 'bootswatch/dist/superhero/bootstrap.min.css';

//sfc crea un stateless
const Lista = () => {

    const [arrayNumero, setarrayNumero] = useState([1]);
    const [numero, setNumero] = useState(arrayNumero.length + 1);

    const agregarElemento = () => {
        setNumero(numero + 1);

        console.log("click");
        // ... Sirven para unir o concatenar arrays (se llama propagacion)
        setarrayNumero([
            ...arrayNumero,
            numero
        ])
        // setarrayNumero([
        //     ...arrayNumero,
        //     arrayNumero.length + 1
        // ])

    }
    return (
        <div className="d-flex justify-content-center text-center">
            <div>
                <h1>JSX Uso de arrays y constantes</h1>
                <h2>Lista</h2>
                <button type="button" className="btn btn-primary" onClick={agregarElemento}>Agregar</button>
                {   //el index hay que pasarlo como atributo para que funcione
                    arrayNumero.map((item, index) => <p key={index}>Key: <b>{index} </b> - Item: <b>{item}</b></p>)
                }
            </div>

        </div >
    );
}

export default Lista;