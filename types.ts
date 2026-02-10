/**
 * @name TitansHub_TypeRegistry
 * @author Techy Dudes (Kasi Prasath K & Praveen Raj M)
 * @version 27.0.0
 * @description Centralized TypeScript definitions for NPRCET IT Hub.
 */

// --- 1. IDENTITY & AUTHENTICATION ---
export type UserRole = "STUDENT" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  rollNo?: string;
}

// --- 2. ACADEMIC INFRASTRUCTURE ---
export interface Subject {
  id: string;
  name: string;
  code: string;
  attended: number;
  total: number;
}

export interface Material {
  id: string;
  title: string;
  subject: string;
  category: string; // 'Notes' | 'Syllabus' | 'Assignment' | 'Question Bank'
  file_url: string;
  file_name?: string;
  file_type?: string;
  uploaded_by?: string;
  created_at?: string;
}

export interface ScheduleItem {
  id: string;
  day: string; // 'Day 1' through 'Day 5'
  period_number: number; // 1 through 7
  start_time: string;
  end_time: string;
  subject_code: string;
  subject_name: string;
  faculty_initials: string;
  room: string;
  type: string; // 'Lecture' | 'Lab' | 'Seminar'
  created_at?: string;
}

// --- 3. TASK & PROJECT MANAGEMENT ---
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string; // Used in UI
  due_date?: string; // Used in DB sync
  folder: string; // 'General' | 'NPTEL' | 'Placement' | 'Mentor Institution'
  priority: "low" | "medium" | "high";
  createdBy?: string;
  created_by?: string; // DB sync mapping
}

// --- 4. COMMUNICATION & RECORDS ---
export interface SocialMessage {
  id: string;
  user_name: string; // Matches DB
  userName?: string; // Local fallback
  role: UserRole;
  content: string;
  image_url?: string;
  timestamp: number;
  likes: number;
  feed_type: "general" | "dept";
  created_at?: string;
}

export interface LeaveRequest {
  id: string;
  student_name: string;
  student_roll_no: string;
  leave_date: string;
  reason: string;
  status: "pending" | "approved" | "rejected" | "forwarded";
  authorized_by?: string;
  created_at?: string;
}

export interface Complaint {
  id: string;
  studentName: string;
  student_name?: string; // DB mapping
  content: string;
  timestamp: number | string;
  status: "pending" | "resolved";
  created_at?: string;
}

// --- 5. CAMPUS FEED & BRANDING ---
export interface CampusEvent {
  id: string;
  title: string;
  event_date?: string; // DB mapping
  date: string; // UI mapping
  time: string;
  venue: string;
  description: string;
  created_at?: string;
}

export interface TitansTodayImage {
  id: string;
  data: string; // Holds the URL or Base64
  image_url?: string; // DB direct mapping
  caption?: string;
  uploadDate: string;
  upload_date?: string; // DB mapping
}

export interface Achievement {
  id: string;
  studentName: string;
  studentAvatar?: string;
  image: string;
  title: string;
  date: string;
  likes: number;
}

// --- 6. MENTORSHIP & FACULTY ---
export interface Faculty {
  id: string;
  name: string;
  role: string;
  department: string;
  experience: string;
  email: string;
  phone: string;
  avatarInitials: string;
  imageUrl?: string; // Optional for faculty photos
}

export interface MentorStudent {
  id: string;
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  busRoute: string;
  address?: string;
}

export interface Mentor {
  id: string;
  name: string;
  department: string;
  email: string;
  students: MentorStudent[];
}

// --- 7. FILE STORAGE & AI ---
export interface StudentDocument {
  id: string;
  student_id: string;
  doc_type: string;
  file_name: string;
  file_url: string;
  file_type: string;
  created_at: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: number;
}
