import './App.css';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop';
import {Routes, Route} from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </>
  );
}

export default App;
