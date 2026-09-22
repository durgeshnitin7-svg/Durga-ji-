import React, { useState } from 'react';
import { 
  MonitorCheck, 
  BookOpen, 
  FlaskConical, 
  Cpu, 
  Trophy, 
  Bus, 
  Droplets, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  X,
  Phone
} from 'lucide-react';
import { useSchoolData } from '../context/SchoolDataContext';
import { PageId } from '../components/Navbar';

interface FacilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  const { facilities, schoolInfo } = useSchoolData();
  const [selectedFacilityImage, setSelectedFacilityImage] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'MonitorCheck': return <MonitorCheck className="w-6 h-6 text-blue-700" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-blue-700" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-blue-700" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-700" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-blue-700" />;
      case 'Bus': return <Bus className="w-6 h-6 text-blue-700" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-blue-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-700" />;
      default: return <CheckCircle2 className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-600/50 text-xs font-semibold text-amber-300 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>World-Class Campus Amenities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            School Facilities & Infrastructure
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Every corner of Sri Durga Ji Public School, Sehada is intentionally engineered to promote safety, intellectual exploration, physical vitality, and psychological well-being.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div 
                className="relative h-64 overflow-hidden bg-slate-100 cursor-pointer group"
                onClick={() => setSelectedFacilityImage(facility.imageUrl)}
              >
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md">
                  {getIcon(facility.iconName)}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-xl drop-shadow-xs">
                    {facility.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {facility.fullDesc}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 text-blue-900">
                    Highlights & Specifications
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {facility.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Amenities & Safety Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl border border-slate-200 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Additional Campus Essentials & Support
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-2xl">
            Beyond academic classrooms, we ensure round-the-clock comfort and hygiene for every student and staff member.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-sm text-slate-900 mb-1">Uninterrupted Power Backup</h4>
              <p className="text-xs text-slate-600">
                Heavy-duty silent generator sets and solar inverters ensuring continuous power for fans, lights, and smart boards.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-sm text-slate-900 mb-1">Medical Infirmary & First-Aid</h4>
              <p className="text-xs text-slate-600">
                Dedicated first-aid station equipped with emergency stretchers, basic medications, and tie-ups with nearby Azamgarh hospitals.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-sm text-slate-900 mb-1">Separate Clean Washrooms</h4>
              <p className="text-xs text-slate-600">
                Regularly sanitized, separate modern washroom blocks for boys, girls, and kindergarten toddlers with running tap water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Tour CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Want to See Our Campus in Person?</h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              Parents are welcome to take a guided campus tour during visiting hours (1:30 PM – 3:00 PM).
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmissionModal}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors"
            >
              Book Admission Consultation
            </button>
            <a
              href={`tel:${schoolInfo.phones[0]}`}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call School</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedFacilityImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedFacilityImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl p-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedFacilityImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedFacilityImage}
              alt="Facility Preview"
              className="max-h-[80vh] w-auto mx-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
};
