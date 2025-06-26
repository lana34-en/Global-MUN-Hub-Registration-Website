import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Support from './pages/Support';
import JoinUs from './pages/JoinUs';
import { MunProvider } from './context/MunContext';
import { Toaster } from 'sonner';
export function App() {
  return <Router>
      <MunProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/support" element={<Support />} />
              <Route path="/join-us" element={<JoinUs />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </MunProvider>
    </Router>;
}