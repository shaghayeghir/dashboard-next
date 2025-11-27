"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/auth.store";


export const useAuthInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });
        if (!res.ok) throw new Error();
        const data = await res.json();

        if (data?.user) {
          dispatch(
            setAuth({
              user: data.user,
              isAuthenticated: true,
            })
          );
        } else {
          dispatch(setAuth({ user: null, isAuthenticated: false }));
        }
      } catch {
        dispatch(setAuth({ user: null, isAuthenticated: false }));
      }
    };

    checkUser();
  }, [dispatch]);
};
