import React from 'react';
import { Cart, Footer, Home, Navbar, Product, Products, ProductsOfCategory, WishList } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='w-full overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:category' element={<ProductsOfCategory />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App