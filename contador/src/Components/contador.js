import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contador = () => {
    const [count, setCount] = useState(0);
    return (

        <div className="d-flex bg-dark text-white align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div>
                <h1 className="center">Contador</h1>
                <p className="text-center p-2" style={{ fontSize: "40px" }}>{count}</p>

                <button onClick={() => setCount(count + 1)} class="btn btn-info btn-block" >+</button>
                <button onClick={() => (count > 0) ? setCount(count - 1) : ""} type="button" class="btn btn-danger btn-block">-</button>
            </div>
        </div>

    );
}

export default Contador;