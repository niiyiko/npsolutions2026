import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesktopHomePage from './components/DesktopHomePage';
import MobileHomePage from './components/mobile/MobileHomePage';
import { useIsMobile } from './hooks/useIsMobile';

const ContactPage = lazy(() => import('./components/ContactPage'));

function HomePage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileHomePage />;
  }

  return <DesktopHomePage />;
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
