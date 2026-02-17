export interface DashboardStats {
  totalProjects: number;
  blogPosts: number;
  messages: number;
  visitors: number;
}

export interface RecentActivity {
  id: string;
  title: string;
  type: "project" | "blog" | "message" | "resume" | "other";
  timestamp: string;
}

export interface DashboardData {
  stats: DashboardStats;
  recentActivity: RecentActivity[];
}

export interface DashboardStoreInterface extends DashboardData {
  updateStats: (stats: Partial<DashboardStats>) => void;
  addActivity: (activity: RecentActivity) => void;
  resetDashboard: () => void;
}
