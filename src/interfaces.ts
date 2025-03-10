export interface Portfolio {
  displayName: string;
  username: string;
  bio: string;
  photoURL: string;
  coverimage: string;
  technologyStack: string;
  portfolioClicks: number;
}

export interface PortfoliosResponse {
  portfolios: Portfolio[];
}
export interface ProjectsResponse {
  projects: Project[];
}
// types.ts
export interface Project {
  name: string;
  user: string;
  technologyStack: string;
  category: string;
  clicks: number;
  heroImage: string;
  description: string;
  nickName: string;
}

interface Timestamp {
  _seconds: number;
  _nanoseconds: number;
}

export interface UserProfile {
  creationTime: string;
  lastSignInTime: string;
  uid: string;
  emailVerified: boolean;
  providerId: string;
  disabled: boolean;
  lastRefreshTime: string;
  tokensValidAfterTime: string;
  timestamp: Timestamp;
  username: string;
  github: string;
  twitter: string;
  phone: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  others: string;
  coverimage: string;
  photoURL: string;
  displayName: string;
  bio: string;
  technologyStack: string;
  email: string;
  updatedAt: Timestamp;
}
