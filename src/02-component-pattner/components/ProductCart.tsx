import { createContext, ReactElement } from 'react';
import { useProductCount } from '../hooks/useProductCount';
import { ProductContextProps, Product } from '../interfaces/interfaces';


import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export interface ProductsCartProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}


export const ProductCart = ({children, product, className, style}: ProductsCartProps) => {
  const {counter, increaseBy} = useProductCount()

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div className={`${styles.productCard} ${className}` } style={style}>
      {children}
      </div>
    </Provider>
  )
}


