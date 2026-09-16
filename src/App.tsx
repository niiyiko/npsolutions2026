import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useIsMobile } from './hooks/useIsMobile';
const DesktopHomePage = lazy(() => import('./components/DesktopHomePage'));
const MobileHomePage = lazy(() => import('./components/mobile/MobileHomePage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

function HomePage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Suspense fallback={<div style={{ backgroundColor: '#0A0A0A', height: '100vh', width: '100vw' }} />}>
        <MobileHomePage />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div style={{ backgroundColor: '#0A0A0A', height: '100vh', width: '100vw' }} />}>
      <DesktopHomePage />
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={
          <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
            <ContactPage />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;
