import './App.css';
import Menu from './component/menu/Menu';
import Home from './component/home/Home';
import Products from './component/products/Products';
import Store from './component/store/Store';
import WebFont from "webfontloader";

WebFont.load({google: {families: ["Roboto:300,400,500"]}});
function App() {
  return (
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
    </div>
  );
 }
 
 export default App;