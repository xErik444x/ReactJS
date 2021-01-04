import React, { Fragment } from 'react'; //Fragment es para meter todo el jsx junto como si fuera un div pero sin serlo

const Jsx = () => {

    //const saludo = 'Hola JSX';
    const temperatura = 21;
    return (
        <Fragment>
            <h2>Frio o calor?</h2>
            <h4>
                {
                    temperatura > 20 ? "Calor" : "Frio"
                }
            </h4>

        </Fragment>

    );
}

export default Jsx;