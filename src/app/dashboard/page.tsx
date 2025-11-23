"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);

  return <h2>Welcome {user?.email}</h2>;
}
