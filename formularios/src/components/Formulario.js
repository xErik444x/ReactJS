import React, { Fragment, useState } from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    });
    const handleInputChange = (event) => {
        //se hace uso de las propiedades computadas para poner variables como nombres del objeto datos
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
        console.log(event.target.name)
    }

    //cancela el boton de submit y ejecuta cualquier otra funcion para analizar o enviar los datos
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(`${datos.nombre} ${datos.apellido}`)
    }

    return (
        <Fragment>
            <h1>Formularios</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Ingrese Nombre"
                        className="form-control"
                        name="nombre"
                        onChange={handleInputChange}
                    />

                </div>
                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Ingrese Apellido"
                        className="form-control"
                        name="apellido"
                        onChange={handleInputChange}
                    />

                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>

                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
    );
}

export default Formulario;