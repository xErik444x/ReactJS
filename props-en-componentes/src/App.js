import React from 'react';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

const App = () => {

  const sujeto = [{
    nombre: "Erik",
    imgUrl: "https://via.placeholder.com/64",
    comentario: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin."
  },
  {
    nombre: "Juancarloh",
    imgUrl: "https://via.placeholder.com/64",
    comentario: "un lorem re loco acá"
  }]
  return (
    <div className="App">
      <h1> Componentes y Props</h1>
      <Saludo persona="Jose Alberto" />
      <Saludo persona="Juanito" />
      <Comentario sujeto={sujeto[0]} />
      <Comentario sujeto={sujeto[1]} />
    </div>);
}

export default App;