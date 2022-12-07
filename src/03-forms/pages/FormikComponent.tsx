import { Field, Form, ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'



export const FormikComponent = () => {


  return (
    <div>
        <h1>Formik Component</h1>

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
                        <label htmlFor="firtsName">Firts Name</label>
                        <Field 
                            type="text" 
                           name='firtsName'
                        />
                        <ErrorMessage name='firtsName' component="span"/>
                        <label htmlFor="lastName">Last Name</label>
                        <Field 
                            type="text" 
                            name='lastName'
                        />
                        <ErrorMessage name='lastName' component="span"/>
                        <label htmlFor="email">Email Address</label>
                        <Field 
                            type="email" 
                            name='email'
                        />
                        <ErrorMessage name='email' component="span"/>
                        <label>Job Type</label>
                        <Field 
                            as="select" 
                            name="jobType"
                        >
                            <option value="">Select</option>
                            <option value="developer">Developer</option>
                            <option value="marketing">Marketing</option>
                            <option value="designer">Designer</option>
                        </Field>
                        <ErrorMessage name='jobType' component="span"/>
                        <label>
                            <Field 
                                type="checkbox" 
                                name='terms'
                            />

                            Terms and Conditions
                        </label>
                       
                        <ErrorMessage name='terms' component="span"/>
                        <button type="submit">Guardar</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
//8.47