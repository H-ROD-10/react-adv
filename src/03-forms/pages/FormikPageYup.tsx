import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'



export const FormikYupPage = () => {

    const formik = useFormik({
        initialValues:{
            firtsName:'',
            lastName:'',
            email:''
        },
        onSubmit: (values) =>{
            console.log(values)
        },
        validationSchema: Yup.object({
            firtsName: Yup.string()
                          .max(15, 'Maximo 15 caracteres')
                          .required('Requerido'),
            lastName: Yup.string()
                         .max (15, 'Maximo 15 caracteres')
                         .required('Requerido'),
            email: Yup.string()
                      .email('Debe ser un email valido')
                      .required('Requerido')
        })
    })
  return (
    <div>
        <h1>Formik Yup</h1>

        <form noValidate onSubmit={formik.handleSubmit}>
            <label htmlFor="firtsName">Firts Name</label>
            <input 
                type="text" 
                {...formik.getFieldProps('firtsName')}
            />
            {formik.touched.firtsName && formik.errors.firtsName && <span>{formik.errors.firtsName}</span>}
             <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                name="lastName" 
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
            />
             {formik.touched.lastName && formik.errors.lastName && <span>{formik.errors.lastName}</span>}
            <label htmlFor="email">Email Address</label>
            <input 
                type="email" 
                name="email" 
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
             {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
            <button type="submit">Guardar</button>
        </form>
    </div>
  )
}
