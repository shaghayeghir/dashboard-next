"use client";

import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboard.service";

export const useDashboard = (page = 1, limit = 6) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", page], // 👈 page تو queryKey مهمه
    queryFn: () => DashboardService(page, limit), // 👈 ارسال page و limit
    placeholderData: (oldData) => oldData,
  });

  return {
    data,
    error,
    isLoading,
  };
};
