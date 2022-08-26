import React, { useEffect, useState } from 'react'
import axios from 'axios'





const Characters  = () => {

  const [Character, Set_Character] = useState([]);

  const ConsumirApiBackend = async () => {
    const cont = await axios('http://localhost:4000/superName?name=man')
    Set_Character(cont.data)

  }


  useEffect(() =>  {
    ConsumirApiBackend();
  }, [])

  return (
    <div className="row">
      {Character.map((el_item, index) => (
        <div className="col">
          <div className="tarjeta">

            <img src={el_item.imagen.path} alt="No pude cargar la imagen :(, Me perdonas si te fallo te pido perdon" />

          </div>
          <div className="titulo_tarjeta" >
           <h2> {el_item.nombre}  </h2>
            <p className="texto_tarjeta7">  {el_item.id}</p>
            <p className="texto_tarjeta6">  {el_item.descripcion}</p>
            <p className="texto_tarjeta5">  {el_item.modificacion}</p>
            {/* <p className="texto_tarjeta4">  {el_item.comics.lemgth}</p>
            <p className="texto_tarjeta3">  {el_item.series.lemgth}</p>
            <p className="texto_tarjeta2">  {el_item.histias.lemgth}</p>
            <p className="texto_tarjeta1">  {el_item.eventos.lemgth}</p> */}

          </div>

        </div>


) )};
    </div>

)};
export default Characters;


