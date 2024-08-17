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
