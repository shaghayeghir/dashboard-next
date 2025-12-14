"use client";

import { createContext, useContext, useState } from "react";

// 1) Type تعریف
type ClientLayoutContextType = {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
};

const ClientLayoutContext = createContext<ClientLayoutContextType | undefined>(
  undefined
);

// 3) Provider
export function ClientLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ClientLayoutContext.Provider value={{ drawerOpen, setDrawerOpen }}>
      {children}
    </ClientLayoutContext.Provider>
  );
}

// 4) Hook با چک کردن مقدار
export function useClientLayout() {
  const context = useContext(ClientLayoutContext);
  if (!context) {
    throw new Error("useClientLayout must be used within ClientLayoutProvider");
  }
  return context;
}
