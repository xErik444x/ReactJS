import React from 'react';
import { Fragment } from 'react';
import Avatar from './Avatar';

const Comentario = ({sujeto}) => {
    console.log(sujeto)
    return (
    <Fragment>
        <hr />
        <h2>Comentario</h2>
            <div className="media">
            <Avatar imgUrl={sujeto.imgUrl}/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                   {sujeto.comentario}
                </div>
            </div>
        <hr/>
    </Fragment>
     );
}
 
export default Comentario;