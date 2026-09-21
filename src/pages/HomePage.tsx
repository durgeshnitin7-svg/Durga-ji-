import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Bell, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Award, 
  ExternalLink,
  ChevronRight,
  Eye,
  Bus,
  Droplets,
  MonitorCheck,
  FlaskConical,
  X
} from 'lucide-react';
import { 
  SCHOOL_INFO, 
  NOTICES, 
  FACILITIES, 
  GALLERY_ITEMS, 
  SCHOOL_STATS 
} from '../data/schoolData';
import { PageId } from '../components/Navbar';
import { SchoolLogo } from '../components/SchoolLogo';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const previewFacilities = FACILITIES.slice(0, 6);
  const previewNotices = NOTICES.slice(0, 4);
  const previewGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-blue-900 text-white pt-10 pb-20 sm:pb-28 overflow-hidden">
        {/* Subtle background overlay pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-600/50 text-xs font-semibold text-amber-300 shadow-xs flex-wrap justify-center lg:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Admissions Open 2025–26</span>
                <span className="text-blue-400">•</span>
                <span className="text-white">School Code: {SCHOOL_INFO.schoolCode}</span>
                <span className="text-blue-400">•</span>
                <span className="text-amber-200">Motto: {SCHOOL_INFO.motto}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
                  Shri Durga Ji <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-amber-200">Public School</span>
                </h1>
                <p className="text-base sm:text-xl font-medium text-amber-300/95 flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Sehada, Azamgarh, Uttar Pradesh - 276125</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empowering the young minds of Purvanchal with academic rigor, ethical values, modern digital smart classrooms, and individual student care.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenAdmissionModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-base shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-slate-950" />
                  <span>Admission Enquiry 2025–26</span>
                </button>

                <button
                  onClick={() => onNavigate('facilities')}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-colors border border-white/20 inline-flex items-center justify-center gap-2"
                >
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CBSE Pattern Curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Experienced Teachers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Safe GPS Bus Fleet</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Green 5+ Acre Campus</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">
                  <img
                    src="/images/school_campus_front.jpg"
                    alt="Sri Durga Ji Public School Campus"
                    className="w-full h-80 sm:h-96 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Floating Overlay Badge with School Logo */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 text-slate-800 shadow-lg border border-white">
                    <div className="flex items-center gap-3">
                      <SchoolLogo size="sm" className="shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-800 block truncate">
                          Code: {SCHOOL_INFO.schoolCode} • Motto: {SCHOOL_INFO.motto}
                        </span>
                        <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 truncate uppercase">
                          {SCHOOL_INFO.name}
                        </h4>
                        <p className="text-[11px] text-slate-600 truncate">
                          Sehada, Bilariaganj Road, Azamgarh (U.P.)
                        </p>
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-blue-700" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative floating stats pill */}
                <div className="absolute -top-4 -left-4 bg-amber-400 text-slate-950 px-4 py-2 rounded-xl shadow-lg font-bold text-xs flex items-center gap-2 border border-amber-300">
                  <Award className="w-4 h-4 text-slate-950" />
                  <span>100% Board Result Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Notice Flash Bar */}
      <section className="-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-600 text-white text-xs font-bold uppercase tracking-wider shrink-0 animate-pulse">
              <Bell className="w-3.5 h-3.5" />
              <span>Latest Notice</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-800 truncate">
              {NOTICES[0]?.title}
            </p>
          </div>

          <button
            onClick={() => onNavigate('notices')}
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 shrink-0 inline-flex items-center gap-1 hover:underline"
          >
            <span>View All Announcements ({NOTICES.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. Key Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SCHOOL_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-1 group-hover:text-blue-700 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-600 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Short Welcome & About School Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Welcome to Sri Durga Ji Public School</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Building Strong Foundations for a Brighter Tomorrow
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Located in the serene and peaceful surroundings of <strong>Sehada, Azamgarh, Uttar Pradesh</strong>, Sri Durga Ji Public School is committed to providing modern, quality education steeped in Indian cultural values. We believe that every child is gifted with unique potential, and our endeavor is to ignite their curiosity and self-confidence.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our institution provides a disciplined yet affectionate academic environment with smart classrooms, well-equipped science and computer laboratories, a resourceful library, and sprawling sports grounds. We follow child-centric CBSE curriculum pedagogy focused on all-round mental and physical development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>Holistic Pedagogy</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Academics harmonized with sports, cultural arts, and moral discipline.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>Safe & Caring Campus</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Strict security, CCTV oversight, and loving guidance from dedicated teachers.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 rounded-lg bg-blue-800 hover:bg-blue-900 text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  <span>Read Full School History & Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Principal's Quote Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-blue-800 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                  alt="Principal Dr. R. K. Mishra"
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-white text-base">
                    {SCHOOL_INFO.principalName}
                  </h4>
                  <p className="text-xs text-amber-300 font-medium">
                    Principal & Academic Director
                  </p>
                  <p className="text-[11px] text-blue-200">
                    M.Sc., Ph.D., B.Ed.
                  </p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed pt-2 border-t border-blue-800/80 font-serif">
                "At Sri Durga Ji Public School, Sehada, education is not just about memorizing facts; it is about training the mind to think logically and empowering the heart to care deeply for family and nation."
              </blockquote>

              <div className="pt-2 flex items-center justify-between text-xs text-blue-200">
                <span>Principal's Desk</span>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-amber-300 hover:text-white font-medium inline-flex items-center gap-1 underline"
                >
                  Read Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Facilities Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
              Infrastructure & Amenities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Key Campus Facilities
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Providing children with a safe, motivating, and modern environment equipped for 21st-century education.
            </p>
          </div>

          <button
            onClick={() => onNavigate('facilities')}
            className="text-sm font-semibold text-blue-800 hover:text-blue-950 inline-flex items-center gap-1.5 self-start sm:self-auto hover:underline"
          >
            <span>View All Facilities ({FACILITIES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-base leading-tight drop-shadow-xs">
                    {facility.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {facility.shortDesc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {facility.highlights.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('facilities')}
                  className="pt-2 text-xs font-semibold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                >
                  <span>Learn details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Latest Notices & Circulars Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
                Notice Board
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Latest Announcements & Circulars
              </h2>
            </div>

            <button
              onClick={() => onNavigate('notices')}
              className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <span>Visit Official Notice Board</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {previewNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs hover:border-blue-300 transition-colors flex items-start gap-4"
              >
                {/* Date badge */}
                <div className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 flex flex-col items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-blue-700 mb-0.5" />
                  <span className="text-xs font-bold leading-none">{notice.date.split(' ')[0]}</span>
                  <span className="text-[10px] uppercase font-semibold text-slate-500">{notice.date.split(' ')[1]}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                      {notice.category}
                    </span>
                    {notice.isNew && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-rose-100 text-rose-700 animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 hover:text-blue-800 cursor-pointer" onClick={() => onNavigate('notices')}>
                    {notice.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {notice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Photo Gallery Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
              Campus Life & Memories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Photo Gallery Preview
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Snapshots of vibrant classroom sessions, cultural events, science models, and athletic achievements.
            </p>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="text-sm font-semibold text-blue-800 hover:text-blue-950 inline-flex items-center gap-1.5 self-start sm:self-auto hover:underline"
          >
            <span>View Full Gallery ({GALLERY_ITEMS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.imageUrl)}
              className="group relative h-48 sm:h-60 rounded-xl overflow-hidden cursor-pointer shadow-xs border border-slate-200"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600/90 text-white inline-block">
                    {item.category}
                  </span>
                  {item.isOriginal && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400 text-slate-950 inline-flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-2.5 h-2.5 text-slate-950" />
                      <span>Verified Photo</span>
                    </span>
                  )}
                </div>
                <h4 className="font-medium text-xs sm:text-sm text-white line-clamp-1">
                  {item.title}
                </h4>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Quick Contact & Campus Visit Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider">
                Visit Our Campus
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Plan a Visit to Sri Durga Ji Public School, Sehada
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                Experience our disciplined learning atmosphere firsthand. Meet our academic coordinators, inspect the science laboratories, library, and modern classrooms.
              </p>

              <div className="flex flex-wrap gap-6 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Sehada, Azamgarh, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{SCHOOL_INFO.phones[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{SCHOOL_INFO.emails[0]}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenAdmissionModal}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-colors text-center"
              >
                Online Admission Enquiry
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors text-center"
              >
                Contact & Route Map
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Photo Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl p-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[80vh] w-auto mx-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
