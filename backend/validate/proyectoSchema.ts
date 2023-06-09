import * as yup from 'yup';

export const proyectoSchema = yup.object().shape({
    nombre: yup.string().required(),
    url: yup.string().required(),
    descripcion: yup.string().required(),
    

})