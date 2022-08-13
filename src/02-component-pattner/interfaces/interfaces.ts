import { ReactElement } from 'react';
import { ProductsCartProps } from '../components/ProductCart';
import { Props as PropsTitle} from '../components/ProductTitle';
import { Props as PropsImage } from '../components/ProductImage';
import { Props as PropsButtons } from '../components/ProductBottons';




  
export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number)=> void;
    product: Product
  }
  
export interface ProductCardHocProps {
    ({ children, product }: ProductsCartProps): JSX.Element;
    Title: (Props: PropsTitle) => JSX.Element;
    Image: (Props: PropsImage) => JSX.Element;
    Buttons: (Props: PropsButtons) => JSX.Element;
}