
import {ProductCart, ProductImage, ProductTitle, ProductButtons} from '../components'
import '../styles/custom-style.css'


const product = {
  id: '1',
  title: 'Coffee-Mug',
  img: '/coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping Store</h1> 
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCart product={product} className='bg-dark text-white'>
            <ProductImage className='custom-img'/>
            <ProductTitle className='text-bold'/>
            <ProductButtons className='custom-bottons'/>
          </ProductCart>

          <ProductCart product={product} className='bg-dark text-white'>
            <ProductCart.Image className='custom-img' style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>
            <ProductCart.Title title='Cafe' className='text-bold'/>
            <ProductCart.Buttons className='custom-bottons'/>
          </ProductCart>

          <ProductCart product={product} style={{ backgroundColor:'#70D1F8'}}>
            <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>
            <ProductTitle style={{color:'blue', fontWeight: 'bold'}}/> 
            <ProductButtons style={{display: 'flex', justifyContent:'end'}}/>
          </ProductCart>
          
        </div>
    </div>
  )
}
