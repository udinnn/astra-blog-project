import { AuthProvider } from "@/hooks/useAuth";

export default function AdminLayout({ children }) {
  return (
    // Semua halaman di dalam /admin sekarang memiliki akses ke context auth
    <AuthProvider>{children}</AuthProvider>
  );
}
