import React from 'react';
import { 
  BookOpen, 
  Target, 
  Compass, 
  Award, 
  Heart, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  School, 
  GraduationCap,
  Calendar,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageId } from '../components/Navbar';
import { SchoolLogo } from '../components/SchoolLogo';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-600/50 text-xs font-semibold text-amber-300 mb-3">
              <School className="w-3.5 h-3.5" />
              <span>School Code: {SCHOOL_INFO.schoolCode} • Estd. {SCHOOL_INFO.established}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 uppercase">
              About {SCHOOL_INFO.name}
            </h1>
            <p className="text-amber-300 font-semibold text-sm mb-3">
              Motto: "{SCHOOL_INFO.motto}" • Sehada, Azamgarh, Uttar Pradesh
            </p>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Founded with the noble mission to impart quality, affordable, and value-based disciplined education to the youth of Sehada, Azamgarh, and surrounding Purvanchal regions.
            </p>
          </div>

          <div className="shrink-0 bg-white/10 p-3 rounded-2xl border border-white/20 backdrop-blur-xs flex flex-col items-center">
            <SchoolLogo size="lg" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mt-2">
              Official Insignia
            </span>
          </div>
        </div>
      </section>

      {/* 1. School Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
              <span>Heritage & Foundation • Code: {SCHOOL_INFO.schoolCode}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              A Beacon of Knowledge & Discipline in Sehada, Azamgarh
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>{SCHOOL_INFO.name}</strong> was founded in 2002 by visionary educationists who perceived the urgent necessity for a premier English medium, value-oriented school in the Sehada region of Azamgarh district, Uttar Pradesh.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Over the last two decades, the institution has flourished into a vibrant learning community with more than 1,500 students from pre-primary through senior grades. Our lush, expansive campus shields children from urban congestion, providing an ideal atmosphere for rigorous academic inquiry, sports training, and character cultivation.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We take pride in maintaining an admirable academic record with 100% board examination pass rates, while cultivating humility, social respect, and civic consciousness embodied by our school motto: <strong>"{SCHOOL_INFO.motto}"</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenAdmissionModal}
                className="px-6 py-2.5 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Admission Enquiry
              </button>
              <button
                onClick={() => onNavigate('facilities')}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-semibold transition-colors"
              >
                View Campus Facilities
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img
                src="/images/school_campus_front.jpg"
                alt="Sri Durga Ji Public School Sehada Campus"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Official School Campus & Ground</h4>
                    <p className="text-xs text-slate-500">Sehada, Bilariaganj Road, Azamgarh (U.P.)</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    Verified Campus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision and Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1">
                Our Future Outlook
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                To emerge as a benchmark institution of educational excellence in Eastern Uttar Pradesh, fostering intellectually curious, ethically grounded, emotionally resilient, and socially responsible citizens who lead positive change in the world.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Inspiring scientific curiosity and critical thinking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fostering empathy, integrity, and patriotism</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ensuring equal opportunity for every student</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 block mb-1">
                Our Daily Purpose
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                To deliver comprehensive learning through experienced mentorship, modern infrastructure, and student-focused methodologies that empower children to excel academically, thrive physically, and blossom culturally.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>State-of-the-art smart classrooms and labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Holistic blend of academics, sports, and fine arts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Close partnership between parents, teachers, and school</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principal's & Manager's Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Principal's Message */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Principal Dr. R. K. Mishra"
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover mx-auto shadow-md border-4 border-blue-50"
              />
              <h3 className="text-lg font-bold text-slate-900 mt-4">
                {SCHOOL_INFO.principalName}
              </h3>
              <p className="text-xs font-semibold text-blue-800">
                Principal & Academic Director
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                M.Sc. (Physics), Ph.D., B.Ed.
              </p>
              <p className="text-[11px] text-slate-500">
                24+ Years in Educational Administration
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">
                Message from the Principal's Desk
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                "Guiding Each Child Towards Their Fullest Potential"
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dear Parents, Guardians, and Students,
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Welcome to <strong>Sri Durga Ji Public School, Sehada</strong>. It gives me immense satisfaction to share that our school has consistently upheld the highest standards in scholarly discipline, values, and student well-being.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In an era dominated by rapid technological change, education must evolve beyond rote textbooks. At our school, we train students to question critically, analyze logically, and cultivate genuine empathy for others. With dedicated teachers, modern smart labs, and rich sports infrastructure, we provide every child the launchpad they deserve.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We invite you to partner with us as we guide your children towards becoming confident, capable, and compassionate citizens of India.
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-800">
                Warm regards,
                <br />
                <span className="text-blue-900 font-bold">{SCHOOL_INFO.principalName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manager's Message */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">
                School Management Perspective
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Message from the Manager / Managing Committee
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-bold text-slate-900 text-sm">{SCHOOL_INFO.managerName}</div>
              <div className="text-xs text-slate-500">Manager & Founder Trustee</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4">
            "Our persistent endeavor has been to ensure that quality schooling is accessible to every family in Azamgarh district. We invest continuously in our teacher training, safe bus fleet, laboratory equipment, and campus security. We thank our parents for their unwavering faith in Sri Durga Ji Public School."
          </p>
        </div>
      </section>

      {/* 4. Basic School Information Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="bg-blue-900 text-white px-6 py-4">
            <h3 className="text-lg font-bold">
              Basic Institutional Information & Profile
            </h3>
            <p className="text-xs text-blue-200">
              Mandatory General Information (Sri Durga Ji Public School, Sehada, Azamgarh)
            </p>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {[
              { field: "Name of the School", value: SCHOOL_INFO.name },
              { field: "Affiliation Status", value: SCHOOL_INFO.affiliation },
              { field: "Affiliation / Registration No.", value: SCHOOL_INFO.affiliationNumber },
              { field: "School Code", value: SCHOOL_INFO.schoolCode },
              { field: "Year of Establishment", value: SCHOOL_INFO.established },
              { field: "Complete Postal Address", value: SCHOOL_INFO.address.fullAddress },
              { field: "District & State", value: "Azamgarh, Uttar Pradesh - 276125" },
              { field: "Medium of Instruction", value: "English (with equal emphasis on Hindi & Sanskrit)" },
              { field: "Type of School", value: "Independent, Co-Educational Day School" },
              { field: "Classes Catered", value: "Pre-Primary (Nursery, LKG, UKG) to Class XII" },
              { field: "Academic Session Period", value: "April to March" },
              { field: "Contact Telephone Numbers", value: SCHOOL_INFO.phones.join(" / ") },
              { field: "Official Email Address", value: SCHOOL_INFO.emails.join(", ") },
              { field: "Name of the Principal", value: SCHOOL_INFO.principalName },
              { field: "Campus Area", value: "5+ Acres of lush green boundary campus" }
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-6 hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-700">{row.field}</span>
                <span className="sm:col-span-2 text-slate-600 mt-1 sm:mt-0 font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
            Foundational Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Our Core Values
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            The principles that guide our everyday teaching, student interactions, and institutional culture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Academic Rigor",
              desc: "Deep conceptual mastery, scientific curiosity, and regular testing to assure board examination excellence.",
              icon: GraduationCap
            },
            {
              title: "Character & Discipline",
              desc: "Instilling truthfulness, respect for elders, time discipline, and strong moral convictions.",
              icon: ShieldCheck
            },
            {
              title: "Inclusive Care",
              desc: "Giving patient, individualized attention to students regardless of their initial learning pace.",
              icon: Heart
            },
            {
              title: "Cultural Pride",
              desc: "Rooted in India's rich timeless heritage, universal brotherhood, and patriotic duty.",
              icon: Award
            }
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
