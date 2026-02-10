import React, { useState, useEffect } from "react";
import {
  User,
  UserRole,
  Subject,
  Task,
  ScheduleItem,
  SocialMessage,
  LeaveRequest,
  Complaint,
  CampusEvent,
  Material,
  TitansTodayImage,
  Achievement,
} from "./types";

/**
 * --- INSTITUTIONAL DATA SOURCE ---
 */
import {
  SUBJECTS_INITIAL,
  MOCK_EVENTS,
  MOCK_FACULTY,
  MOCK_MENTORS,
} from "./constants";

import { supabase, isSupabaseLinked } from "./lib/supabase";

/**
 * --- NEURAL COMPONENT REGISTRY ---
 */
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Schedule from "./components/Schedule";
import Attendance from "./components/Attendance";
import ToDo from "./components/ToDo";
import Social from "./components/Social";
import Layout from "./components/Layout";
import MentorView from "./components/MentorView";
import StaffView from "./components/StaffView";
import EventsView from "./components/EventsView";
import AboutView from "./components/AboutView";
import AIChat from "./components/AIChat";
import ComplaintBox from "./components/ComplaintBox";
import AdminPanel from "./components/AdminPanel";
import DocumentsView from "./components/DocumentsView";
import MaterialsView from "./components/MaterialsView";
import AdminVaultView from "./components/AdminVaultView";
import Settings from "./components/Settings";
import BrandingView from "./components/BrandingView";

/**
 * @name TitansHub_NeuralCore_v26
 * @author Techy Dudes (Kasi Prasath K & Praveen Raj M)
 * @description Centralized brain for NPRCET IT Hub.
 * Manages all 60 students and 8 Strategic Admin Modules.
 */
