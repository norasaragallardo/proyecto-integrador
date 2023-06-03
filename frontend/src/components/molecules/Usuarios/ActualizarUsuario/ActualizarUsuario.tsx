
import React, { FC, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import IUsuarios from '../../../../interfaces/IUsuarios';

interface ActualizarUsuarioProps {
  setLoad: any,
  load: boolean,
  dataModificar: number | string,
  setDataModificar:any
}

const ActualizarUsuario: FC<ActualizarUsuarioProps> = ({
  setLoad,
  load,
  dataModificar,
  setDataModificar


}) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({} as IUsuarios);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //setFormData({} as IUsuarios);
    //console.log("ingreso archivo" );
    setDataModificar('');
    
  };

  const [value, setValue] = React.useState('female');
  const handleChangeun = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const consultarPorId = async(idusuario: number | string) => {
    const response = await axios.get(`${import.meta.env.VITE_URL_SERVER}/api/usuarios/${idusuario}`);
    setFormData(response.data.user as IUsuarios);
  }
  

  useEffect(() => {
    if(dataModificar){
      consultarPorId(dataModificar);
    }
    setOpen(dataModificar ? true : false)
  }, [dataModificar])
console.log(formData);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          enableReinitialize
          initialValues={{ 
            nombre: formData.nombre || '', 
            email: formData.email || '',
            foto: formData.foto || '',
            estado: formData.estado,
            file: ''
            
          }}

          
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(50, 'Must be 15 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            estado: Yup.number()
              .required('Required'),
            foto: Yup.string()
              .required('Required'),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            console.log(dataModificar, values);
            const formDatas = new FormData();
            formDatas.append("file", values.file);
            formDatas.append("nombre", values.nombre);
            formDatas.append("email", values.email);
            formDatas.append("estado", values.estado);
            const response = await axios.put(`${import.meta.env.VITE_URL_SERVER}/api/usuarios/${dataModificar}`, formDatas);
            setLoad(!load);
            setOpen(false);
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
              <DialogTitle id="alert-dialog-title">
                Actualizar usuario
              </DialogTitle>
              <DialogContent>
                  
                  <TextField 
                    sx={{
                      mt: 1
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Nombre"
                    name="nombre"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre}
                  />

                  <TextField 
                    sx={{
                      mt: 3
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

                  {/* <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Foto"
                    name="foto"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.foto}
                    error={Boolean(errors.foto)}
                    helperText={errors.foto}
                  />


                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Estado"
                    name="estado"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.estado}
                    error={Boolean(errors.estado)}
                    helperText={errors.estado}
                  /> */}

<Field 

               
name="file"
type="file"

component={({ field, form }:any) => (
  <TextField
  sx={{
    mt: 3,
  }}
  fullWidth
    type="file"
    onChange={(event:any) => {
      form.setFieldValue(
        field.name,
        event.currentTarget.files![0]
      );
    }}
    error={
      form.errors[field.name] && form.touched[field.name]
    }
    helperText={
      form.errors[field.name] &&
      form.touched[field.name] &&
      form.errors[field.name]
    }
    inputProps={{ accept: "plain" }}
  />
)}
/>

{/* <TextField
sx={{
  mt: 3,
}}
fullWidth
id="outlined-basic"
label="Estado"
name="estado"
variant="outlined"
onChange={handleChange}
onBlur={handleBlur}
value={values.estado}
error={Boolean(errors.estado)}
helperText={errors.estado}
/>  */}

<FormControl
sx={{
mt: 3,
}}
fullWidth>

<FormLabel id="demo-controlled-radio-buttons-group">Estado</FormLabel>


<RadioGroup
aria-labelledby="demo-controlled-radio-buttons-group"
name="estado"
value={values.estado}
onChange={handleChange}
>
<FormControlLabel value={1} control={<Radio />} label="Activo" />
<FormControlLabel value={0} control={<Radio />} label="Inactivo" />
</RadioGroup> 
</FormControl>


                  
              
              </DialogContent>
              <DialogActions>
                <Button type="submit" >
                  Actualizar 
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}

export default ActualizarUsuario;