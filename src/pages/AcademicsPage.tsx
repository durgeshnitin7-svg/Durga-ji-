import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Clock, 
  Award, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';
import { PageId } from '../components/Navbar';

interface AcademicsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  const [expandedProgram, setExpandedProgram] = useState<string>(ACADEMIC_PROGRAMS[0].id);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-600/50 text-xs font-semibold text-amber-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Excellence & Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Academic Programs & Curriculum
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            A comprehensive, progressive CBSE-pattern curriculum designed to inspire curiosity, conceptual clarity, analytical skills, and holistic development.
          </p>
        </div>
      </section>

      {/* 1. Academic Overview Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Affiliation Standard</div>
              <div className="text-base font-bold text-slate-900">CBSE / NCERT Pattern</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Classes Offered</div>
              <div className="text-base font-bold text-slate-900">Nursery to Class XII</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">School Timings</div>
              <div className="text-base font-bold text-slate-900">7:50 AM – 1:50 PM</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Student-Teacher Ratio</div>
              <div className="text-base font-bold text-slate-900">1:30 (Max Focus)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Classes Offered & Stages breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
            Structured Learning Stages
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Classes & Academic Stages Offered
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Explore our curriculum frameworks across all key developmental stages.
          </p>
        </div>

        <div className="space-y-4">
          {ACADEMIC_PROGRAMS.map((program) => {
            const isExpanded = expandedProgram === program.id;
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <div
                  onClick={() => setExpandedProgram(isExpanded ? '' : program.id)}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm shrink-0">
                      {program.grades.split(' ')[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-base sm:text-lg text-slate-900">
                          {program.level}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold">
                          {program.grades}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Applicable Age: {program.ageGroup}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs font-semibold text-blue-700 hidden sm:inline">
                      {isExpanded ? 'Hide Details' : 'View Subjects & Features'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4 text-xs sm:text-sm">
                    <p className="text-slate-600 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Key Features */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 text-blue-900">
                          Key Pedagogical Highlights
                        </h4>
                        <ul className="space-y-1.5 text-slate-600 text-xs">
                          {program.keyFeatures.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Subjects */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 text-blue-900">
                          Curriculum Subjects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.subjects.map((sub, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Curriculum & Pedagogical Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
              Curriculum Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              NCERT Aligned & Experiential Learning
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              At Sri Durga Ji Public School, Sehada, we implement the National Education Policy (NEP) guidelines with an emphasis on experiential learning, foundational literacy and numeracy (FLN), and continuous assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 text-blue-900">
                1. Smart Board Integrated Lessons
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Abstract mathematical equations, biological systems, and historical geographies come alive through 3D animations and interactive classroom displays.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 text-blue-900">
                2. Hands-on Laboratory Experiments
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular weekly practical sessions in Physics, Chemistry, Biology, and Computer Labs ensure students don't simply read science—they do science.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 text-blue-900">
                3. Language & Communication
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strong focus on English speaking and debate alongside deep respect for Hindi and Sanskrit classical heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Assessment & Examination Pattern */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Continuous & Comprehensive Evaluation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We monitor students' academic evolution continuously rather than relying solely on end-of-term exams:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span><strong>Periodic Tests (PT-1, PT-2, PT-3):</strong> Regular chapter-wise evaluations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span><strong>Half-Yearly & Annual Examinations:</strong> Comprehensive term testing.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span><strong>Internal Assessment:</strong> Subject enrichment activities, practical files, notebooks, and classroom engagement.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Academic Calendar & Daily Timings
            </h3>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block">Summer Session (April - Oct):</span>
                <span>7:30 AM – 1:30 PM</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block">Winter Session (Nov - March):</span>
                <span>8:00 AM – 2:00 PM</span>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Timings are subject to district magistrate directives during peak winter or extreme weather.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Admission Enquiry Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl font-bold">Ready to Enroll Your Child?</h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              Admissions are open for the upcoming academic year. Submit an online enquiry or visit our school counter.
            </p>
          </div>
          <button
            onClick={onOpenAdmissionModal}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors shrink-0"
          >
            Apply for Admission Now
          </button>
        </div>
      </section>
    </div>
  );
};
