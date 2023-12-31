import './App.css';
import Home from './Pages/Home';
import Login  from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './Pages/SignupPage.jsx';
import Update from './Components/Update';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
