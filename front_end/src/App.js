import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product listing</h1>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h1>Update Product listing</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile listing</h1>} />
          </Route>
         
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;