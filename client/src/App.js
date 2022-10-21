import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from './register';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={'/'}>Home</Link> |
        <Link to={'/login'}>Login</Link> |
        <Link to={'/register'}>Register</Link>
      </div>

      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>

      <hr />
    </BrowserRouter>
  );
}

export default App;
