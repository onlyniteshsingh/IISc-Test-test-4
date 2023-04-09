import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const App = () => {
  return (
    <Routes>
        <Route path ="/" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>} />
    </Routes>
  );
};

export default App;
