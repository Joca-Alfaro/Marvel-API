import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'




const Characters  = () => {

  const [Character, Set_Character] = useState([]);

  const ConsumirApiBackend = async () => {
    const cont = await axios('http://localhost:4000/superName?name')
    Set_Character(cont.data)

  }


  useEffect(() =>  {
    ConsumirApiBackend();
  }, [])

  return (
    <div id='contendor_total' className="row">
      {Character.map((el_item, index) => (


      <div id='contenedor_card' className="col">
          <div className="div_imagen">

            <img className='imagen_personaje'
              src={el_item.imagen}
            alt="Img Not Found"
             />
          </div>
          <div className="titulo_tarjeta" >
            <h2 className='nombre_personaje'> {el_item.nombre}  </h2>
            <p className="texto_tarjeta7">  {el_item.id}</p>
            <p className="texto_tarjeta6">  {el_item.descripcion}</p>
            <p className="texto_tarjeta5">  {el_item.modificacion}</p>
            {/* <p className="texto_tarjeta4">  {el_item.comics.lemgth}</p>
            <p className="texto_tarjeta3">  {el_item.series.lemgth}</p>
            <p className="texto_tarjeta2">  {el_item.histias.lemgth}</p>
            <p className="texto_tarjeta1">  {el_item.eventos.lemgth}</p> */}

          </div>

          <br />          <br /><br />
  </div>



) )};
    </div>

)};

export default Characters;


