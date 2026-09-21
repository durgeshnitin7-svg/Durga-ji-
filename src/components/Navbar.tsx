import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  GraduationCap, 
  Calendar,
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export type PageId = 'home' | 'about' | 'academics' | 'facilities' | 'faculty' | 'gallery' | 'notices' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAdmissionModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About School' },
    { id: 'academics', label: 'Academics' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'notices', label: 'Notice Board' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs border-b border-slate-200">
      {/* Top Bar for School Info & Quick Contact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Sehada, Azamgarh, Uttar Pradesh - 276125</span>
            </div>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <div className="flex items-center gap-1.5 text-amber-300 font-medium">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>CBSE Pattern English Medium Co-Educational School</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${SCHOOL_INFO.phones[0]}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SCHOOL_INFO.phones[0]}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${SCHOOL_INFO.emails[0]}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{SCHOOL_INFO.emails[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3.5 text-left group focus:outline-hidden"
          >
            {/* School Crest / Emblem Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-800 text-white flex flex-col items-center justify-center shadow-md border-2 border-amber-400 shrink-0 group-hover:scale-102 transition-transform">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-amber-300 leading-none">
                SDJ
              </span>
              <span className="text-[9px] uppercase tracking-widest text-blue-200 mt-0.5">
                ESTD 2002
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg sm:text-2xl text-blue-950 tracking-tight leading-tight group-hover:text-blue-800 transition-colors">
                  Sri Durga Ji Public School
                </h1>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 flex items-center gap-1">
                <span>Sehada, Azamgarh, Uttar Pradesh</span>
                <span className="inline-block w-1 h-1 rounded-full bg-slate-400 mx-1 hidden sm:inline-block"></span>
                <span className="text-blue-700 hidden sm:inline">Reg. No. CBSE/AFF/2130000</span>
              </p>
            </div>
          </button>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Primary Action: Admission Enquiry Button */}
            <button
              onClick={onOpenAdmissionModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-indigo-950 text-white text-sm font-semibold shadow-sm transition-all hover:shadow-md transform active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Admission Enquiry</span>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <nav className="border-t border-slate-100 bg-slate-50/80 backdrop-blur-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <ul className="flex items-center space-x-1 py-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all ${
                        isActive
                          ? 'bg-blue-800 text-white shadow-xs'
                          : 'text-slate-700 hover:text-blue-900 hover:bg-slate-200/70'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 text-xs text-slate-500 py-1 font-medium">
              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Admissions 2025–26 Open
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl transition-all">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-blue-900 block">Admissions Open 2025-26</span>
                <span className="text-[11px] text-blue-700">Nursery to Class IX & XI</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="text-xs px-3 py-1.5 bg-blue-800 text-white rounded-md font-semibold"
              >
                Apply Now
              </button>
            </div>

            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-800 text-white font-semibold'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-700" />
                <span>{SCHOOL_INFO.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-700" />
                <span>{SCHOOL_INFO.emails[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>Sehada, Azamgarh, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
