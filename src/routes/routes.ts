import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-Lazyload/pages/NoLazy';
//import {LazyPage1, LazyPage2, LazyPage3 } from '../01-Lazyload/pages';

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import('../01-Lazyload/layout/LazyLayout'))
const lazy1 = lazy(() => import('../01-Lazyload/pages/LazyPage1'))
const lazy2 = lazy(() => import('../01-Lazyload/pages/LazyPage2'))
const lazy3 = lazy(() => import('../01-Lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    
    {
        to: '/lazylayout/',
        path: '/lazylayout/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: NoLazy,
        name: 'No Lazyload'
    },
]