import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/productAction';

function ProductListPage() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.product)
  console.log("products in component", products);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return products.length === 0 ? (<>Loading...</>) : (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '20px'
    }}>
      {
        products.map((product) => {
          const { id, image, title, price, description} = product;
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid black',
              padding: 10,
              borderRadius: 10,
            }} key={id}>              
              <img style={{
                width: '200px',
                height: '200px'
              }} src={image} alt={product.name} />
              <h1>{title}</h1>              
              <p>{price}</p>
              <p>{description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductListPage