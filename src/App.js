import React from 'react';
import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/profile';


function App() {

  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ProfilePage />} />
          </Routes>
        </Layout>
    </BrowserRouter>
    
    
  )
}

export default App;
