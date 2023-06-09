import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './organisms.css'


export default function ExperienciaLaboral() {
  return (
    <div className='seccion-experiencia'>
      <div className="Seccion contenedor-experiencia fondoceleste" >
        <Box
          component="img"
          sx={{ height: 150 }}
          alt="Proyecto ejemplo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png'
        />
        <div className="contenedor-flexV2 ">
          <p className='parrafo-experiencia'> Below that there’s a section with more customer photos and their quotes. All of the personalities shown have titles such as
            “Founder,” “Business Owner,” and “Co-Founder.” This reveals Quickbooks’ target market of small businesses. </p>
          <Box className='H3'>Apple</Box>
          <Box className='H2'>15/03/2020</Box>
        </div>
      </div>
    </div>
  );
}