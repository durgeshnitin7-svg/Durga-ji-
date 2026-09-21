import React from 'react';
import { 
  School, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  BookOpen, 
  ExternalLink,
  Heart
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner inside Footer */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-b border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Admissions Open for 2025–26 & 2026–27
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Give Your Child the Gift of Quality Education in Sehada, Azamgarh
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Nurturing intellect, moral values, scientific temper, and leadership qualities in a modern, secure campus environment.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmissionModal}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all hover:shadow-lg transform active:scale-98"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700"
            >
              Contact School
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-300 flex items-center justify-center font-display font-bold text-xl border border-amber-400/40">
                SDJ
              </div>
              <div>
                <h4 className="font-bold text-white text-base leading-tight">
                  Sri Durga Ji Public School
                </h4>
                <p className="text-xs text-amber-400 font-medium">
                  Sehada, Azamgarh (U.P.)
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Established with a steadfast commitment to bringing holistic, high-standard schooling to the children of Sehada, Azamgarh, and nearby rural and semi-urban communities.
            </p>

            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs">
              <div className="text-amber-400 font-semibold mb-1">School Motto:</div>
              <div className="italic text-slate-300 font-serif">"{SCHOOL_INFO.motto}"</div>
              <div className="text-[11px] text-slate-500 mt-1">Education Bestows Humility</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About School & Leadership' },
                { id: 'academics', label: 'Academic Curriculum & Classes' },
                { id: 'facilities', label: 'Campus Facilities' },
                { id: 'faculty', label: 'Teaching Faculty & Staff' },
                { id: 'gallery', label: 'Photo & Event Gallery' },
                { id: 'notices', label: 'Notice Board & Circulars' },
                { id: 'contact', label: 'Contact & Location Map' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-blue-500">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Facilities & Timings */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Key Facilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Interactive Smart Classrooms</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Composite Science & Computer Labs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Extensive Library & Reading Hall</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Vast Sports Grounds & Playground</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>GPS-Tracked School Bus Fleet</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>RO Purified Drinking Water System</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-medium">Administrative Office Hours</div>
                  <div className="text-slate-400 text-[11px]">{SCHOOL_INFO.officeHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              School Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 block font-medium">Campus Address:</span>
                  <span>{SCHOOL_INFO.address.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 block font-medium">Helpline / Office:</span>
                  <a href={`tel:${SCHOOL_INFO.phones[0]}`} className="hover:text-white block">
                    {SCHOOL_INFO.phones[0]}
                  </a>
                  <a href={`tel:${SCHOOL_INFO.phones[1]}`} className="hover:text-white block">
                    {SCHOOL_INFO.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 block font-medium">Email Address:</span>
                  <a href={`mailto:${SCHOOL_INFO.emails[0]}`} className="hover:text-white block truncate max-w-[200px]">
                    {SCHOOL_INFO.emails[0]}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                >
                  <span>View Location on Map & Send Message</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} <strong>Sri Durga Ji Public School</strong>, Sehada, Azamgarh, Uttar Pradesh. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Affiliated to CBSE Pattern | Demo data configured for easy maintenance & customization.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
