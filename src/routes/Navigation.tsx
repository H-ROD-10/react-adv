
import { BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import { FormikAbtrac } from '../03-forms/pages/FormikAbtrac'
import { FormikComponent } from '../03-forms/pages/FormikComponent'
import { FormikPageBasic } from '../03-forms/pages/FormikPageBasic'
import { FormikYupPage } from '../03-forms/pages/FormikPageYup'
import { RegisterPage } from '../03-forms/pages/REgisterPage'


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
           <nav>
            <h1>REACT</h1>
           
            <ul>
                <li>
                    <NavLink to='/register' className={({isActive}) => isActive ? 'nav-active': '' }>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive}) => isActive ? 'nav-active': '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to='/users' className={({isActive}) => isActive ? 'nav-active': '' }>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/formik' className={({isActive}) => isActive ? 'nav-active': '' }>Formik Basic</NavLink>
                </li>
                <li>
                    <NavLink to='/yup' className={({isActive}) => isActive ? 'nav-active': '' }>Formik Yup</NavLink>
                </li>
                <li>
                    <NavLink to='/formik-component' className={({isActive}) => isActive ? 'nav-active': '' }>Formik Component</NavLink>
                </li>
                <li>
                    <NavLink to='/formik-abstrac' className={({isActive}) => isActive ? 'nav-active': '' }>Formik Abstrac</NavLink>
                </li>
            </ul>
           </nav>
           <Routes>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/about' element={<h1>About</h1>}/>
            <Route path='/users' element={<h1>Users</h1>}/>
            <Route path='/formik' element={<FormikPageBasic/>}/>
            <Route path='/yup' element={<FormikYupPage/>}/>
            <Route path='/formik-component' element={<FormikComponent/>}/>
            <Route path='/formik-abstrac' element={<FormikAbtrac/>}/>
            <Route path='/*' element={<Navigate to='/register' replace/>}/>
           </Routes>
        </div>
    </BrowserRouter>
  )
}
