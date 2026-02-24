import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PalvelutPage from './pages/PalvelutPage';
import ReferenssitPage from './pages/ReferenssitPage';
import YhteystiedotPage from './pages/YhteystiedotPage';
import TilausPage from './pages/TilausPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/palvelut" element={<PalvelutPage />} />
          <Route path="/referenssit" element={<ReferenssitPage />} />
          <Route path="/yhteystiedot" element={<YhteystiedotPage />} />
          <Route path="/tilaus" element={<TilausPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
