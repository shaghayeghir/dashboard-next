"use client";

import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboard.service";

export const useDashboard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: DashboardService,
  });

  return {
    data,
    error,
    isLoading,
  };
};
