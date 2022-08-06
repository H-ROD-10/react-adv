import { createContext, useContext } from 'react';
import { useProductCount } from '../hooks/useProductCount';
import { ProductContextProps, ProductsCartProps } from '../interfaces/interfaces';


import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export const ProductCart = ({children, product}: ProductsCartProps) => {
  const {counter, increaseBy} = useProductCount()

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div className={styles.productCard}>
      {children}
      </div>
    </Provider>
  )
}


