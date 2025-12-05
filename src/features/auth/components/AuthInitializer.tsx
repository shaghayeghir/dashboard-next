"use client";

import { setUser } from "@/store/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        const data = await res.json();

        if (data?.user) {
          dispatch(setUser(data.user));
        }
      } catch (err) {
        console.log("User not logged in");
      }
    };

    fetchUser();
  }, [dispatch]);

  return null;
}
