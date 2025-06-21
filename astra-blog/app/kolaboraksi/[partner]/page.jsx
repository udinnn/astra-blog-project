"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import Footer from "@/components/Footer";
import { Twitter, Facebook, Linkedin, Link2 } from "lucide-react";

// Anda bisa meletakkan komponen helper ini di file terpisah jika ingin
const PartnerLoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-[50vh] bg-gray-300"></div>
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto"></div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  </div>
);
const PartnerShareButtons = ({ title, url }) => {
  if (!url) return null;
  const text = `Check out this article: ${title}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  return (
    <div className="flex items-center gap-4 px-8">
      <p className="text-sm font-semibold text-gray-700">Share:</p>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-500">
        <Twitter size={20} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-700">
        <Facebook size={20} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600">
        <Linkedin size={20} />
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="text-gray-500 hover:text-green-600">
        <Link2 size={20} />
      </button>
    </div>
  );
};

const PartnerPage = () => {
  const { partner } = useParams();
  const decodedPartner = useMemo(
    () => decodeURIComponent(partner || ""),
    [partner]
  );

  const [partnerArticles, setPartnerArticles] = useState([]);
  const [partnerDetails, setPartnerDetails] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!decodedPartner) return;
    const loadData = async () => {
      setIsLoading(true);
      const supabase = createClient();

      const { data: partnerData } = await supabase
        .from("collaborations")
        .select("*")
        .eq("partner_name", decodedPartner)
        .single();
      const { data: articlesData } = await supabase
        .from("articles")
        .select("*")
        .eq("publish_type", "collaboration")
        .eq("target_name", decodedPartner)
        .order("publish_date", { ascending: false });

      setPartnerDetails(partnerData);
      const sortedArticles = articlesData || [];
      setPartnerArticles(sortedArticles);

      if (sortedArticles.length > 0) {
        setCurrentArticle(sortedArticles[0]);
      } else {
        setCurrentArticle(null);
      }
      setIsLoading(false);
    };
    loadData();
  }, [decodedPartner]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const calculateReadingTime = (htmlContent) => {
    if (typeof htmlContent !== "string" || !htmlContent) return 0;
    const text = htmlContent.replace(/<[^>]+>/g, "");
    return Math.ceil(text.split(/\s/g).length / 200);
  };

  if (isLoading) {
    return (
      <div className="bg-white">
        <Header />
        <PartnerLoadingSkeleton />
        <Footer />
      </div>
    );
  }

  if (!partnerDetails) {
    return <div className="text-center p-10">Partner not found.</div>;
  }

  return (
    <div className="bg-white">
      <Header />
      <Maskot />
      <main className="flex flex-col min-h-screen mt-12">
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src={partnerDetails.image_url || "/assets/placeholder.jpg"}
            alt={`Kolaborasi dengan ${decodedPartner}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col items-center justify-center p-8 text-center">
            <p className="text-white text-lg font-semibold tracking-widest uppercase">
              KolaborAksi Dengan
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg mt-2">
              {decodedPartner}
            </h1>
          </div>
        </div>
        {currentArticle ? (
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <article>
              <header className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  {currentArticle.title}
                </h2>
                <div className="flex items-center justify-center gap-x-4 mt-4 text-sm text-gray-500">
                  <p>Published on: {formatDate(currentArticle.publish_date)}</p>
                  <span>&middot;</span>
                  <p>{calculateReadingTime(currentArticle.content)} min read</p>
                </div>
              </header>
              <div
                className="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:text-gray-800 px-8 text-justify"
                dangerouslySetInnerHTML={{ __html: currentArticle.content }}
              />
              <footer className="mt-10 pt-4 border-t">
                <PartnerShareButtons
                  title={currentArticle.title}
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                />
              </footer>
            </article>
          </div>
        ) : (
          <div className="text-center py-20 px-4">
            <h2 className="text-2xl font-bold text-gray-800">
              No Articles Yet
            </h2>
            <p className="mt-2 text-gray-500">
              There are no published articles for this collaboration.
            </p>
          </div>
        )}
        {partnerArticles.length > 1 && (
          <aside className="w-full bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                More Articles from this Collaboration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {partnerArticles
                  .filter((article) => article.id !== currentArticle?.id)
                  .map((article) => (
                    <div
                      key={article.id}
                      className="bg-white border p-4 rounded-lg cursor-pointer"
                      onClick={() => setCurrentArticle(article)}>
                      <h4 className="font-bold text-lg text-gray-800 line-clamp-2">
                        {article.title}
                      </h4>
                    </div>
                  ))}
              </div>
            </div>
          </aside>
        )}
      </main>
      <Footer />
    </div>
  );
};
export default PartnerPage;
