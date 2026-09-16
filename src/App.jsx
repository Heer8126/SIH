import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HeaderBanner } from './components/layout/HeaderBanner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Home } from './pages/Home';
import { Repository } from './pages/Repository';
import { ItemDetail } from './pages/ItemDetail';
import { MediaFeed } from './pages/MediaFeed';
import { InteractiveMap } from './pages/InteractiveMap';
import { About } from './pages/About';

import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminUpload } from './pages/admin/AdminUpload';
import { AdminReview } from './pages/admin/AdminReview';

export function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Show Public Header & Navbar only for non-admin routes */}
      {!isAdminRoute && (
        <>
          <HeaderBanner />
          <Navbar />
        </>
      )}

      {/* Main Page Content */}
      <div className="flex-1">
        <Routes>
          {/* Public Portal Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/repository" element={<Repository />} />
          <Route path="/repository/:id" element={<ItemDetail />} />
          <Route path="/media" element={<MediaFeed />} />
          <Route path="/map" element={<InteractiveMap />} />
          <Route path="/about" element={<About />} />

          {/* Admin Portal Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/upload" element={<AdminUpload />} />
          <Route path="/admin/review" element={<AdminReview />} />
        </Routes>
      </div>

      {/* Show Public Footer only for non-admin routes */}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
