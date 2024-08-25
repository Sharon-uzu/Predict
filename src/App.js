import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Screens/Home';

function App() {


  return (
    
    <div>

     
    <Routes>
      <Route path='/' element={<Home/>}/>
      
    </Routes>

    </div>

    
  );
}

export default App;
