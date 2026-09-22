import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  School, 
  Navigation, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { useSchoolData } from '../context/SchoolDataContext';
import { PageId } from '../components/Navbar';
import { SchoolLogo } from '../components/SchoolLogo';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  const { schoolInfo, addEnquiry } = useSchoolData();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, contact phone number, and query message.');
      return;
    }

    // Persist to Admin Dashboard enquiries
    addEnquiry({
      studentName: formData.name + ' (Website Message)',
      parentName: formData.name,
      phone: formData.phone,
      email: formData.email || undefined,
      grade: formData.subject,
      message: formData.message
    });

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Enquiry',
      message: ''
    });
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-600/50 text-xs font-semibold text-amber-300 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch With Our Office</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Contact Us & Campus Location
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            We are here to answer your queries regarding admissions, academics, fee structure, and school transport routes.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <SchoolLogo size="sm" className="shrink-0" />
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 leading-tight uppercase">
                    {schoolInfo.name}
                  </h2>
                  <p className="text-xs text-amber-600 font-semibold">
                    School Code: {schoolInfo.schoolCode} • Sehada, Azamgarh
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Campus Address</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {schoolInfo.address.fullAddress}
                  </p>
                  <p className="text-[11px] text-blue-700 font-medium mt-1">
                    Landmark: Sehada-Bilariaganj Road, District Azamgarh (U.P.)
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Telephone / Helpline</h3>
                  <div className="space-y-1 mt-1 text-xs text-slate-600">
                    <div>
                      <span className="text-slate-400">Admission Office:</span>{' '}
                      <a href={`tel:${schoolInfo.phones[0]}`} className="font-semibold text-blue-800 hover:underline">
                        {schoolInfo.phones[0]}
                      </a>
                    </div>
                    {schoolInfo.phones[1] && (
                      <div>
                        <span className="text-slate-400">General Enquiry:</span>{' '}
                        <a href={`tel:${schoolInfo.phones[1]}`} className="font-semibold text-blue-800 hover:underline">
                          {schoolInfo.phones[1]}
                        </a>
                      </div>
                    )}
                    {schoolInfo.phones[2] && (
                      <div>
                        <span className="text-slate-400">Admin Landline:</span>{' '}
                        <a href={`tel:${schoolInfo.phones[2]}`} className="font-semibold text-blue-800 hover:underline">
                          {schoolInfo.phones[2]}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Official Email</h3>
                  <div className="space-y-1 mt-1 text-xs">
                    <div>
                      <a href={`mailto:${schoolInfo.emails[0]}`} className="text-blue-800 hover:underline block truncate">
                        {schoolInfo.emails[0]}
                      </a>
                    </div>
                    {schoolInfo.emails[1] && (
                      <div>
                        <a href={`mailto:${schoolInfo.emails[1]}`} className="text-blue-800 hover:underline block truncate">
                          {schoolInfo.emails[1]}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Working & Visiting Hours</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <strong>Admin Office:</strong> {schoolInfo.officeHours}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <strong>Principal Meeting:</strong> {schoolInfo.visitingHours}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    (Sundays and Gazetted holidays closed)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Transport Info */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-blue-700" />
                <span>How to Reach Sehada, Azamgarh</span>
              </div>
              <p>
                • <strong>From Azamgarh City:</strong> Approx. 18-22 km via Bilariaganj Highway; regular auto-rickshaws, shared taxis, and school buses operate daily.
              </p>
              <p>
                • <strong>Nearest Railway Station:</strong> Azamgarh (AMH) Railway Junction.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  Send Us a Message or Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out the form below and our administrative office will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <strong>{schoolInfo.name}, Sehada</strong>. Our team has received your query and will reply via phone or email soon.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 94500XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. yourname@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Enquiry Subject / Category <span className="text-rose-600">*</span>
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
                      >
                        <option value="General Enquiry">General Information</option>
                        <option value="Admission Enquiry">Admission & Prospectus</option>
                        <option value="Fee Structure">Fee Structure & Concessions</option>
                        <option value="School Bus Transport">School Bus & Routes</option>
                        <option value="Transfer Certificate">Transfer Certificate (TC)</option>
                        <option value="Career & Teaching Jobs">Job Application / Teaching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message / Enquiry Details <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please describe your question or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-slate-500">
                      We respect your privacy. No promotional spam.
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-2 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
                Campus Location Map
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Locate Sri Durga Ji Public School in Sehada, Azamgarh
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Conveniently located on Sehada-Bilariaganj Road, Azamgarh, Uttar Pradesh
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Sehada+Azamgarh+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-50 text-blue-800 hover:bg-blue-100 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto border border-blue-200"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Iframe Container */}
          <div className="relative w-full h-80 sm:h-96 bg-slate-200">
            <iframe
              title="Sri Durga Ji Public School Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115160.05286591016!2d83.10928929999999!3d26.0684535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991bbdfbc299dc7%3A0x6b7ca3c38b29f958!2sAzamgarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
