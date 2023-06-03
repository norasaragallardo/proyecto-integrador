import * as React from 'react';
import Box from '@mui/material/Box';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import BackHandIcon from '@mui/icons-material/BackHand';
import Container from '@mui/material/Container';
import './organisms.css'



export default function B1() {
    return (
<div className="Seccion2 ">
    <div  className="contenedor-flex fondoblanco" >
      <Box className='H1titulo' margin={10}>Que me hace diferente? </Box>

    </div> 
    <br/>    
    <div  className="contenedor-flex fondoblanco" >
      <div  className="contenedor-flexV">
      <AddReactionIcon fontSize='large'></AddReactionIcon>
        <br /><div className='H3 card'>
            Experiencia de usuario</div>
            <p className='parrafoe'>It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently with desktop publishing 
              </p>
      </div>
      <div  className="contenedor-flexV">
        <AltRouteIcon fontSize='large'></AltRouteIcon>
        <br /><div className='H3 card '>
            Determinado y resolutivo</div>
            <p className='parrafoe'>It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently with desktop publishing 
              </p>
      </div>
      <div  className="contenedor-flexV">
        <BackHandIcon fontSize='large'></BackHandIcon>
        <br /><div className='H3 card'>
            Colaborador y proactivo</div>
            <p className='parrafoe'>It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently with desktop publishing 
              </p>
      </div>
    </div>        
</div> 
    )  };