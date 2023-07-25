import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import './App.scss';
import MainPage from "./Pages/MainPage";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ServicesPage from "./Pages/ServicesPage";

function App() {
  return (
   <BrowserRouter>
     <Header />
     <Routes>
       <Route path='/Simple_Route' element={<MainPage />} />
       <Route path='/Simple_Route/about' element={<AboutPage />} />
       <Route path='/Simple_Route/services' element={<ServicesPage />} />
       <Route path='/Simple_Route/portfolio' element={<PortfolioPage />} />
       <Route path='*' element={<ErrorPage />} />
     </Routes>
   </BrowserRouter>
  );}

export default App;