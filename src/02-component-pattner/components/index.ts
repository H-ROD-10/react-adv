import { ProductCart as ProductCartHOC } from './ProductCart';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductBottons';
import { ProductCardHocProps } from '../interfaces/interfaces';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductBottons';


export const ProductCart: ProductCardHocProps = Object.assign(ProductCartHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})