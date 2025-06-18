"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  // 👇 Tambahkan 'await' di sini
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Validasi dasar di server
  if (!data.email || !data.password) {
    return { message: "Email dan kata sandi wajib diisi." };
  }

  // Panggil fungsi otentikasi Supabase
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error("Supabase login error:", error.message);
    // Jika ada error, kembalikan pesan untuk ditampilkan di form
    return { message: "Email atau kata sandi salah. Silakan coba lagi." };
  }

  console.log("Login berhasil:", data.email);

  // Jika berhasil, revalidasi cache dan arahkan (redirect) ke halaman admin
  revalidatePath("/", "layout");
  redirect("/admin");
}
