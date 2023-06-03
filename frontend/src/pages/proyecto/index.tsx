
import Container from '@mui/material/Container';
import CrearUsuario from '../../components/molecules/Usuarios/CrearUsuario/CrearUsuario';
import ListarUsuario from '../../components/molecules/Usuarios/ListarUsuario/ListarUsuario';
import { useState } from 'react';
import EliminarUsuario from '../../components/molecules/Usuarios/EliminarUsuario/EliminarUsuario';
import ActualizarUsuario from '../../components/molecules/Usuarios/ActualizarUsuario/ActualizarUsuario';
import { RootState } from 'src/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../lib/slice/counter.Slice';
import { useNavigate } from 'react-router-dom';
import ListarProyecto from '../..//components/molecules/proyectos/ListarProyecto';

export default function Proyecto(){

 
  const [load, setLoad] = useState(false);
  const [dataEliminar, setDataEliminar] = useState('')
  const [dataModificar, setDataModificar] = useState('')


 
  return (

    <>
     
        
     
      <Container maxWidth="lg" sx={{ mt: 5 }} >
        
        <ListarProyecto load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
        
      </Container>

    </>

    
  );
}