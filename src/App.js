import React from 'react';
import MainLayout from "./container/MainLayout";
import Home from './container/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
return(
  <BrowserRouter>
  <Routes>
    <Route element={<MainLayout/>}>
      <Route path="/" element={<Home />} />
      
    </Route>
    
  </Routes>
</BrowserRouter>
  );
}

export default App;
