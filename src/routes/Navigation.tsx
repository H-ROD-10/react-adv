import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import { routes } from './routes'





export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading....</span>}>
        <BrowserRouter>
            <div className="main-layout">
            <nav>
                <h1>REACT</h1>
            
                <ul>
                    {routes.map((route, i) => {
                        return (
                            <li key={i}>
                                <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active': '' }>{route.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <Routes>
                {
                    routes.map((route,i)=>{
                        return(
                            <Route path={route.path} element={<route.Component/>} key={i}/>  
                        )
                    })
                }
                <Route path='/*' element={<Navigate to={routes[0].to} replace/>} />
            </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
