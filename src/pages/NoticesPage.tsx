import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Search, 
  FileText, 
  Download, 
  Filter, 
  Sparkles, 
  AlertCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  Share2
} from 'lucide-react';
import { NOTICES, Notice, SCHOOL_INFO } from '../data/schoolData';
import { PageId } from '../components/Navbar';

interface NoticesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const NoticesPage: React.FC<NoticesPageProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedNoticeId, setExpandedNoticeId] = useState<string>(NOTICES[0]?.id || '');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = ['All', 'Admission', 'Academic', 'Examination', 'Event', 'Holiday'];

  const filteredNotices = NOTICES.filter((notice) => {
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch = 
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (notice: Notice) => {
    setDownloadSuccess(notice.attachmentName || `${notice.id}.pdf`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-600/50 text-xs font-semibold text-amber-300 mb-3">
            <Bell className="w-3.5 h-3.5" />
            <span>Official Circulars & Announcements</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            School Notice Board
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Stay informed with verified updates on examination schedules, admissions, holidays, parent-teacher meets, and school circulars.
          </p>
        </div>
      </section>

      {/* Download Alert Toast */}
      {downloadSuccess && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs sm:text-sm flex items-center justify-between shadow-sm animate-in fade-in">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Simulated download triggered for circular: <strong>{downloadSuccess}</strong> (Demo Reference).
              </span>
            </div>
            <button 
              onClick={() => setDownloadSuccess(null)}
              className="text-emerald-900 font-bold hover:underline ml-2"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Filter and Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'All' ? 'All Notices' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search circulars by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredNotices.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <Bell className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No notices found</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting your search query or category filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-1.5 rounded-lg bg-blue-800 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotices.map((notice) => {
              const isExpanded = expandedNoticeId === notice.id;
              return (
                <div
                  key={notice.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-300 transition-all"
                >
                  <div
                    onClick={() => setExpandedNoticeId(isExpanded ? '' : notice.id)}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {/* Date Badge */}
                      <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 flex flex-col items-center justify-center shrink-0">
                        <span className="text-xs font-bold leading-none">{notice.date.split(' ')[0]}</span>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 mt-0.5">{notice.date.split(' ')[1]}</span>
                        <span className="text-[9px] text-slate-400">{notice.date.split(' ')[2]}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                            {notice.category}
                          </span>
                          {notice.isNew && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-rose-600 text-white animate-pulse">
                              NEW
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                          {notice.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                      <span className="text-xs font-semibold text-blue-700 hidden sm:inline">
                        {isExpanded ? 'Collapse' : 'Read Notice'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-500" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
                        {notice.description}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>Published by School Administration Office, Sehada</span>
                        </div>

                        {notice.attachmentName && (
                          <button
                            onClick={() => handleDownload(notice)}
                            className="px-4 py-1.5 rounded-lg bg-blue-800 hover:bg-blue-900 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Official Circular ({notice.attachmentName})</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Advisory for Parents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-amber-900">
            <h4 className="font-bold text-amber-950">Important Parent Communication Note</h4>
            <p className="leading-relaxed">
              All circulars displayed here are official notices approved by the Principal and Managing Committee. In case of unexpected weather holidays (dense winter fog / cold wave warnings), decisions are immediately communicated via SMS broadcast and posted on this board.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
