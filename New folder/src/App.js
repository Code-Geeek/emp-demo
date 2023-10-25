import './App.css';
import Home from './Pages/Home';
import Login  from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './Pages/SignupPage.jsx';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
