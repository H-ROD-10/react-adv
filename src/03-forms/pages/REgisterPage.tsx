import { ChangeEvent, FormEvent, useState } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const INITIAL_STATE = {
    name: "",
    email:"",
    password: "",
    confirm: ""
}

export const RegisterPage = () => {


   const { formData, onChange, resetForm, isValidEmail} = useForm(INITIAL_STATE)

   const {email, name, password, confirm} = formData


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

  return (
    <div>
        <h1>Registro</h1>

        <form noValidate onSubmit={onSubmit}>
            <input 
                type="text" 
                value={name}
                placeholder='name'
                onChange={(e) => onChange(e)}
                name= 'name'
                className={`${name.trim().length === 0 && 'has-error'}`}
            />
            {name.trim().length === 0 && <span>Este campo es obligatorio</span>}
            <input 
                type="email" 
                value={email}
                placeholder='email'
                onChange={onChange}
                name= 'email'
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
             {!isValidEmail(email) && <span>Email no valido</span>}
            <input 
                type="password" 
                value={password} 
                placeholder='password'
                onChange={onChange}
                name= 'password'
            />
             {password.trim().length === 0 && <span>Este campo es obligatorio</span>}
             {password.trim().length < 6 &&  password.trim().length > 0 && <span>El password debe tener mas de 6 caracteres</span>}
             <input 
                type="password" 
                value={confirm} 
                placeholder='confirmacion'
                onChange={onChange}
                name= 'confirm'
            />
             {confirm.trim().length === 0 && <span>Este campo es obligatorio</span>}
             {confirm.trim().length === 0 && password != confirm && <span>El password es diferente</span>}

            <button type='submit'>Guardar</button>
            <button type='button' onClick={resetForm}>
                Reset
            </button>
        </form>
    </div>
  )
}
