

import Header from '../components/organisms/Header';
import Habilidades from '../components/organisms/Habilidades';
import ProyectosSlider from '../components/organisms/ProyectosSlider';
import AboutMe from '../components/organisms/AboutMe';
import ExperienciaLaboral from '../components/organisms/ExperienciaLaboral';



function Inicio() {

    return (
      <div>
      
           <Header/>
          <Habilidades/>
          <ProyectosSlider/>
          <AboutMe/>
          <ExperienciaLaboral/>
          
  
      </div>
    )
  }
  
  export default Inicio