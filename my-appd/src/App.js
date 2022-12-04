import './App.css';
import  {useEffect, useState} from 'react';
import Navbar from './components/navbar';
import Routing from './routes';

const App=()=> {
  const [login, setLogin]= useState("")

  useEffect(()=>{
    let userInf= localStorage.getItem('user')
    userInf= JSON.parse(userInf)
    setLogin(userInf)
}, [])  


  return (
    <>
    <div className="App">
      <Navbar/>
      <Routing/>
    </div>
    </>
  );
}

export default App;
