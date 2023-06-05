import * as React from 'react';

import D1 from '../components/organisms/HeaderProyectos';
import D2 from '../components/organisms/ListProyectos';
import B5 from '../components/organisms/ExperienciaLaboral';
import B6 from '../components/organisms/Footer';
import AboutMe from '../components/organisms/AboutMe';
import ExperienciaLaboral from '../components/organisms/ExperienciaLaboral';
import Footer from '../components/organisms/Footer';
import HeaderProyectos from '../components/organisms/HeaderProyectos';
import ListProyectos from '../components/organisms/ListProyectos';

function Proyectos() {

    return (
      <div>
         
          
          <HeaderProyectos/>
          <ListProyectos/>
          <ExperienciaLaboral/>
        
      </div>
    )
  }
  
  export default Proyectos