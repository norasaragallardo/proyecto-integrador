
import './organisms.css'



export default function Habilidades() {
  return (
    <div className="Seccion-habilidades ">
      <div className="contenedor-flex " >
        <div className='H1titulo' >¿ Que me hace diferente? </div>

      </div>
      
      <div className="contenedor-flex" >
        <div className="contenedor-flexV">
          <div> <img src='/src/assets/icons/iconA.PNG' className="icon-habilidades" /></div>

          <div className='H3 card'>
            Diseño atractivo</div>
          <p >It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing
          </p>
        </div>
        <div className="contenedor-flexV">
          <div> <img src='/src/assets/icons/iconB.PNG' className="icon-habilidades" /></div>
         <div className='H3 card '>
            Posicionamiento web</div>
          <p>It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing
          </p>
        </div>
        <div className="contenedor-flexV">
          <div> <img src='/src/assets/icons/iconC.PNG' className="icon-habilidades" /></div>
          <div className='H3 card'>
            DEsarrollo Eficaz</div>
          <p>It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing
          </p>
        </div>
      </div>
    </div>
  )
};