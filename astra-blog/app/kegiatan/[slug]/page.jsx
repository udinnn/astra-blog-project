import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Maskot from "@/components/Maskot";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import KegiatanGrid from "@/components/KegiatanGrid";

export default async function KegiatanDetailPage({ params }) {
  const supabase = await createClient();
  const decodedSlug = decodeURIComponent(params.slug);

  let targetId = null;
  let pageTitle = "";

  if (decodedSlug.startsWith("chapter-")) {
    const chapterName = decodedSlug.replace("chapter-", "");
    const { data: chapter } = await supabase
      .from("chapters")
      .select("id, name")
      .eq("name", chapterName)
      .single();
    if (chapter) {
      targetId = chapter.id;
      pageTitle = `Kegiatan Chapter ${chapter.name}`;
    }
  } else if (decodedSlug.startsWith("kolaborasi-")) {
    const partnerName = decodedSlug.replace("kolaborasi-", "");
    const { data: collaboration } = await supabase
      .from("collaborations")
      .select("id, partner_name")
      .eq("partner_name", partnerName)
      .single();
    if (collaboration) {
      targetId = collaboration.id;
      pageTitle = `Kegiatan KolaborAksi: ${collaboration.partner_name}`;
    }
  }

  if (!targetId) {
    notFound();
  }

  const { data: kegiatanData } = await supabase
    .from("kegiatan")
    .select("*")
    .eq("target_id", targetId)
    .order("activity_date", { ascending: false });

  // PERUBAHAN KUNCI: Ubah string URL kembali menjadi array untuk setiap kegiatan
  const kegiatanWithImageArray = kegiatanData
    ? kegiatanData.map((item) => ({
        ...item,
        image_url:
          typeof item.image_url === "string" ? item.image_url.split(",") : [],
      }))
    : [];

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="py-24 sm:py-32 flex-grow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {pageTitle}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Klik pada gambar untuk melihat detail dari setiap kegiatan yang
              telah kami selenggarakan.
            </p>
          </div>
          <div className="mt-16">
            {kegiatanWithImageArray && kegiatanWithImageArray.length > 0 ? (
              <KegiatanGrid kegiatan={kegiatanWithImageArray} />
            ) : (
              <p className="text-center text-gray-500 text-lg">
                Belum ada kegiatan yang didokumentasikan untuk grup ini.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <Maskot />
    </div>
  );
}
