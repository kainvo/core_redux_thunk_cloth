import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListPage from './components/ProductList'
import ProductDetailPage from './components/ProductDetail'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductListPage />} />
          <Route path='/:id' element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
