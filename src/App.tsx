import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageDetails } from './pages/page-components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PageDesign from './pageDesign/PageDesign';
import AllMeetupsPage from './pages/test';

function App(props:any) {
  return (
    <PageDetails>
      <Routes>
        <Route path="/" element={<PageDesign classes={props} />}>
        </Route>
      </Routes>
    </PageDetails>
  );
}

export default App;
