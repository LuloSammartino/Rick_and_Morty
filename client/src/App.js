import style from './App.module.css';
import Cards from '../src/components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import { Route, Routes,  useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import MyFavourites from '../src/components/MyFavourites/MyFavourites.jsx';
import useCharacterState from './zustand/charactersState.js';
const EMAIL = 'pepito@gmail.com'
const PASSWORD = 'Lulo_123'
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {  
   
   const characters = useCharacterState((state) => state.characters)
   
   const [access, setAccess] = useState(true)
   
   let location = useLocation().pathname  
   let navigate = useNavigate()  



const login = (userData) => {// comprueba que las credenciales coincidan con el registro
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   } 
}

const logOut = () => {
   setAccess(false)
}


useEffect(() => {
   !access && navigate('/');
}, [access]);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
return (
      <div className={style.app}>
      {location !== '/' && <Nav    logOut={logOut}/>}
      <Routes>
      <Route path='/' element={<Form login={login}></Form>}></Route>      
      <Route path='/about' element={<About></About>}></Route> 
      <Route path='/home' element={<Cards  />}>  </Route>
      <Route path='/detail/:id' element={<Detail characters={characters}/>}></Route>
      <Route path='/favourites' element={<MyFavourites></MyFavourites>}></Route> 
         </Routes>

         
      </div>
   );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default App;
