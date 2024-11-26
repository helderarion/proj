import React from "react";
import styles from "./App.module.css"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import firebaseConfig from "./firebase";
import {initializeApp} from "firebase/app"
import HomePage from "./pages/home.page";
import LoginPage from "./pages/LoginPage"

export const app = initializeApp(firebaseConfig)
function App(){
  return(
    <Router>
      <Routes>
       <Route path= "/" element= { <HomePage/>} />
       <Route path='/login' element= {<LoginPage/>} />
      </Routes>
    </Router>
    
  )
}

export default App;
