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
