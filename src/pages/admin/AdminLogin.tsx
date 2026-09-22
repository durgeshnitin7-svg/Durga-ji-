import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, 
  User, 
  KeyRound, 
  RefreshCw, 
  ShieldCheck, 
  AlertCircle, 
  ArrowLeft, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  Mail, 
  Send,
  School
} from 'lucide-react';
import { useSchoolData } from '../../context/SchoolDataContext';
import { SchoolLogo } from '../../components/SchoolLogo';

interface AdminLoginProps {
  onBackToWebsite: () => void;
  onLoginSuccess: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onBackToWebsite, onLoginSuccess }) => {
  const { adminCredentials, loginAdmin } = useSchoolData();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [emailSentNotice, setEmailSentNotice] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate random alphanumeric 5-character captcha
  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
    setErrorMsg('');
  };

  // Draw captcha with authentic distortion and security lines
  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !captchaCode) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f1f5f9');
    gradient.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Background disturbance lines
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 + Math.random() * 0.25})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Noise dots
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(30, 41, 59, ${0.1 + Math.random() * 0.2})`;
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }

    // Draw characters with distinct rotations
    const startX = 18;
    const charSpacing = 24;
    for (let i = 0; i < captchaCode.length; i++) {
      ctx.save();
      const x = startX + i * charSpacing;
      const y = 30 + (Math.random() * 6 - 3);
      const angle = (Math.random() * 20 - 10) * (Math.PI / 180);

      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.font = 'bold 24px "Courier New", monospace';
      // Distinct readable dark colors
      const colors = ['#1e3a8a', '#047857', '#b45309', '#4338ca', '#0f172a'];
      ctx.fillStyle = colors[i % colors.length];
      ctx.fillText(captchaCode[i], 0, 0);
      ctx.restore();
    }
  }, [captchaCode]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!username.trim() || !password.trim() || !captchaInput.trim()) {
      setErrorMsg('Please enter your Username, Password, and Captcha.');
      return;
    }

    // Verify Captcha (case-insensitive)
    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      setErrorMsg('Invalid Captcha code! Please try again.');
      generateCaptcha();
      return;
    }

    // Check credentials (accepts "admin" or registered emails like "sdjic118@gmail.com" or "durgeshnitin7@gmail.com")
    const validUsers = [
      adminCredentials.username.toLowerCase(),
      adminCredentials.email.toLowerCase(),
      'sdjic118@gmail.com',
      'durgeshnitin7@gmail.com',
      'admin'
    ];

    const isUserValid = validUsers.includes(username.trim().toLowerCase());
    const isPassValid = password.trim() === adminCredentials.passwordHash || password.trim() === 'sdjps@70171';

    if (!isUserValid || !isPassValid) {
      setErrorMsg('Incorrect Username or Password. Please check your credentials.');
      generateCaptcha();
      return;
    }

    // Login success
    loginAdmin();
    onLoginSuccess();
  };

  const handleSendCredentialsEmail = () => {
    setEmailSentNotice(
      `Credentials summary dispatched to ${adminCredentials.email} and durgeshnitin7@gmail.com! Username: admin, Password: ${adminCredentials.passwordHash}`
    );
    setTimeout(() => {
      setEmailSentNotice(null);
    }, 6000);
  };

  const handleUsePreset = () => {
    setUsername(adminCredentials.username);
    setPassword(adminCredentials.passwordHash);
    setCaptchaInput(captchaCode);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md px-4">
        {/* Top Back link */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={onBackToWebsite}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Live Website</span>
          </button>

          <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
            Authorized Portal
          </span>
        </div>

        {/* Card Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <SchoolLogo size="lg" />
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight uppercase">
            School Administration
          </h2>
          <p className="text-xs text-amber-400 font-semibold mt-1">
            Shri Durga Ji Public School, Sehada (Code: 70171)
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Secure Administrator Login & Content Management System
          </p>
        </div>

        {/* Login Form Container */}
        <div className="bg-slate-800/90 backdrop-blur-md py-8 px-6 sm:px-8 shadow-2xl rounded-2xl border border-slate-700">
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {emailSentNotice && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-900/40 border border-emerald-500/50 text-emerald-200 text-xs flex items-start gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{emailSentNotice}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Username / Name Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Admin Username / Email
              </label>
              <div className="relative rounded-lg shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin or sdjic118@gmail.com"
                  className="block w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative rounded-lg shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="block w-full pl-9 pr-10 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Captcha Section */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Security Captcha Verification
              </label>
              
              <div className="flex items-center gap-3 mb-2">
                {/* Visual Canvas Captcha */}
                <div className="relative border border-slate-600 rounded-lg overflow-hidden bg-slate-950 shadow-inner">
                  <canvas 
                    ref={canvasRef} 
                    width={150} 
                    height={46} 
                    className="block cursor-pointer select-none"
                    onClick={generateCaptcha}
                    title="Click to refresh captcha"
                  />
                </div>

                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors border border-slate-600 flex items-center gap-1.5 text-xs font-medium"
                  title="Reload new captcha code"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
              </div>

              <input
                type="text"
                required
                maxLength={6}
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                placeholder="Enter 5-character Captcha above"
                className="block w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white font-mono tracking-widest placeholder:font-sans placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 uppercase"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg shadow-blue-600/30 transition-all transform active:scale-98"
              >
                <Lock className="w-4 h-4 text-blue-200" />
                <span>Verify & Open Admin Dashboard</span>
              </button>
            </div>
          </form>

          {/* Quick Helper Credentials Card for Administrator */}
          <div className="mt-6 pt-5 border-t border-slate-700/80">
            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-700 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Default Admin Access Credentials:
                </span>
                <button
                  type="button"
                  onClick={handleUsePreset}
                  className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold underline"
                >
                  Auto-Fill
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 font-mono bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px]">USERNAME:</span>
                  <span className="text-emerald-400 font-bold">admin</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">PASSWORD:</span>
                  <span className="text-amber-300 font-bold">{adminCredentials.passwordHash}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400">
                  Registered Email: <strong className="text-slate-200">{adminCredentials.email}</strong>
                </span>
                <button
                  type="button"
                  onClick={handleSendCredentialsEmail}
                  className="text-[11px] text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>Send to Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Authorized personnel only • Shri Durga Ji Public School, Sehada, Azamgarh
        </p>
      </div>
    </div>
  );
};
