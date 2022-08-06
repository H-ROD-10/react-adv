
import {ProductCart, ProductImage, ProductTitle, ProductButtons} from '../components'


const product = {
  id: '1',
  title: 'Coffee-Mug',
  img: '/coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1> 
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCart product={product}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons/>
          </ProductCart>

          <ProductCart product={product}>
            <ProductCart.Image />
            <ProductCart.Title title='Cafe'/>
            <ProductCart.Buttons/>
          </ProductCart>
          
        </div>
    </div>
  )
}
