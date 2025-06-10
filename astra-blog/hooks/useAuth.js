// hooks/useAuth.js
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.replace("/unauthorized"); // replace lebih baik dari push untuk auth
    } else {
      setIsLoading(false);
    }
  }, [router]);

  return { isLoading };
};