const App: React.FC = () => {
  // --- 1. CORE IDENTITY STATES ---
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  // --- 2. ACADEMIC DATA STATES (Cloud-Synced) ---
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>(SUBJECTS_INITIAL);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [globalTasks, setGlobalTasks] = useState<Task[]>([]);

  // --- 3. COMMUNICATION & RECORDS ---
  const [socialMessages, setSocialMessages] = useState<SocialMessage[]>([]);
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [events, setEvents] = useState<CampusEvent[]>(MOCK_EVENTS);

  // --- 4. CAMPUS FEED & HUB CONFIG ---
  const [todayImages, setTodayImages] = useState<TitansTodayImage[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [newsTicker, setNewsTicker] = useState(
    "🔔 NPRCET IT Department • Portal Sync Live • Official Records Must Be Updated In Cloud Vault • Techy Dudes",
  );
  const [currentDayOrder, setCurrentDayOrder] = useState<string>("Day 1");

  // --- 5. ADMIN CONTROL PARAMETERS ---
  const [nptelTaskDefs, setNptelTaskDefs] = useState<string[]>(
    Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`),
  );
  const [mentorTaskDefs, setMentorTaskDefs] = useState<string[]>([
    "IA-1 Completion",
    "NPTEL Certified",
    "Project Sync",
    "Internship Log",
    "Placement Hub",
  ]);

  // --- 6. SYSTEM HYDRATION (STARTUP FETCH) ---
  useEffect(() => {
    const fetchInstitutionalData = async () => {
      console.log("[System]: Initializing NPRCET Cloud Link...");

      if (isSupabaseLinked) {
        try {
          // A. Sync Timetable
          const { data: dbSchedule } = await supabase
            .from("timetable")
            .select("*")
            .order("period_number", { ascending: true });
          if (dbSchedule) setSchedule(dbSchedule);

          // B. Sync Hub Config
          const { data: config } = await supabase
            .from("global_config")
            .select("*")
            .eq("id", "institutional_sync")
            .maybeSingle();
          if (config) {
            setNewsTicker(config.news_ticker);
            setCurrentDayOrder(config.day_order);
          }

          // C. Sync Campus Feed
          const { data: dbEvents } = await supabase
            .from("events")
            .select("*")
            .order("created_at", { ascending: false });
          if (dbEvents) setEvents(dbEvents);

          const { data: dbSpotlight } = await supabase
            .from("titans_today")
            .select("*")
            .order("created_at", { ascending: false });
          if (dbSpotlight) {
            setTodayImages(
              dbSpotlight.map((d: any) => ({
                id: d.id,
                data: d.image_url,
                caption: d.caption,
                uploadDate: d.upload_date,
              })),
            );
          }

          // D. Sync Digital Library
          const { data: dbLibrary } = await supabase
            .from("materials")
            .select("*")
            .order("created_at", { ascending: false });
          if (dbLibrary) setMaterials(dbLibrary);
        } catch (err) {
          console.error("Neural Sync Failure:", err);
        }
      }

      // E. Hydrate Session
      const savedUser = localStorage.getItem("titans_user");
      if (savedUser) setUser(JSON.parse(savedUser));

      // F. Splash Animation (4.5s)
      setTimeout(() => setIsSplashScreen(false), 4500);
    };

    fetchInstitutionalData();
  }, []);

  // --- 7. PERSISTENCE ---
  useEffect(() => {
    if (user) localStorage.setItem("titans_user", JSON.stringify(user));
  }, [user]);

  // --- 8. AUTH HANDLERS ---
  const handleLogin = (
    name: string,
    role: UserRole,
    rollNo?: string,
    avatar?: string,
    dbId?: string,
  ) => {
    const newUser: User = {
      id: dbId || name.toLowerCase().replace(/\s/g, "_"),
      name,
      email: `${name.toLowerCase().replace(/\s/g, ".")}@nprcolleges.org`,
      role,
      rollNo: rollNo || "",
      avatar:
        avatar ||
        `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
    };
    setUser(newUser);
    setActiveTab("dashboard");
  };

  const handleLogout = () => {
    if (confirm("Terminate authorized session?")) {
      setUser(null);
      localStorage.removeItem("titans_user");
    }
  };

  // --- 9. SPLASH SCREEN ---
  // --- 9. INSTITUTIONAL SPLASH SCREEN (CLEAN LOGO VERSION) ---
  if (isSplashScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden">
        {/* Atmosphere Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#00A9FF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#89CFF3]/5 rounded-full blur-[100px]"></div>

        <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-1000">
          {/* LOGO: Box removed, added subtle drop shadow to the image itself */}
          <div className="mb-12 transform hover:scale-105 transition-transform duration-700">
            <img
              src="/logo.jpeg"
              className="w-48 sm:w-64 h-auto drop-shadow-[0_20px_50px_rgba(0,169,255,0.2)] animate-pulse"
              alt="NPRCET Logo"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          {/* TEXT ANIMATION */}
          <div className="text-center">
            <h1 className="text-6xl sm:text-9xl font-black tracking-tighter text-slate-900 leading-none">
              TITANS<span className="text-[#00A9FF]">HUB</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-8 bg-slate-200"></div>
              <p className="text-[10px] sm:text-[14px] font-black uppercase tracking-[1em] text-slate-300 ml-[1em]">
                Information Technology
              </p>
              <div className="h-px w-8 bg-slate-200"></div>
            </div>
          </div>

          {/* PREMIUM LOADING BAR */}
          <div className="mt-20 w-64 sm:w-[480px] h-1 bg-slate-50 rounded-full overflow-hidden relative border border-slate-50/50">
            <div className="h-full bg-gradient-to-r from-[#00A9FF] via-[#89CFF3] to-[#0077B6] animate-[institutionalLoad_4s_ease-in-out_forwards]"></div>
          </div>

          {/* BRANDING FOOTER */}
          <div className="mt-16 flex flex-col items-center gap-3 opacity-0 animate-[fadeIn_1s_2.5s_forwards]">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-200">
              Synthesized By
            </p>
            <p className="text-2xl font-black text-slate-900 uppercase tracking-widest">
              TECHY<span className="text-[#00A9FF]">DUDES</span>
            </p>
          </div>
        </div>

        <style>{`
          @keyframes institutionalLoad { 0% { width: 0%; } 100% { width: 100%; } }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>
    );
  }

  // Security Gate
  if (!user) return <Login onLogin={handleLogin} />;

  // --- 10. MASTER TERMINAL ROUTING ---
  return (
    <Layout
      user={user}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onLogout={handleLogout}
      newsTicker={newsTicker}
    >
      <div
        key={activeTab}
        className="page-enter max-w-7xl mx-auto px-1 sm:px-4 pb-24"
      >
        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <Dashboard
            user={user}
            setUser={setUser}
            tasks={globalTasks}
            materials={materials}
            todayImages={todayImages}
            achievements={achievements}
            setAchievements={setAchievements}
            setActiveTab={setActiveTab}
            currentDayOrder={currentDayOrder}
          />
        )}

        {/* ACADEMICS */}
        {activeTab === "schedule" && (
          <Schedule user={user} schedule={schedule} setSchedule={setSchedule} />
        )}
        {activeTab === "materials" && (
          <MaterialsView materials={materials} subjects={subjects} />
        )}

        {/* RECORDS */}
        {activeTab === "vault" &&
          (user.role === "ADMIN" ? (
            <AdminVaultView />
          ) : (
            <DocumentsView user={user} />
          ))}
        {activeTab === "attendance" && <Attendance user={user} />}
        {activeTab === "todo" && (
          <ToDo user={user} tasks={globalTasks} setTasks={setGlobalTasks} />
        )}

        {/* COMMUNITY */}
        {activeTab === "social" && (
          <Social
            user={user}
            messages={socialMessages}
            setMessages={setSocialMessages}
          />
        )}
        {activeTab === "mentor" && <MentorView user={user} />}
        {activeTab === "aichat" && <AIChat />}
        {activeTab === "events" && <EventsView events={events} />}

        {/* STAFF & ADMINISTRATION (8 CARDS) */}
        {activeTab === "staff" &&
          (user.role === "ADMIN" ? (
            <AdminPanel
              user={user}
              subjects={subjects}
              setSubjects={setSubjects}
              tasks={globalTasks}
              setTasks={setGlobalTasks}
              schedule={schedule}
              setSchedule={setSchedule}
              complaints={complaints}
              setComplaints={setComplaints}
              leaveRequests={leaveRequests}
              setLeaveRequests={setLeaveRequests}
              events={events}
              setEvents={setEvents}
              materials={materials}
              setMaterials={setMaterials}
              newsTicker={newsTicker}
              setNewsTicker={setNewsTicker}
              currentDayOrder={currentDayOrder}
              setCurrentDayOrder={setCurrentDayOrder}
              todayImages={todayImages}
              setTodayImages={setTodayImages}
              nptelTaskDefs={nptelTaskDefs}
              setNptelTaskDefs={setNptelTaskDefs}
              mentorTaskDefs={mentorTaskDefs}
              setMentorTaskDefs={setMentorTaskDefs}
            />
          ) : (
            <StaffView />
          ))}

        {/* SUPPORT */}
        {activeTab === "complaint" && (
          <ComplaintBox
            user={user}
            complaints={complaints}
            setComplaints={setComplaints}
          />
        )}
        {activeTab === "about" && <AboutView setActiveTab={setActiveTab} />}
        {activeTab === "branding" && <BrandingView />}
        {activeTab === "settings" && <Settings user={user} setUser={setUser} />}
      </div>
    </Layout>
  );
};

export default App;
