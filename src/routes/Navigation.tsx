
import { BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import { ShoppingPage } from '../02-component-pattner/pages/ShoppingPage'


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
           <nav>
            <h1>REACT</h1>
           
            <ul>
                <li>
                    <NavLink to='/home' className={({isActive}) => isActive ? 'nav-active': '' }>Shopping Store</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive}) => isActive ? 'nav-active': '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to='/users' className={({isActive}) => isActive ? 'nav-active': '' }>Users</NavLink>
                </li>
            </ul>
           </nav>
           <Routes>
            <Route path='/home' element={<ShoppingPage/>}/>
            <Route path='/about' element={<h1>About</h1>}/>
            <Route path='/users' element={<h1>Users</h1>}/>
            <Route path='/*' element={<Navigate to='/home' replace/>}/>
           </Routes>
        </div>
    </BrowserRouter>
  )
}
