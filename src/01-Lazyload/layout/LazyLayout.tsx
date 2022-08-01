import React from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPage2, LazyPage1 } from '../pages';


export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>

        {/**RUTAS HIJAS AQI */}
        <ul>
            <li>
                <NavLink to='lazy1'>Lazy 1</NavLink>
            </li>
            <li>
                <NavLink to='lazy2'>Lazy 2</NavLink>
            </li>
        </ul>

        <Routes>
            <Route path="lazy1" element={<LazyPage1/>}/>
            <Route path="lazy2" element={<LazyPage2/>}/>
            <Route path="*" element={<Navigate to='lazy1' replace/>}/>
            {/**<Route path="*" element={<div>Not Found</div>}/>*/}
        </Routes>
    </div>
  )
}
export default LazyLayout;
