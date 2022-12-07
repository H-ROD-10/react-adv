import {  Form,  Formik} from 'formik'
import * as Yup from 'yup'
import { CustomCheckbox, CustomSelect, TextInput } from '../components'

import '../styles/styles.css'



export const FormikAbtrac = () => {


  return (
    <div>
        <h1>Formik Abstrac</h1>

        <Formik 
            initialValues={{
                firtsName:'',
                lastName:'',
                email:'',
                terms: false,
                jobType: ''
            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    firtsName: Yup.string()
                                .max(15, 'Maximo 15 caracteres')
                                .required('Requerido'),
                    lastName: Yup.string()
                                .max (15, 'Maximo 15 caracteres')
                                .required('Requerido'),
                    email: Yup.string()
                            .email('Debe ser un email valido')
                            .required('Requerido'),
                    terms: Yup.boolean()
                              .oneOf([true], 'Debe aceptar las condiciones para continuar'),
                    jobType: Yup.string()
                                .required('Requerido')
                                .notOneOf(['developer'], 'No puedes elegir Developer')
                })
            }
        >
            {
                (fomik) => (
                    <Form>
                        <TextInput label={'Firts Name'} name={'firtsName'} placeholder='Firts Name'/>
                        <TextInput label={'Last Name'} name={'lastName'} />
                        <TextInput label={'Email'} name={'email'} type={'email'}/>

                        <CustomSelect 
                            as="select" 
                            name="jobType"
                            label='Job Type'
                        >
                            <option value="">Select Options</option>
                            <option value="developer">Developer</option>
                            <option value="marketing">Marketing</option>
                            <option value="designer">Designer</option>
                        </CustomSelect>

                        <CustomCheckbox label={'Terms And Conditions'} name={'terms'}/>

                        <button type="submit">Guardar</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
//8.47