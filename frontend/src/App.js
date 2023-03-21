import {Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import AllUser from './components/AllUser';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<AllUser/>} exact/>
        <Route path='/add' element={<AddUser/>} exact/>
        <Route path='/edit/:id' element={<EditUser/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
