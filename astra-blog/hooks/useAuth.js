"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

// Buat Context untuk menampung data auth
const AuthContext = createContext();

// Buat Provider yang akan membungkus halaman admin Anda
export const AuthProvider = ({ children }) => {
  const supabase = createClient();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fungsi ini akan mengecek user saat komponen pertama kali dimuat
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setIsLoading(false);
    };

    checkUser();

    // Listener ini akan memantau perubahan status login/logout secara real-time
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false); // Update loading state juga di sini
    });

    // Berhenti me-listen saat komponen di-unmount
    return () => subscription.unsubscribe();
  }, [supabase]);

  // LOGIKA REDIRECT YANG BERMASALAH TELAH DIHAPUS DARI SINI

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {/* Tampilkan loading jika perlu, atau langsung tampilkan children */}
      {isLoading ? <div>Loading Admin...</div> : children}
    </AuthContext.Provider>
  );
};

// Hook custom yang akan digunakan di komponen lain
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
