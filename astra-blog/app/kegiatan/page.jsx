import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Maskot from "@/components/Maskot";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

const GroupCard = ({ item }) => (
  <Link href={item.link} className="block group">
    <article className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={item.imageUrl}
        alt={item.name}
        fill
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-md">
          {item.name}
        </h3>
        <p className="text-white/90 text-sm mt-1">{item.typeLabel}</p>
      </div>
    </article>
  </Link>
);

export default async function KegiatanIndexPage() {
  const supabase = await createClient();

  const { data: allKegiatan } = await supabase
    .from("kegiatan")
    .select("target_id");
  const { data: chapters } = await supabase
    .from("chapters")
    .select("id, name, image_url");
  const { data: collaborations } = await supabase
    .from("collaborations")
    .select("id, partner_name, image_url");

  if (!allKegiatan || !chapters || !collaborations) {
    return <p>Gagal memuat data. Coba lagi nanti.</p>;
  }

  const activeTargetIds = new Set(allKegiatan.map((k) => k.target_id));

  const activeChapters = chapters
    .filter((c) => activeTargetIds.has(c.id))
    .map((c) => ({
      id: c.id,
      name: c.name,
      imageUrl: c.image_url,
      typeLabel: "Chapter",
      link: `/kegiatan/chapter-${encodeURIComponent(c.name)}`,
    }));

  const activeCollaborations = collaborations
    .filter((c) => activeTargetIds.has(c.id))
    .map((c) => ({
      id: c.id,
      name: c.partner_name,
      imageUrl: c.image_url,
      typeLabel: "KolaborAksi",
      link: `/kegiatan/kolaborasi-${encodeURIComponent(c.partner_name)}`,
    }));

  const displayItems = [...activeChapters, ...activeCollaborations];

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="py-24 sm:py-32 flex-grow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Galeri Kegiatan
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pilih Chapter atau Mitra KolaborAksi untuk melihat dokumentasi
              kegiatan yang telah kami selenggarakan bersama.
            </p>
          </div>
          <div className="mt-16">
            {displayItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayItems.map((item) => (
                  <GroupCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-lg">
                Saat ini belum ada kegiatan yang didokumentasikan.
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
