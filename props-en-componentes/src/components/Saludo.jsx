import React from 'react';

const Saludo = (props) => {
    console.log(props)
    return ( 
        <h2>Hola! {props.persona}</h2>
     );
}
 
export default Saludo;