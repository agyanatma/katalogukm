import './App.css';
import React from 'react';
import Menu from './component/menu/Menu';
import Home from './component/home/Home';
import Products from './component/products/Products';
import Store from './component/store/Store';
import DetailProduk from './component/detail_produk/Detail_produk';
import WebFont from "webfontloader";
import { QueryClient, QueryClientProvider } from 'react-query';

WebFont.load({google: {families: ["Roboto:300,400,500"]}});
function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <div >
        <div className="app-header">
          <Menu />
        </div>
        <div className="app-content">
          <Home />
        </div>
        <div className="app-content">
          <Products />
        </div>
        <div className="app-content">
          <Store />
        </div>
        <div className="app-content">
          <DetailProduk />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;