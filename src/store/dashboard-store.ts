import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { DashboardStoreInterface, DashboardData, RecentActivity } from "@/common/interfaces/dashboard-interface";

const initialDashboardData: DashboardData = {
  stats: {
    totalProjects: 0,
    blogPosts: 0,
    messages: 0,
    visitors: 0
  },
  recentActivity: []
};

export const useDashboardStore = create<DashboardStoreInterface>()(
  persist(
    (set, get) => ({
      ...initialDashboardData,

      updateStats: (stats: Partial<DashboardData["stats"]>) => {
        set((state) => ({
          stats: { ...state.stats, ...stats }
        }));
      },

      addActivity: (activity: RecentActivity) => {
        set((state) => ({
          recentActivity: [activity, ...state.recentActivity]
        }));
      },

      resetDashboard: () => set(() => ({ ...initialDashboardData }))
    }),
    {
      name: "dashboard",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);