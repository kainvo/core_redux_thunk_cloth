import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../redux/actions/productAction';

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log('id', id);
  const { product } = useSelector(state => state.product)
  console.log('product in product detail component', product);
  console.log(Object.keys(product));

  useEffect(() => {
    if (id && id !== '') {
      dispatch(fetchProduct(id))
    }

  }, [id])
  
  return Object.keys(product).length === 0 ? (<div>Loading...</div>) : (
    <div style={{
      display: 'flex',
      height: '100vh',      
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img style={{
          width: '300px',
          height: '300px'
        }} src={product?.image} alt="" />
      </div>
      <div style={{
        flex: 1,
        borderLeft: '1px solid black',
        paddingLeft: 20        
      }}>
        <h1>{product?.title}</h1>
        <p>{product?.price}</p>
        <p>{product?.description}</p>
      </div>
    </div>
  )
}

export default ProductDetailPage;