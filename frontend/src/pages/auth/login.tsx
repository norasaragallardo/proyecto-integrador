import { Formik } from "formik";
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from "./../../lib/slice/authSlice";
import { AppDispatch, RootState } from "src/lib/store";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css'
import { red } from "@mui/material/colors";

export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user: any = useSelector((state: RootState) => state.auth.user);
  const loading: any = useSelector((state: RootState) => state.auth.loading);

  /*if(loading){
    return <>Cargando</>;
  }

  if(user){
    return navigate('/usuarios');
    return <></>;
  }*/

  console.log('user', user);
  console.log('loading', loading);

  return (
    <div className="login-page">
      

      <div className="title-login"> Bienvenido {user?.nombre}</div> 
      

      <div className = 'box-login'>
        <div className="inputs">
       
           <Formik 
          initialValues={{ 
            email: '',
            contrasenia: '',
          }}
          validationSchema={ Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            contrasenia: Yup.string()
              .min(8, "La contraseña debe tener minimo 8 caracteres")
              .required('Required'),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            const response = await dispatch( fetchLogin(values) );
            
            if(response.payload.usuario){
              return navigate('/usuarios');
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
   
              <TextField  className= 'input'
                sx={{
                  mt: 10
                }}
                fullWidth
                id="outlined-basic"
                label="E-mail"
                name="email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />

              <TextField className= 'input'
                sx={{
                  mt: 5,
                  mb:5
                }}
                type="password"
                fullWidth
                id="outlined-basic"
                label="Contraseña"
                name="contrasenia"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contrasenia}
                error={Boolean(errors.contrasenia)}
                helperText={errors.contrasenia}
              />

              <Button  type="submit"  
              sx={{
                mb:5,
              }}>
                INGRESAR
              </Button>
            </form>
          )}
        </Formik>
        </div>
      </div> 
    </div>
  );

}