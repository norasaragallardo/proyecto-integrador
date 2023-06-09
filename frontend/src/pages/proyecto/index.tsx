
// import Container from '@mui/material/Container';
// import CrearUsuario from '../../components/molecules/Usuarios/CrearUsuario/CrearUsuario';
// import ListarUsuario from '../../components/molecules/Usuarios/ListarUsuario/ListarUsuario';
// import { useState } from 'react';
// import EliminarUsuario from '../../components/molecules/Usuarios/EliminarUsuario/EliminarUsuario';
// import ActualizarUsuario from '../../components/molecules/Usuarios/ActualizarUsuario/ActualizarUsuario';
// import { RootState } from 'src/lib/store';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../../lib/slice/counter.Slice';
// import { useNavigate } from 'react-router-dom';
// import ListarProyecto from '../..//components/molecules/proyectos/ListarProyecto';

// export default function Proyecto(){

 
//   const [load, setLoad] = useState(false);
//   const [dataEliminar, setDataEliminar] = useState('')
//   const [dataModificar, setDataModificar] = useState('')


 
//   return (

//     <>
     
        
     
//       <Container maxWidth="lg" sx={{ mt: 5 }} >
        
//         <ListarProyecto load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
        
//       </Container>

//     </>

    
//   );
// }

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
import CrearProyecto from '../../components/molecules/proyectos/CrearProyecto';
import ListarProyecto from '../../components/molecules/proyectos/ListarProyecto';

export default function Proyecto() {

  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()
  
  
  const [dataEliminar, setDataEliminar] = useState('')
  const [dataModificar, setDataModificar] = useState('')
  const user: any = useSelector((state: RootState) => state.auth.user);
  const loading: any = useSelector((state: RootState) => state.auth.loading);

  // const [contador, setContador] = useState(0)


  return (

    <>
 
      <Container maxWidth="lg" sx={{ mt: 5 }} >
        <CrearProyecto setLoad={undefined} load={false} />
        <ListarProyecto load={false} setDataEliminar={undefined} setDataModificar={undefined}  />
      </Container>

    </>

    
  );
}