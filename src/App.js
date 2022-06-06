import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" exact element={<ProductListing/>}></Route>
        <Route path="/product/:productId" exact element={<ProductDetails/>}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
