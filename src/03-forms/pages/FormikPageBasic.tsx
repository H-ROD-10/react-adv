import { useFormik, FormikErrors } from 'formik'
import React from 'react'
import '../styles/styles.css'

interface FormValues {
    firtsName: string;
    lastName: string;
    email: string;
}

export const FormikPageBasic = () => {


    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if(!values.firtsName){
            errors.firtsName = 'Require'
        } else if(values.firtsName.length > 15){
            errors.firtsName = 'Must be 15 characters or less'
        }

        if(!values.lastName){
            errors.lastName = 'Require'
        } else if(values.lastName.length > 15){
            errors.lastName = 'Must be 15 characters or less'
        }

        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

        return errors
    }

    const formik = useFormik({
        initialValues:{
            firtsName:'',
            lastName:'',
            email:''
        },
        onSubmit: (values) =>{
            console.log(values)
        },
        validate: validate
    })
  return (
    <div>
        <h1>Formik Basic Tutorial</h1>

        <form noValidate onSubmit={formik.handleSubmit}>
            <label htmlFor="firtsName">Firts Name</label>
            <input 
                type="text" 
                name="firtsName" 
                onChange={formik.handleChange}
                value={formik.values.firtsName}
                onBlur={formik.handleBlur}
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
