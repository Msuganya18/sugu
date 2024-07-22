import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login/Login'
import Sign from './Sign/Sign'
const App = () => {
  return (
   <div>
     <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>}> </Route>
      
        
      </Routes>
      </BrowserRouter>
    </div>
   
  
  )
}

export default App