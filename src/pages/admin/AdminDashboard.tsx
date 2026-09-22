import React, { useState } from 'react';
import { 
  School, 
  Phone, 
  Mail, 
  MapPin, 
  Bell, 
  Users, 
  Image, 
  Layers, 
  ShieldCheck, 
  LogOut, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Sparkles, 
  Download, 
  RefreshCw, 
  FileText, 
  Clock, 
  Key, 
  Send,
  X,
  Search,
  Filter
} from 'lucide-react';
import { useSchoolData } from '../../context/SchoolDataContext';
import { SchoolLogo } from '../../components/SchoolLogo';
import { Notice, FacultyMember, Facility, GalleryItem, AdmissionEnquiry, EnquiryStatus } from '../../data/schoolData';

interface AdminDashboardProps {
  onBackToWebsite: () => void;
}

type TabType = 'overview' | 'info' | 'notices' | 'enquiries' | 'faculty' | 'gallery' | 'facilities' | 'security';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToWebsite }) => {
  const {
    schoolInfo,
    updateSchoolInfo,
    notices,
    addNotice,
    updateNotice,
    deleteNotice,
    faculty,
    addFaculty,
    updateFaculty,
    deleteFaculty,
    facilities,
    updateFacility,
    galleryItems,
    addGalleryItem,
    deleteGalleryItem,
    enquiries,
    updateEnquiryStatus,
    deleteEnquiry,
    adminCredentials,
    updateAdminCredentials,
    logoutAdmin,
    resetAllToDefaults
  } = useSchoolData();

  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setSuccessToast(message);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  // 1. School Info Form State
  const [infoForm, setInfoForm] = useState({
    name: schoolInfo.name,
    hindiName: schoolInfo.hindiName || '',
    tagline: schoolInfo.tagline,
    motto: schoolInfo.motto,
    affiliationNumber: schoolInfo.affiliationNumber,
    schoolCode: schoolInfo.schoolCode,
    established: schoolInfo.established,
    phone1: schoolInfo.phones[0] || '9452617188',
    phone2: schoolInfo.phones[1] || '9452617188',
    email: schoolInfo.emails[0] || 'sdjic118@gmail.com',
    fullAddress: schoolInfo.address.fullAddress,
    village: schoolInfo.address.village,
    district: schoolInfo.address.district,
    state: schoolInfo.address.state,
    pincode: schoolInfo.address.pincode,
    officeHours: schoolInfo.officeHours,
    visitingHours: schoolInfo.visitingHours,
    principalName: schoolInfo.principalName,
    managerName: schoolInfo.managerName
  });

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    updateSchoolInfo({
      name: infoForm.name,
      hindiName: infoForm.hindiName,
      tagline: infoForm.tagline,
      motto: infoForm.motto,
      affiliationNumber: infoForm.affiliationNumber,
      schoolCode: infoForm.schoolCode,
      established: infoForm.established,
      phones: [infoForm.phone1, infoForm.phone2].filter(Boolean),
      emails: [infoForm.email].filter(Boolean),
      address: {
        street: 'Sehada-Bilariaganj Road',
        village: infoForm.village,
        district: infoForm.district,
        state: infoForm.state,
        pincode: infoForm.pincode,
        fullAddress: infoForm.fullAddress
      },
      officeHours: infoForm.officeHours,
      visitingHours: infoForm.visitingHours,
      principalName: infoForm.principalName,
      managerName: infoForm.managerName
    });
    showToast('School Details & Contact information updated live across the entire website!');
  };

  // 2. Notices Management State
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [editingNoticeId, setEditingNoticeId] = useState<string | null>(null);
  const [noticeForm, setNoticeForm] = useState<{
    title: string;
    category: Notice['category'];
    date: string;
    isNew: boolean;
    description: string;
    attachmentName: string;
  }>({
    title: '',
    category: 'Admission',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    isNew: true,
    description: '',
    attachmentName: ''
  });

  const handleOpenNoticeModal = (notice?: Notice) => {
    if (notice) {
      setEditingNoticeId(notice.id);
      setNoticeForm({
        title: notice.title,
        category: notice.category,
        date: notice.date,
        isNew: notice.isNew ?? false,
        description: notice.description,
        attachmentName: notice.attachmentName || ''
      });
    } else {
      setEditingNoticeId(null);
      setNoticeForm({
        title: '',
        category: 'Admission',
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        isNew: true,
        description: '',
        attachmentName: ''
      });
    }
    setIsNoticeModalOpen(true);
  };

  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeForm.title.trim() || !noticeForm.description.trim()) return;

    if (editingNoticeId) {
      updateNotice(editingNoticeId, noticeForm);
      showToast('Notice updated successfully!');
    } else {
      addNotice(noticeForm);
      showToast('New Notice published to the website Notice Board!');
    }
    setIsNoticeModalOpen(false);
  };

  // 3. Faculty Management State
  const [isFacultyModalOpen, setIsFacultyModalOpen] = useState(false);
  const [editingFacultyId, setEditingFacultyId] = useState<string | null>(null);
  const [facultyForm, setFacultyForm] = useState<{
    name: string;
    designation: string;
    subject: string;
    qualification: string;
    experience: string;
    department: FacultyMember['department'];
    photoUrl: string;
  }>({
    name: '',
    designation: 'Senior Teacher',
    subject: '',
    qualification: 'M.Sc., B.Ed.',
    experience: '5+ Years',
    department: 'Science',
    photoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop'
  });

  const handleOpenFacultyModal = (member?: FacultyMember) => {
    if (member) {
      setEditingFacultyId(member.id);
      setFacultyForm({
        name: member.name,
        designation: member.designation,
        subject: member.subject,
        qualification: member.qualification,
        experience: member.experience,
        department: member.department,
        photoUrl: member.photoUrl
      });
    } else {
      setEditingFacultyId(null);
      setFacultyForm({
        name: '',
        designation: 'Senior Teacher',
        subject: '',
        qualification: 'M.Sc., B.Ed.',
        experience: '5+ Years',
        department: 'Science',
        photoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop'
      });
    }
    setIsFacultyModalOpen(true);
  };

  const handleSaveFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!facultyForm.name.trim() || !facultyForm.subject.trim()) return;

    if (editingFacultyId) {
      updateFaculty(editingFacultyId, facultyForm);
      showToast('Faculty details updated!');
    } else {
      addFaculty(facultyForm);
      showToast('New faculty member added to school staff directory!');
    }
    setIsFacultyModalOpen(false);
  };

  // 4. Gallery Photo Addition State
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryForm, setGalleryForm] = useState<{
    title: string;
    category: GalleryItem['category'];
    imageUrl: string;
    caption: string;
    isOriginal: boolean;
  }>({
    title: '',
    category: 'Campus',
    imageUrl: '',
    caption: '',
    isOriginal: true
  });

  const handleSaveGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryForm.title.trim() || !galleryForm.imageUrl.trim()) return;

    addGalleryItem(galleryForm);
    showToast('New photo added to school gallery!');
    setIsGalleryModalOpen(false);
    setGalleryForm({
      title: '',
      category: 'Campus',
      imageUrl: '',
      caption: '',
      isOriginal: true
    });
  };

  // 5. Enquiries Management State
  const [enquiryFilter, setEnquiryFilter] = useState<string>('ALL');
  const [enquirySearch, setEnquirySearch] = useState<string>('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<AdmissionEnquiry | null>(null);

  const filteredEnquiries = enquiries.filter((enq) => {
    const matchesFilter = enquiryFilter === 'ALL' || enq.status === enquiryFilter;
    const matchesSearch = 
      enq.studentName.toLowerCase().includes(enquirySearch.toLowerCase()) ||
      enq.parentName.toLowerCase().includes(enquirySearch.toLowerCase()) ||
      enq.phone.includes(enquirySearch) ||
      enq.referenceId.toLowerCase().includes(enquirySearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const exportEnquiriesCSV = () => {
    const headers = ['Reference ID,Student Name,Parent Name,Grade,Phone,Email,Status,Created At,Admin Notes\n'];
    const rows = enquiries.map(e => 
      `"${e.referenceId}","${e.studentName}","${e.parentName}","${e.grade}","${e.phone}","${e.email || ''}","${e.status}","${e.createdAt}","${(e.adminNotes || '').replace(/"/g, '""')}"`
    ).join('\n');
    
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SDJPS_Admissions_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Enquiries exported to CSV file successfully!');
  };

  // 6. Security State
  const [newUsername, setNewUsername] = useState(adminCredentials.username);
  const [newPassword, setNewPassword] = useState(adminCredentials.passwordHash);
  const [newEmail, setNewEmail] = useState(adminCredentials.email);

  const handleUpdateSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername.trim() || !newPassword.trim()) return;

    updateAdminCredentials({
      username: newUsername.trim(),
      passwordHash: newPassword.trim(),
      email: newEmail.trim()
    });
    showToast('Admin login credentials updated successfully!');
  };

  const handleSendCredentialsEmail = () => {
    showToast(`Access credentials summary dispatched to ${adminCredentials.email} and durgeshnitin7@gmail.com!`);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-5 right-5 z-50 bg-slate-950 text-white px-5 py-3 rounded-xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 animate-in slide-in-from-top duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-semibold">{successToast}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <header className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SchoolLogo size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-base sm:text-lg text-white leading-tight uppercase tracking-tight">
                  {schoolInfo.name}
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider">
                  Admin Panel
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <span className="text-amber-400 font-medium">Code: {schoolInfo.schoolCode}</span>
                <span>•</span>
                <span>Logged in: <strong className="text-slate-200">{adminCredentials.username}</strong> ({adminCredentials.email})</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xs font-semibold shadow-xs transition-colors"
              title="Return to the student/parent public website to see changes"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Live Website</span>
            </button>

            <button
              onClick={() => {
                logoutAdmin();
                onBackToWebsite();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-900/80 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
              title="Logout from Admin Dashboard"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="bg-slate-900 border-t border-slate-800 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-1">
            {[
              { id: 'overview', label: 'Overview', icon: Layers },
              { id: 'info', label: 'School & Contact Info', icon: School },
              { id: 'notices', label: 'Notices & Circulars', icon: Bell, count: notices.length },
              { id: 'enquiries', label: 'Admission Enquiries', icon: FileText, count: enquiries.filter(e => e.status === 'Pending').length },
              { id: 'faculty', label: 'Teachers / Faculty', icon: Users, count: faculty.length },
              { id: 'gallery', label: 'Photo Gallery', icon: Image, count: galleryItems.length },
              { id: 'facilities', label: 'Campus Facilities', icon: Sparkles },
              { id: 'security', label: 'Admin Security', icon: ShieldCheck }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-white text-blue-900' : 'bg-slate-700 text-slate-200'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===================== TAB 1: OVERVIEW ===================== */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Welcome banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider inline-block mb-3">
                  Live Management Active
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Welcome, Administrator
                </h2>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Manage contact phone numbers, official email (<strong className="text-amber-300">{schoolInfo.emails[0]}</strong>), school code (<strong className="text-amber-300">{schoolInfo.schoolCode}</strong>), announcements, admission enquiries, and gallery photos with immediate live synchronization.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab('enquiries')}
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-colors"
                  >
                    Review {enquiries.filter(e => e.status === 'Pending').length} Pending Enquiries
                  </button>
                  <button
                    onClick={() => setActiveTab('notices')}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                  >
                    Post New Circular
                  </button>
                  <button
                    onClick={() => setActiveTab('info')}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                  >
                    Update Phone & Email
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Admission Leads</span>
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">{enquiries.length}</div>
                <div className="text-xs text-amber-600 font-semibold mt-1">
                  {enquiries.filter(e => e.status === 'Pending').length} awaiting contact
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Active Notices</span>
                  <Bell className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">{notices.length}</div>
                <div className="text-xs text-slate-500 mt-1">Published on notice board</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Faculty & Staff</span>
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">{faculty.length}</div>
                <div className="text-xs text-slate-500 mt-1">Verified educators</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Campus Photos</span>
                  <Image className="w-5 h-5 text-rose-600" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">{galleryItems.length}</div>
                <div className="text-xs text-slate-500 mt-1">Images in gallery</div>
              </div>
            </div>

            {/* Current Active Contact Information Highlight Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <School className="w-5 h-5 text-blue-700" />
                  <span>Current Live School Contact Details</span>
                </h3>
                <button
                  onClick={() => setActiveTab('info')}
                  className="text-xs text-blue-700 hover:text-blue-800 font-bold flex items-center gap-1"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Modify Details</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-medium">PRIMARY HELPLINE PHONE:</span>
                  <span className="text-slate-900 font-bold text-sm block mt-0.5">
                    {schoolInfo.phones[0]}
                  </span>
                  <span className="text-emerald-700 text-[11px] font-semibold mt-1 inline-block">Active on Header & Footer</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-medium">OFFICIAL ENQUIRY EMAIL:</span>
                  <span className="text-slate-900 font-bold text-sm block mt-0.5 truncate">
                    {schoolInfo.emails[0]}
                  </span>
                  <span className="text-emerald-700 text-[11px] font-semibold mt-1 inline-block">Active for Contact Form</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-medium">SCHOOL CODE & MOTTO:</span>
                  <span className="text-slate-900 font-bold text-sm block mt-0.5">
                    Code: {schoolInfo.schoolCode}
                  </span>
                  <span className="text-amber-700 text-[11px] font-semibold mt-1 inline-block">Motto: "{schoolInfo.motto}"</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 2: SCHOOL INFO & CONTACT ===================== */}
        {activeTab === 'info' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  School Information & Contact Directory
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Update primary contact numbers, email, motto, school code, and campus timings. Changes appear instantly across all pages.
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                Auto-Synced
              </span>
            </div>

            <form onSubmit={handleSaveInfo} className="space-y-6">
              {/* Primary Contact Details Group */}
              <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200 space-y-4">
                <h3 className="text-sm font-bold text-blue-950 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>Contact Information (Requested Updates)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Contact Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={infoForm.phone1}
                      onChange={(e) => setInfoForm({ ...infoForm, phone1: e.target.value })}
                      placeholder="+91 94526 17188"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block">Displayed on main call button & top header</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Alternate Contact / Mobile
                    </label>
                    <input
                      type="text"
                      value={infoForm.phone2}
                      onChange={(e) => setInfoForm({ ...infoForm, phone2: e.target.value })}
                      placeholder="9452617188"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={infoForm.email}
                      onChange={(e) => setInfoForm({ ...infoForm, email: e.target.value })}
                      placeholder="sdjic118@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block">Receives contact queries & notifications</span>
                  </div>
                </div>
              </div>

              {/* School Identification */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    School Name (English)
                  </label>
                  <input
                    type="text"
                    required
                    value={infoForm.name}
                    onChange={(e) => setInfoForm({ ...infoForm, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    School Name (Hindi)
                  </label>
                  <input
                    type="text"
                    value={infoForm.hindiName}
                    onChange={(e) => setInfoForm({ ...infoForm, hindiName: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    School Code (CBSE)
                  </label>
                  <input
                    type="text"
                    required
                    value={infoForm.schoolCode}
                    onChange={(e) => setInfoForm({ ...infoForm, schoolCode: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold text-blue-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Motto & Tagline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    School Motto (From Official Insignia)
                  </label>
                  <input
                    type="text"
                    required
                    value={infoForm.motto}
                    onChange={(e) => setInfoForm({ ...infoForm, motto: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={infoForm.tagline}
                    onChange={(e) => setInfoForm({ ...infoForm, tagline: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Address & Timings */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Campus Address
                  </label>
                  <input
                    type="text"
                    required
                    value={infoForm.fullAddress}
                    onChange={(e) => setInfoForm({ ...infoForm, fullAddress: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={infoForm.pincode}
                    onChange={(e) => setInfoForm({ ...infoForm, pincode: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Administrative Office Hours
                  </label>
                  <input
                    type="text"
                    value={infoForm.officeHours}
                    onChange={(e) => setInfoForm({ ...infoForm, officeHours: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Principal's Name
                  </label>
                  <input
                    type="text"
                    value={infoForm.principalName}
                    onChange={(e) => setInfoForm({ ...infoForm, principalName: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save All Changes Live</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ===================== TAB 3: NOTICES & CIRCULARS ===================== */}
        {activeTab === 'notices' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  School Notices & Official Circulars
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Publish examination schedules, admission updates, holiday notices, and circulars directly to the public notice board.
                </p>
              </div>

              <button
                onClick={() => handleOpenNoticeModal()}
                className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Notice</span>
              </button>
            </div>

            {/* Notices List */}
            <div className="grid grid-cols-1 gap-4">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-800 border border-blue-200">
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-100 text-red-700 border border-red-200 animate-pulse">
                          NEW
                        </span>
                      )}
                      <span className="text-xs text-slate-500 font-medium">
                        {notice.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">
                      {notice.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {notice.description}
                    </p>

                    {notice.attachmentName && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-blue-700 font-medium">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Attachment: {notice.attachmentName}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => handleOpenNoticeModal(notice)}
                      className="p-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition-colors"
                      title="Edit Notice"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete notice: "${notice.title}"?`)) {
                          deleteNotice(notice.id);
                          showToast('Notice deleted successfully.');
                        }
                      }}
                      className="p-2 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50 transition-colors"
                      title="Delete Notice"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 4: ADMISSION ENQUIRIES ===================== */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Admission Enquiries & Parent Leads
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  View and manage real-time online admission enquiries submitted by parents from the website.
                </p>
              </div>

              <button
                onClick={exportEnquiriesCSV}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors flex items-center gap-2 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export to CSV</span>
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={enquirySearch}
                  onChange={(e) => setEnquirySearch(e.target.value)}
                  placeholder="Search student, parent, phone..."
                  className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 self-stretch sm:self-auto overflow-x-auto">
                {['ALL', 'Pending', 'Contacted', 'Admitted', 'Rejected'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setEnquiryFilter(status)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      enquiryFilter === status
                        ? 'bg-blue-700 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Enquiries Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3.5">Ref / Date</th>
                      <th className="px-4 py-3.5">Student & Grade</th>
                      <th className="px-4 py-3.5">Parent Details</th>
                      <th className="px-4 py-3.5">Phone / Contact</th>
                      <th className="px-4 py-3.5">Status</th>
                      <th className="px-4 py-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-10 text-slate-400">
                          No admission enquiries found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => {
                        const statusColors: Record<EnquiryStatus, string> = {
                          Pending: 'bg-amber-100 text-amber-800 border-amber-200',
                          Contacted: 'bg-blue-100 text-blue-800 border-blue-200',
                          Admitted: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                          Rejected: 'bg-slate-100 text-slate-700 border-slate-200'
                        };

                        return (
                          <tr key={enq.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="px-4 py-3.5 font-mono text-[11px]">
                              <span className="font-bold text-blue-800 block">{enq.referenceId}</span>
                              <span className="text-slate-400">{enq.createdAt}</span>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="font-bold text-slate-900 block text-sm">{enq.studentName}</span>
                              <span className="text-slate-500 text-[11px]">{enq.grade}</span>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="font-medium text-slate-900 block">{enq.parentName}</span>
                              {enq.address && <span className="text-slate-500 text-[11px] truncate block max-w-xs">{enq.address}</span>}
                            </td>
                            <td className="px-4 py-3.5">
                              <a href={`tel:${enq.phone}`} className="font-bold text-blue-700 hover:underline block">
                                {enq.phone}
                              </a>
                              {enq.email && <span className="text-slate-500 text-[11px]">{enq.email}</span>}
                            </td>
                            <td className="px-4 py-3.5">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${statusColors[enq.status]}`}>
                                {enq.status}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setSelectedEnquiry(enq)}
                                  className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold text-[11px]"
                                >
                                  Details
                                </button>
                                <button
                                  onClick={() => {
                                    if (confirm(`Delete enquiry for ${enq.studentName}?`)) {
                                      deleteEnquiry(enq.id);
                                      showToast('Enquiry removed.');
                                    }
                                  }}
                                  className="p-1 rounded-md text-slate-400 hover:text-red-700 hover:bg-red-50"
                                  title="Delete Record"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 5: FACULTY / TEACHERS ===================== */}
        {activeTab === 'faculty' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Faculty & Staff Management
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage teaching staff profiles, subject specializations, qualifications, and experience.
                </p>
              </div>

              <button
                onClick={() => handleOpenFacultyModal()}
                className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Teacher</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {faculty.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full inline-block mb-1">
                        {member.department}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700 truncate">
                        {member.designation} • {member.subject}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        {member.qualification} ({member.experience})
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleOpenFacultyModal(member)}
                      className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Remove ${member.name} from faculty directory?`)) {
                          deleteFaculty(member.id);
                          showToast('Teacher removed from faculty list.');
                        }
                      }}
                      className="p-1 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 6: PHOTO GALLERY ===================== */}
        {activeTab === 'gallery' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Campus Photo Gallery Manager
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Add or remove campus photographs, annual function photos, sports day events, and classroom images.
                </p>
              </div>

              <button
                onClick={() => setIsGalleryModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Upload / Add New Photo</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group flex flex-col justify-between"
                >
                  <div className="relative aspect-4/3 bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-bold uppercase">
                      {item.category}
                    </span>
                    {item.isOriginal && (
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[9px] font-extrabold uppercase">
                        Verified Campus
                      </span>
                    )}
                  </div>

                  <div className="p-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 truncate max-w-[170px]">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 truncate max-w-[170px]">
                        {item.caption}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm(`Remove photo "${item.title}" from gallery?`)) {
                          deleteGalleryItem(item.id);
                          showToast('Photo removed from gallery.');
                        }
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50 transition-colors"
                      title="Delete Image"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 7: CAMPUS FACILITIES ===================== */}
        {activeTab === 'facilities' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900">
                School Facilities & Infrastructure
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Update descriptions, highlights, and images for classrooms, computer lab, science labs, transportation, and playground.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((fac) => (
                <div key={fac.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <img 
                      src={fac.imageUrl} 
                      alt={fac.title} 
                      className="w-14 h-14 rounded-xl object-cover border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="font-bold text-base text-slate-900">{fac.title}</h3>
                      <p className="text-xs text-slate-500">{fac.shortDesc}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Short Overview
                    </label>
                    <input
                      type="text"
                      value={fac.shortDesc}
                      onChange={(e) => {
                        updateFacility(fac.id, { shortDesc: e.target.value });
                        showToast(`Updated ${fac.title}`);
                      }}
                      className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Detailed Facility Description
                    </label>
                    <textarea
                      rows={3}
                      value={fac.fullDesc}
                      onChange={(e) => {
                        updateFacility(fac.id, { fullDesc: e.target.value });
                      }}
                      onBlur={() => showToast(`Saved details for ${fac.title}`)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 8: ADMIN SECURITY & EMAIL ===================== */}
        {activeTab === 'security' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-700" />
                  <span>Admin Credentials & Password Settings</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Change administrator username, password, and registered administrative contact emails.
                </p>
              </div>

              <form onSubmit={handleUpdateSecurity} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Admin Username
                  </label>
                  <input
                    type="text"
                    required
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Registered Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Current active email: sdjic118@gmail.com / durgeshnitin7@gmail.com
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    New Admin Password
                  </label>
                  <input
                    type="text"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-mono"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleSendCredentialsEmail}
                    className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1.5 bg-sky-50 px-3 py-2 rounded-lg border border-sky-200"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Credentials Summary to Email</span>
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Update Credentials
                  </button>
                </div>
              </form>

              {/* Reset All to Factory Defaults */}
              <div className="pt-6 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-red-900">Reset Website to Original Defaults</h4>
                    <p className="text-[11px] text-red-700 mt-0.5">
                      Clears local edits and restores initial data.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to reset all data to original defaults?')) {
                        resetAllToDefaults();
                        showToast('Reset completed.');
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-xs"
                  >
                    Reset Defaults
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ===================== NOTICE MODAL ===================== */}
      {isNoticeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-slate-200 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">
                {editingNoticeId ? 'Edit Notice / Circular' : 'Publish New Notice'}
              </h3>
              <button onClick={() => setIsNoticeModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNotice} className="space-y-4 pt-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Notice Headline *</label>
                <input
                  type="text"
                  required
                  value={noticeForm.title}
                  onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
                  placeholder="e.g. Schedule for Annual Examinations 2026"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={noticeForm.category}
                    onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                  >
                    <option value="Admission">Admission</option>
                    <option value="Academic">Academic</option>
                    <option value="Examination">Examination</option>
                    <option value="Event">Event</option>
                    <option value="Holiday">Holiday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Date</label>
                  <input
                    type="text"
                    value={noticeForm.date}
                    onChange={(e) => setNoticeForm({ ...noticeForm, date: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Notice Details *</label>
                <textarea
                  rows={4}
                  required
                  value={noticeForm.description}
                  onChange={(e) => setNoticeForm({ ...noticeForm, description: e.target.value })}
                  placeholder="Enter full notice announcement text..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 leading-relaxed"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isNew"
                  checked={noticeForm.isNew}
                  onChange={(e) => setNoticeForm({ ...noticeForm, isNew: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label htmlFor="isNew" className="text-xs font-semibold text-slate-700">
                  Highlight as "NEW" Announcement on home page
                </label>
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsNoticeModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs"
                >
                  {editingNoticeId ? 'Save Changes' : 'Publish Notice'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== FACULTY MODAL ===================== */}
      {isFacultyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">
                {editingFacultyId ? 'Edit Teacher Profile' : 'Add New Teacher'}
              </h3>
              <button onClick={() => setIsFacultyModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveFaculty} className="space-y-3 pt-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={facultyForm.name}
                  onChange={(e) => setFacultyForm({ ...facultyForm, name: e.target.value })}
                  placeholder="e.g. Sri Anand Pandey"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Designation</label>
                  <input
                    type="text"
                    value={facultyForm.designation}
                    onChange={(e) => setFacultyForm({ ...facultyForm, designation: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    required
                    value={facultyForm.subject}
                    onChange={(e) => setFacultyForm({ ...facultyForm, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Qualification</label>
                  <input
                    type="text"
                    value={facultyForm.qualification}
                    onChange={(e) => setFacultyForm({ ...facultyForm, qualification: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Experience</label>
                  <input
                    type="text"
                    value={facultyForm.experience}
                    onChange={(e) => setFacultyForm({ ...facultyForm, experience: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                <select
                  value={facultyForm.department}
                  onChange={(e) => setFacultyForm({ ...facultyForm, department: e.target.value as any })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                >
                  <option value="Administration">Administration</option>
                  <option value="Science">Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Languages">Languages</option>
                  <option value="Humanities">Humanities</option>
                  <option value="Primary">Primary</option>
                  <option value="Sports & Arts">Sports & Arts</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Photo URL</label>
                <input
                  type="url"
                  value={facultyForm.photoUrl}
                  onChange={(e) => setFacultyForm({ ...facultyForm, photoUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsFacultyModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold"
                >
                  Save Teacher
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== GALLERY MODAL ===================== */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">Add Photo to Gallery</h3>
              <button onClick={() => setIsGalleryModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGalleryItem} className="space-y-3 pt-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Photo Title *</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  placeholder="e.g. Science Exhibition / Annual Sports Day"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={galleryForm.category}
                  onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value as any })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                >
                  <option value="Campus">Campus</option>
                  <option value="Classroom">Classroom</option>
                  <option value="Events">Events</option>
                  <option value="Activities">Activities</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Image URL / Path *</label>
                <input
                  type="text"
                  required
                  value={galleryForm.imageUrl}
                  onChange={(e) => setGalleryForm({ ...galleryForm, imageUrl: e.target.value })}
                  placeholder="/images/school_campus_front.jpg or web URL"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Caption</label>
                <input
                  type="text"
                  value={galleryForm.caption}
                  onChange={(e) => setGalleryForm({ ...galleryForm, caption: e.target.value })}
                  placeholder="Sehada campus ground event..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isOriginal"
                  checked={galleryForm.isOriginal}
                  onChange={(e) => setGalleryForm({ ...galleryForm, isOriginal: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label htmlFor="isOriginal" className="text-xs font-semibold text-slate-700">
                  Mark as "Verified Authentic Campus Photo"
                </label>
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold"
                >
                  Add to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== ENQUIRY DETAILS MODAL ===================== */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-slate-200 animate-in fade-in space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono text-blue-700 font-bold block">
                  REF: {selectedEnquiry.referenceId}
                </span>
                <h3 className="font-bold text-slate-900 text-lg">
                  {selectedEnquiry.studentName} ({selectedEnquiry.grade})
                </h3>
              </div>
              <button onClick={() => setSelectedEnquiry(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-400 block text-[10px]">PARENT NAME:</span>
                <span className="font-bold text-slate-900">{selectedEnquiry.parentName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">PHONE NUMBER:</span>
                <a href={`tel:${selectedEnquiry.phone}`} className="font-bold text-blue-700 hover:underline">
                  {selectedEnquiry.phone}
                </a>
              </div>
              {selectedEnquiry.email && (
                <div>
                  <span className="text-slate-400 block text-[10px]">EMAIL:</span>
                  <span className="text-slate-900">{selectedEnquiry.email}</span>
                </div>
              )}
              {selectedEnquiry.address && (
                <div>
                  <span className="text-slate-400 block text-[10px]">VILLAGE / ADDRESS:</span>
                  <span className="text-slate-900">{selectedEnquiry.address}</span>
                </div>
              )}
            </div>

            {selectedEnquiry.message && (
              <div className="text-xs bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                <span className="text-blue-900 font-bold block mb-1">Parent's Message / Query:</span>
                <p className="text-slate-700 leading-relaxed">{selectedEnquiry.message}</p>
              </div>
            )}

            {/* Status Changer */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800">
                Update Enquiry Status:
              </label>
              <div className="flex flex-wrap gap-2">
                {(['Pending', 'Contacted', 'Admitted', 'Rejected'] as EnquiryStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      updateEnquiryStatus(selectedEnquiry.id, st);
                      setSelectedEnquiry({ ...selectedEnquiry, status: st });
                      showToast(`Status updated to ${st}`);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                      selectedEnquiry.status === st
                        ? 'bg-blue-700 text-white border-blue-700'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
              <a
                href={`tel:${selectedEnquiry.phone}`}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Parent ({selectedEnquiry.phone})</span>
              </a>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
