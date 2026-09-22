import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  SchoolInfo, 
  Notice, 
  FacultyMember, 
  Facility, 
  GalleryItem, 
  AdmissionEnquiry, 
  EnquiryStatus,
  SCHOOL_INFO, 
  NOTICES, 
  FACULTY_MEMBERS, 
  FACILITIES, 
  GALLERY_ITEMS 
} from '../data/schoolData';

export interface AdminCredentials {
  username: string;
  email: string;
  passwordHash: string; // plain for demo storage
  lastLogin?: string;
}

interface SchoolDataContextType {
  schoolInfo: SchoolInfo;
  updateSchoolInfo: (info: Partial<SchoolInfo>) => void;
  notices: Notice[];
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  updateNotice: (id: string, updated: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;
  faculty: FacultyMember[];
  addFaculty: (member: Omit<FacultyMember, 'id'>) => void;
  updateFaculty: (id: string, updated: Partial<FacultyMember>) => void;
  deleteFaculty: (id: string) => void;
  facilities: Facility[];
  updateFacility: (id: string, updated: Partial<Facility>) => void;
  galleryItems: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  enquiries: AdmissionEnquiry[];
  addEnquiry: (enquiry: Omit<AdmissionEnquiry, 'id' | 'createdAt' | 'status' | 'referenceId'>) => string;
  updateEnquiryStatus: (id: string, status: EnquiryStatus, adminNotes?: string) => void;
  deleteEnquiry: (id: string) => void;
  adminCredentials: AdminCredentials;
  updateAdminCredentials: (creds: Partial<AdminCredentials>) => void;
  isAuthenticated: boolean;
  loginAdmin: () => void;
  logoutAdmin: () => void;
  resetAllToDefaults: () => void;
}

const DEFAULT_CREDENTIALS: AdminCredentials = {
  username: 'admin',
  email: 'sdjic118@gmail.com',
  passwordHash: 'sdjps@70171',
  lastLogin: undefined
};

const INITIAL_ENQUIRIES: AdmissionEnquiry[] = [
  {
    id: 'enq-101',
    referenceId: 'SDJ-782194',
    studentName: 'Aarav Pratap Singh',
    parentName: 'Virendra Singh',
    grade: 'Grade 6',
    phone: '9452617188',
    email: 'virendra.singh@gmail.com',
    address: 'Bilariaganj, Azamgarh',
    message: 'Seeking admission for Grade 6 CBSE curriculum. Need details on school bus route from Bilariaganj.',
    status: 'Pending',
    createdAt: '2026-09-20 10:30 AM',
    adminNotes: 'Transport route #3 covers Bilariaganj stop.'
  },
  {
    id: 'enq-102',
    referenceId: 'SDJ-492015',
    studentName: 'Pari Yadav',
    parentName: 'Ramesh Yadav',
    grade: 'Grade 1',
    phone: '9838012345',
    email: 'ramesh.yadav@yahoo.com',
    address: 'Sehada Village, Azamgarh',
    message: 'Enquiry for Grade 1 admission. What are the documents required for registration?',
    status: 'Contacted',
    createdAt: '2026-09-19 03:15 PM',
    adminNotes: 'Spoke with parent; invited for campus visit and verification on Saturday.'
  },
  {
    id: 'enq-103',
    referenceId: 'SDJ-338192',
    studentName: 'Shivam Maurya',
    parentName: 'Dinesh Maurya',
    grade: 'Grade 9',
    phone: '9415678901',
    email: 'dinesh.maurya@gmail.com',
    address: 'Sagri, Azamgarh',
    message: 'Transfer admission from state board to CBSE pattern for Class 9.',
    status: 'Pending',
    createdAt: '2026-09-18 11:45 AM'
  }
];

const SchoolDataContext = createContext<SchoolDataContextType | undefined>(undefined);

export const SchoolDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. School Info State
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo>(() => {
    try {
      const stored = localStorage.getItem('sdjps_school_info');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Ensure new phone & email are preserved
        if (!parsed.emails || parsed.emails[0] !== 'sdjic118@gmail.com') {
          parsed.emails = ['sdjic118@gmail.com'];
          parsed.phones = ['+91 94526 17188', '9452617188'];
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return SCHOOL_INFO;
  });

  // 2. Notices State
  const [notices, setNotices] = useState<Notice[]>(() => {
    try {
      const stored = localStorage.getItem('sdjps_notices');
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return NOTICES;
  });

  // 3. Faculty State
  const [faculty, setFaculty] = useState<FacultyMember[]>(() => {
    try {
      const stored = localStorage.getItem('sdjps_faculty');
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return FACULTY_MEMBERS;
  });

  // 4. Facilities State
  const [facilities, setFacilities] = useState<Facility[]>(() => {
    try {
      const stored = localStorage.getItem('sdjps_facilities');
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return FACILITIES;
  });

  // 5. Gallery State
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    try {
      const stored = localStorage.getItem('sdjps_gallery');
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return GALLERY_ITEMS;
  });

  // 6. Enquiries State
  const [enquiries, setEnquiries] = useState<AdmissionEnquiry[]>(() => {
    try {
      const stored = localStorage.getItem('sdjps_enquiries');
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return INITIAL_ENQUIRIES;
  });

  // 7. Admin Credentials & Auth State
  const [adminCredentials, setAdminCredentials] = useState<AdminCredentials>(() => {
    try {
      const stored = localStorage.getItem('sdjps_admin_creds');
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return DEFAULT_CREDENTIALS;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('sdjps_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('sdjps_school_info', JSON.stringify(schoolInfo));
  }, [schoolInfo]);

  useEffect(() => {
    localStorage.setItem('sdjps_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('sdjps_faculty', JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem('sdjps_facilities', JSON.stringify(facilities));
  }, [facilities]);

  useEffect(() => {
    localStorage.setItem('sdjps_gallery', JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem('sdjps_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('sdjps_admin_creds', JSON.stringify(adminCredentials));
  }, [adminCredentials]);

  // Handler Functions
  const updateSchoolInfo = (info: Partial<SchoolInfo>) => {
    setSchoolInfo((prev) => ({
      ...prev,
      ...info,
      address: {
        ...prev.address,
        ...(info.address || {})
      }
    }));
  };

  const addNotice = (noticeData: Omit<Notice, 'id'>) => {
    const newNotice: Notice = {
      ...noticeData,
      id: 'not-' + Date.now()
    };
    setNotices((prev) => [newNotice, ...prev]);
  };

  const updateNotice = (id: string, updated: Partial<Notice>) => {
    setNotices((prev) =>
      prev.map((n) => (n.id === id ? { ...n, ...updated } : n))
    );
  };

  const deleteNotice = (id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
  };

  const addFaculty = (memberData: Omit<FacultyMember, 'id'>) => {
    const newMember: FacultyMember = {
      ...memberData,
      id: 'fac-' + Date.now()
    };
    setFaculty((prev) => [...prev, newMember]);
  };

  const updateFaculty = (id: string, updated: Partial<FacultyMember>) => {
    setFaculty((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updated } : f))
    );
  };

  const deleteFaculty = (id: string) => {
    setFaculty((prev) => prev.filter((f) => f.id !== id));
  };

  const updateFacility = (id: string, updated: Partial<Facility>) => {
    setFacilities((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updated } : f))
    );
  };

  const addGalleryItem = (itemData: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...itemData,
      id: 'gal-' + Date.now()
    };
    setGalleryItems((prev) => [newItem, ...prev]);
  };

  const deleteGalleryItem = (id: string) => {
    setGalleryItems((prev) => prev.filter((g) => g.id !== id));
  };

  const addEnquiry = (enquiryData: Omit<AdmissionEnquiry, 'id' | 'createdAt' | 'status' | 'referenceId'>) => {
    const randomRef = 'SDJ-' + Math.floor(100000 + Math.random() * 900000);
    const newEnquiry: AdmissionEnquiry = {
      ...enquiryData,
      id: 'enq-' + Date.now(),
      referenceId: randomRef,
      status: 'Pending',
      createdAt: new Date().toLocaleString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setEnquiries((prev) => [newEnquiry, ...prev]);
    return randomRef;
  };

  const updateEnquiryStatus = (id: string, status: EnquiryStatus, adminNotes?: string) => {
    setEnquiries((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              status,
              ...(adminNotes !== undefined ? { adminNotes } : {})
            }
          : e
      )
    );
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  };

  const updateAdminCredentials = (creds: Partial<AdminCredentials>) => {
    setAdminCredentials((prev) => ({
      ...prev,
      ...creds
    }));
  };

  const loginAdmin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('sdjps_admin_auth', 'true');
    setAdminCredentials((prev) => ({
      ...prev,
      lastLogin: new Date().toLocaleString('en-IN')
    }));
  };

  const logoutAdmin = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('sdjps_admin_auth');
  };

  const resetAllToDefaults = () => {
    setSchoolInfo(SCHOOL_INFO);
    setNotices(NOTICES);
    setFaculty(FACULTY_MEMBERS);
    setFacilities(FACILITIES);
    setGalleryItems(GALLERY_ITEMS);
    setEnquiries(INITIAL_ENQUIRIES);
    setAdminCredentials(DEFAULT_CREDENTIALS);
    localStorage.removeItem('sdjps_school_info');
    localStorage.removeItem('sdjps_notices');
    localStorage.removeItem('sdjps_faculty');
    localStorage.removeItem('sdjps_facilities');
    localStorage.removeItem('sdjps_gallery');
    localStorage.removeItem('sdjps_enquiries');
    localStorage.removeItem('sdjps_admin_creds');
  };

  return (
    <SchoolDataContext.Provider
      value={{
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
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        adminCredentials,
        updateAdminCredentials,
        isAuthenticated,
        loginAdmin,
        logoutAdmin,
        resetAllToDefaults
      }}
    >
      {children}
    </SchoolDataContext.Provider>
  );
};

export const useSchoolData = (): SchoolDataContextType => {
  const context = useContext(SchoolDataContext);
  if (!context) {
    throw new Error('useSchoolData must be used within a SchoolDataProvider');
  }
  return context;
};
