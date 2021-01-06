import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {
    const { register, errors, handleSubmit } = useForm();
    const [Entradas, setEntradas] = useState([{
        titulo: "Hola mundo",
        descripcion: "tarjeta default"
    }]);

    const onsubmit = (data, e) => {
        console.log(data);
        setEntradas([
            ...Entradas,
            data
        ])
        //limpiar los campos
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Formularios</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input
                    type="text"
                    placeholder="Ingrese titulo"
                    className="form-control my-2"
                    name="titulo"
                    ref={
                        register({
                            required: { value: true, message: "Titulo obligatorio" },
                            minLength: { value: 2, message: "El titulo deberia de tener 2 o mas caracteres" }
                        })

                    }
                />{ //es como otro if , si existe el error, lo pone
                    errors.titulo &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.titulo?.message}
                    </span>
                }

                <input
                    type="text"
                    placeholder="Ingrese descripcion"
                    className="form-control my-2"
                    name="descripcion"
                    ref={
                        register({
                            required: { value: true, message: "descripcion obligatoria" },
                            minLength: { value: 2, message: "La descripcion deberia de tener 2 o mas caracteres" }
                        })

                    }
                />
                {/*                       se llama optional chaining al uso de "?" como si fuera un "if" */}
                <span className="text-danger text-small d-block mb-2">{errors?.descripcion?.message}</span>
                <button className="btn btn-primary" type="submit">Agregar</button>
            </form>


            <div className="card-deck">
                {
                    Entradas.map((item, key) => {
                        return (<div className="card m-2" key={key} style={{ width: "18rem" }}>
                            <div className="card-body" >
                                <h5 className="card-title">{item.titulo}</h5>
                                <p className="card-text">{item.descripcion}</p>
                            </div>
                        </div>)
                    })
                }
            </div>
        </Fragment>
    );
}

export default EjemploUno;