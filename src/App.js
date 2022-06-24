import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home.components';
import Navigation from './components/routes/navigation/navigation.components';
import SignIn from './components/routes/sign-in/sign-in.components';

const Shop =()=>{
  return(
    <h1>I am a Shop</h1>
  )
}

const App = ()=>{
  return(

    // Routing JSX
    <Routes>
      <Route path ='/' element ={<Navigation />}>
      <Route index element = {<Home />} />
      <Route path ='shop' element ={<Shop/>} />
      <Route path = 'sign-in' element ={<SignIn />} />
      </Route>
    
    </Routes>
  )
}

export default App;
