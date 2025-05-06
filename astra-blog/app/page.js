import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Maskot from "@/Components/Maskot";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Maskot />
      {/* Container di depan Hero */}
      <div className="absolute inset-x-0 top-3/4 bg-white rounded-3xl mt-8">
        <h2 className="text-4xl font-bold text-center mt-10">TESTIMONI</h2>
        <div className="flex flex-row flex-grow justify-around items-start space-x-2 py-8">
          <div className="inline-flex flex-col justify-center items-center text-left p-2">
            <Image
              src="/assets/teenagers.jpg"
              alt="tertimoni"
              width={300}
              height={100}
              className="rounded-t-3xl"
            />
            <div className="w-[300px] text-justify mt-2">
              <p>
                menurut saya program ini sangat membantu bagi kami para remaja
                yang membutuhkan career review dan lain sebagainya oleh karena
                itu saya menulis testimoni ini
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col justify-center items-center text-left p-2">
            <Image
              src="/assets/teenagers.jpg"
              alt="tertimoni"
              width={300}
              height={100}
              className="rounded-t-3xl"
            />
            <div className="w-[300px] text-justify mt-2">
              <p>
                menurut saya program ini sangat membantu bagi kami para remaja
                yang membutuhkan career review dan lain sebagainya oleh karena
                itu saya menulis testimoni ini
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col justify-center items-center text-left p-2">
            <Image
              src="/assets/teenagers.jpg"
              alt="tertimoni"
              width={300}
              height={100}
              className="rounded-t-3xl"
            />
            <div className="w-[300px] text-justify mt-2">
              <p>
                menurut saya program ini sangat membantu bagi kami para remaja
                yang membutuhkan career review dan lain sebagainya oleh karena
                itu saya menulis testimoni ini
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Gambar Maskot */}
      <div className="absolute bottom-0 right-0 mb-[25vh] mr-[2vw]">
        <Image
          src="/assets/maskot.png"
          alt="Maskot"
          width={500}
          height={500}
          className="relative w-[25vw] h-auto"
          style={{ transform: "translateY(25%)" }}
        />
        {/* Embed Video YouTube */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4 mt-8">
          <iframe
            width={400}
            height={225}
            style={{
              width: "calc(20vw + 100px)",
              height: "calc(11.25vw + 56.25px)", // Maintains 16:9 aspect ratio
              minWidth: "320px",
              minHeight: "180px",
            }}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-lg shadow-lg"></iframe>
        </div>
      </div>
    </div>
  );
}
