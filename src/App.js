//import logo from './logo.svg';
//import './App.css';
import Loginpage from './Components/Loginpage';
import { Router, Route, Routes } from 'react-router-dom';

//import { Route, Routes } from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import Incredible from './Components/Incredibles';
import Register from './Components/Register';
import Twentyfour from './Components/Twentyfour';
import Landingpage from './Components/Landingpage';
import Titanic from './Components/Titanic';
import Aladdin from './Components/Aladdin';
function App() {
  return (
    <>
    
  <Routes>
    <Route path='/landing' element={<Landingpage/>} />
    <Route path='/login' element={<Loginpage/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path="/mainpage" element={<Mainpage />} />
    <Route path="/twentyfour" element={<Twentyfour />} />
    <Route path="/incredibles" element={<Incredible />}/>
    <Route path="/titanic" element={<Titanic />}/>
    <Route path="/aladdin" element={<Aladdin />}/>
  </Routes>
 </>
  );
}

export default App;
