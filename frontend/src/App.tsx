import ResponsiveAppBar from "./components/molecules/ResponsiveAppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Usuario from "./pages/usuario";

import Login from "./pages/auth/login";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./lib/store";
import { useEffect } from "react";
import { fetchValidateToken } from "./lib/slice/authSlice";

import { AppBar } from "@mui/material";
import Proyectos from "./components/molecules/proyectos/ListarProyecto";
import Proyectoss from "./pages/Proyectos";
import Inicio from './pages/Inicio';
import Acercademi from "./pages/Acercademi";


function App() {
  const user: any = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const actualUrl = window.location.href;
  const ruta = actualUrl.split("/").indexOf("login");

  useEffect(() => {
    const fetchData = async () => {
      // const token = Cookies.get('token');
      // if(token){
      const response = await dispatch(fetchValidateToken());
      // }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        {!user && (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
        {!user || (ruta && <ResponsiveAppBar />)}
        {!user && (
        
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectoss />} />
            <Route path="/acerca de mi" element={<Acercademi />} />
          </Routes>
        )}
        
        {user && (
          <Routes>
            <Route path="/" element={<Usuario />} />
            <Route path="/usuarios" element={<Usuario />} />
            <Route
              path="/proyectos"
              element={
                <Proyectos
                  load={false}
                  setDataEliminar={undefined}
                  setDataModificar={undefined}
                />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Inicio from './pages/Inicio';
// import Proyectos from './pages/Proyectos';
// import Acercademi from './pages/Acercademi';
// import ResponsiveAppBarr from './components/organisms/ResponsiveAppBarr';
// import Footer from './components/organisms/Footer';
// import Usuario from './pages/usuario/index';
// import { Login } from '@mui/icons-material';

// function App() {

//   return (
     
// <Router>
    
//       <div className="App">    
//       {<ResponsiveAppBarr/> } 
//         <Routes>
//           <Route path='/' element={<Inicio/>} />  
//           <Route path='/inicio' element={<Inicio/>} />
//           <Route path='/proyectos' element={<Proyectos/>} />
//           <Route path='/acerca de mi' element={<Acercademi/>} />    

          
             
//         </Routes>  
           
//         <Footer/>
        
//       </div>
// </Router>

           

   
//   )
// }

// export default App
