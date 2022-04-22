import React from "react";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import 'antd/dist/antd.min.css';
import Write from "../routes/Write";
import Stylesheet from '../routes/Stylesheet.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Write/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
