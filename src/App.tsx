import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { FacultyPage } from './pages/FacultyPage';
import { GalleryPage } from './pages/GalleryPage';
import { NoticesPage } from './pages/NoticesPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { useSchoolData } from './context/SchoolDataContext';
import { Phone, Sparkles } from 'lucide-react';

export default function App() {
  const { schoolInfo, isAuthenticated } = useSchoolData();
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState<boolean>(false);
  const [showFloatingBar, setShowFloatingBar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case 'academics':
        return (
          <AcademicsPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case 'facilities':
        return (
          <FacilitiesPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case 'faculty':
        return (
          <FacultyPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case 'notices':
        return (
          <NoticesPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case 'admin':
        return isAuthenticated ? (
          <AdminDashboard onBackToWebsite={() => handleNavigate('home')} />
        ) : (
          <AdminLogin
            onLoginSuccess={() => handleNavigate('admin')}
            onBackToWebsite={() => handleNavigate('home')}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
    }
  };

  const isAdminView = currentPage === 'admin';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer (hidden on full-screen admin dashboard to prevent clutter, but shown on login screen) */}
      {(!isAdminView || !isAuthenticated) && (
        <Footer
          onNavigate={handleNavigate}
          onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        />
      )}

      {/* Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      {/* Mobile Floating Bottom Action Bar (hidden on admin) */}
      {!isAdminView && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 flex items-center justify-between gap-3 shadow-lg">
          <a
            href={`tel:${schoolInfo.phones[0]}`}
            className="flex-1 py-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-300"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Call School</span>
          </a>

          <button
            onClick={() => setIsAdmissionModalOpen(true)}
            className="flex-1 py-2 rounded-lg bg-blue-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs active:bg-blue-900"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Admission Enquiry</span>
          </button>
        </div>
      )}

      {/* Desktop Floating Admission Button (Visible after scrolling, hidden on admin) */}
      {!isAdminView && showFloatingBar && (
        <div className="hidden sm:block fixed bottom-6 right-6 z-30">
          <button
            onClick={() => setIsAdmissionModalOpen(true)}
            className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-103 transition-all border border-blue-400/30"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
            <span>Admission Enquiry 2025–26</span>
          </button>
        </div>
      )}
    </div>
  );
}
