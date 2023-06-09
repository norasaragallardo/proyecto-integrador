import React, { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

interface CrearProyectoProps {
  setLoad: any;
  load: boolean;
}

const CrearProyecto: FC<CrearProyectoProps> = ({ setLoad, load }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Crear proyecto
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
            descripcion: "",
            url: "",
            imagen: "",
            fecha: "",
          }}
          validationSchema={Yup.object({
            nombre: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
              descripcion: Yup.string()
              .required("Required"),
            url: Yup.string().required("Required"),
            imagen: Yup.string(),
            fecha: Yup.date()
          })}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await axios.post(
              `${import.meta.env.VITE_URL_SERVER}/api/proyectos`,
              values
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
                Crear un nuevo proyecto
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
                  label="url"
                  name="url"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                  error={Boolean(errors.url)}
                  helperText={errors.url}
                />

                

                <Field
                  name="file"
                  type="file"
                
                  component={({ field, form }:any) => (
                    <TextField
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
                      inputProps={{ accept: "text/plain" }}
                    />
                  )}
                />
                
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

export default CrearProyecto;
