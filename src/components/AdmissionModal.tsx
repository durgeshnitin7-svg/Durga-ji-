import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, User, School, MapPin, Send, AlertCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    grade: 'Grade 1',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.parentName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all mandatory fields (Student name, Parent name, and Phone number).');
      return;
    }

    setErrorMsg('');
    const randomRef = 'SDJ-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      grade: 'Grade 1',
      phone: '',
      email: '',
      address: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admission-modal-title"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <School className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 id="admission-modal-title" className="text-xl font-bold tracking-tight">
                Online Admission Enquiry
              </h2>
              <p className="text-xs text-blue-200">
                Academic Session 2025–26 & 2026–27 | {SCHOOL_INFO.name}, Sehada
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Enquiry Submitted Successfully!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm">
                Thank you for showing interest in <strong>{SCHOOL_INFO.name}</strong>, Sehada, Azamgarh. Our admissions desk will contact you within 24 business hours.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left">
                <div className="text-xs text-blue-700 font-semibold uppercase tracking-wider mb-1">
                  Enquiry Reference ID
                </div>
                <div className="text-lg font-mono font-bold text-blue-900 mb-3">
                  {referenceId}
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div><strong>Student Name:</strong> {formData.studentName}</div>
                  <div><strong>Class:</strong> {formData.grade}</div>
                  <div><strong>Contact No:</strong> {formData.phone}</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-sm font-medium transition-colors shadow-xs"
                >
                  Done & Close
                </button>
                <a
                  href={`tel:${SCHOOL_INFO.phones[0]}`}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-700" />
                  Call Admission Office
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Admissions are open for <strong>Nursery to Class IX and Class XI</strong>. Please provide accurate parent phone number for prospectus and counselling callback.
                </span>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student's Full Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Yadav"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian's Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Yadav"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Class Applying For <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
                  >
                    <option value="Nursery">Nursery / Pre-KG</option>
                    <option value="LKG">L.K.G.</option>
                    <option value="UKG">U.K.G.</option>
                    <option value="Grade 1">Grade 1 (Class I)</option>
                    <option value="Grade 2">Grade 2 (Class II)</option>
                    <option value="Grade 3">Grade 3 (Class III)</option>
                    <option value="Grade 4">Grade 4 (Class IV)</option>
                    <option value="Grade 5">Grade 5 (Class V)</option>
                    <option value="Grade 6">Grade 6 (Class VI)</option>
                    <option value="Grade 7">Grade 7 (Class VII)</option>
                    <option value="Grade 8">Grade 8 (Class VIII)</option>
                    <option value="Grade 9">Grade 9 (Class IX)</option>
                    <option value="Grade 10">Grade 10 (Class X)</option>
                    <option value="Grade 11 - Science">Grade 11 - Science (PCM / PCB)</option>
                    <option value="Grade 11 - Commerce">Grade 11 - Commerce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98380XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Residential Area / Village <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sehada / Bilariaganj / Azamgarh"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Any Questions / Additional Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need information on school bus transport, fee installment, hostel/day-boarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-sm font-semibold shadow-sm transition-colors inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
