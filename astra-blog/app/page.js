
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
      <div className="absolute inset-x-0 top-3/4 bg-white rounded-3xl mt-4 sm:mt-6 md:mt-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-4 sm:mt-6 md:mt-10">
          TESTIMONI
        </h2>

        {/* Flex container yang berubah menjadi column pada mobile */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-2 py-4 sm:py-6 md:py-8 px-4 sm:px-2">
          {/* Testimoni 1 */}
          <div className="inline-flex flex-col justify-center items-center text-left p-2 max-w-full">
            <Image
              src="/assets/teenagers.jpg"
              alt="testimoni"
              width={300}
              height={100}
              className="rounded-t-3xl w-[250px] sm:w-[270px] md:w-[300px] h-auto"
            />
            <div className="w-[250px] sm:w-[270px] md:w-[300px] text-justify mt-2">
              <p className="text-sm sm:text-base">
                menurut saya program ini sangat membantu bagi kami para remaja
                yang membutuhkan career review dan lain sebagainya oleh karena
                itu saya menulis testimoni ini
              </p>
            </div>
          </div>

          {/* Testimoni 2 */}
          <div className="inline-flex flex-col justify-center items-center text-left p-2 max-w-full">
            <Image
              src="/assets/teenagers.jpg"
              alt="testimoni"
              width={300}
              height={100}
              className="rounded-t-3xl w-[250px] sm:w-[270px] md:w-[300px] h-auto"
            />
            <div className="w-[250px] sm:w-[270px] md:w-[300px] text-justify mt-2">
              <p className="text-sm sm:text-base">
                menurut saya program ini sangat membantu bagi kami para remaja
                yang membutuhkan career review dan lain sebagainya oleh karena
                itu saya menulis testimoni ini
              </p>
            </div>
          </div>

          {/* Testimoni 3 */}
          <div className="inline-flex flex-col justify-center items-center text-left p-2 max-w-full">
            <Image
              src="/assets/teenagers.jpg"
              alt="testimoni"
              width={300}
              height={100}
              className="rounded-t-3xl w-[250px] sm:w-[270px] md:w-[300px] h-auto"
            />
            <div className="w-[250px] sm:w-[270px] md:w-[300px] text-justify mt-2">
              <p className="text-sm sm:text-base">
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
      <div className="absolute bottom-0 right-0 mb-[5vh] md:mb-[15vh] lg:mb-[25vh] mr-[2vw]">
        <div className="relative">
          {/* Gambar Aryo */}
          <Image
            src="/assets/Aryo.png"
            alt="Maskot"
            width={500}
            height={500}
            className="w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] h-auto"
            style={{ transform: "translateY(40%)" }}
          />

          {/* Embed Video YouTube */}
          <div className="absolute top-0 left-0 -translate-x-[60%] sm:-translate-x-[65%] md:-translate-x-[70%] lg:-translate-x-[75%]">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg shadow-lg w-[200px] h-[113px] sm:w-[240px] sm:h-[135px] md:w-[280px] md:h-[158px] lg:w-[320px] lg:h-[180px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
