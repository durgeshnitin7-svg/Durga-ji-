import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Search, 
  Mail, 
  Briefcase,
  Sparkles
} from 'lucide-react';
import { FacultyMember } from '../data/schoolData';
import { useSchoolData } from '../context/SchoolDataContext';
import { PageId } from '../components/Navbar';

interface FacultyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  const { faculty, schoolInfo } = useSchoolData();
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departments = [
    'All',
    'Administration',
    'Science',
    'Mathematics',
    'Languages',
    'Humanities',
    'Primary',
    'Sports & Arts'
  ];

  const filteredFaculty = faculty.filter((member) => {
    const matchesDept = selectedDept === 'All' || member.department === selectedDept;
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-600/50 text-xs font-semibold text-amber-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Dedicated Mentors & Educators</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Our Faculty & Teaching Staff
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Meet the experienced, empathetic, and highly qualified teachers who guide, inspire, and nurture our students at Sri Durga Ji Public School, Sehada, Azamgarh.
          </p>
        </div>
      </section>

      {/* Leadership Spotlight Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-800">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Principal Dr. R. K. Mishra"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-amber-400 shrink-0 shadow-lg"
            />
            <div className="space-y-2 text-center md:text-left flex-1">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider inline-block">
                Academic Leadership
              </span>
              <h2 className="text-2xl font-bold text-white">
                {schoolInfo.principalName}
              </h2>
              <p className="text-amber-300 text-sm font-semibold">
                Principal & Academic Director • M.Sc. (Physics), Ph.D., B.Ed.
              </p>
              <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
                With more than two decades of administrative excellence and deep pedagogical expertise, Dr. Mishra orchestrates our academic frameworks to ensure both board examination mastery and sound moral conditioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Department Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedDept === dept
                      ? 'bg-blue-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search teacher or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No faculty members found</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting your search query or department filter.</p>
            <button
              onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-1.5 rounded-lg bg-blue-800 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col group"
              >
                {/* Photo */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-blue-900/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-800 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 mt-0.5">
                      {member.designation}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate"><strong>Subject:</strong> {member.subject}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate" title={member.qualification}>
                        <strong>Qual:</strong> {member.qualification}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Faculty Recruitment Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Are You a Passionate Educator?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              We continually seek qualified PGT, TGT, PRT, and Activity Teachers who cherish the pursuit of teaching. Forward your updated CV to our administrative email.
            </p>
          </div>
          <a
            href={`mailto:${schoolInfo.emails[0]}?subject=Faculty%20Application%20-%20Sri%20Durga%20Ji%20Public%20School`}
            className="px-5 py-2.5 rounded-lg bg-blue-800 hover:bg-blue-900 text-white text-xs font-semibold shrink-0 transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Send CV to Careers Desk</span>
          </a>
        </div>
      </section>
    </div>
  );
};
