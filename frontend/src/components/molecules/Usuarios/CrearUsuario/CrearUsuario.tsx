import React, { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Radio from '@mui/material/Radio';

interface CrearUsuarioProps {
  setLoad: any;
  load: boolean;
}

const CrearUsuario: FC<CrearUsuarioProps> = ({ setLoad, load }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState('female');
  const handleChangeun = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Crear usuario
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{
            nombre: "",
            email: "",
            contrasenia: "",
            file: "",
            estado: "",
          }}
          validationSchema={Yup.object({
            nombre: Yup.string()
              .max(15, "Must be 15 characters or less") .required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
           // contrasenia: Yup.string().min(8, "La contraseña debe tener minimo 8 caracteres").required("Required"),
            contrasenia: Yup.string()
             .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(20, 'La contraseña no debe superar los 20 caracteres')
             .required('Campo Obligatorio'),
            
            estado: Yup.number().required("Required"),
          })}

          onSubmit={async (values, { setSubmitting }) => {            
            const formData = new FormData();
            formData.append("file", values.file);
            formData.append("nombre", values.nombre);
            formData.append("email", values.email);
            formData.append("contrasenia", values.contrasenia);
            formData.append("estado", values.estado);
            const response = await axios.post(
              `${import.meta.env.VITE_URL_SERVER}/api/usuarios`,
              formData
            );
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
                Crear un nuevo usuario
              </DialogTitle>
              <DialogContent>
                <TextField
                  sx={{
                    mt: 1,
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
                    mt: 3,
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

                <TextField
                  sx={{
                    mt: 3,
                  }}
                  fullWidth
                 type="password"
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
        name="controlled-radio-buttons-group"
        value={values.estado= value}
        onChange={handleChangeun}
      >
        <FormControlLabel value={1} control={<Radio />} label="Activo" />
        <FormControlLabel value={0} control={<Radio />} label="Inactivo" />
      </RadioGroup>
    </FormControl>

              </DialogContent>
              <DialogActions>
                <Button type="submit">Crear</Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default CrearUsuario;
