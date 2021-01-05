import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';


const FormHook = () => {

    const { register, errors, handleSubmit } = useForm();

    const onsubmit = (data, e) => {
        console.log(data);
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
                />
                <span className="text-danger text-small d-block mb-2">{errors?.titulo?.message}</span>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </Fragment>
    );
}

export default FormHook;