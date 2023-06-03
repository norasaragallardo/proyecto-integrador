import * as yup from 'yup';

export const proyectoSchema = yup.object().shape({
    nombre: yup.string().required(),
    email: yup.string().email().required(),
    url: yup.string().required(),
    

})