"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import Footer from "@/Components/Footer";

const CityPage = () => {
  const { city } = useParams();
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [chapterDetails, setChapterDetails] = useState(null);

  useEffect(() => {
    // Load all articles and chapter details from localStorage
    const loadData = () => {
      const savedArticles = JSON.parse(
        localStorage.getItem("articles") || "[]"
      );
      const savedChapters = JSON.parse(
        localStorage.getItem("chapters") || "[]"
      );

      // Find articles for this city
      const cityArticles = savedArticles
        .filter(
          (article) =>
            article.publishType === "chapter" &&
            article.target === decodeURIComponent(city)
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      // Find chapter details
      const chapterInfo = savedChapters.find(
        (chapter) => chapter.name === decodeURIComponent(city)
      );

      setArticles(cityArticles);
      setChapterDetails(chapterInfo);

      // Set the most recent article as the current one to display
      if (cityArticles.length > 0) {
        setCurrentArticle(cityArticles[0]);
      }
    };

    loadData();

    // Refresh when localStorage changes
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("storage", loadData);
    };
  }, [city]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // If there's no data yet, show a loading message
  if (!chapterDetails && !currentArticle) {
    return (
      <div>
        <Header />
        <Maskot />
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading chapter information...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Maskot />

      <div className="flex flex-col min-h-screen mt-12">
        {/* Hero Image/Banner */}
        <div className="relative w-full h-[75vh]">
          <img
            src="/api/placeholder/1920/1080"
            alt={`${city} Chapter Image`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold text-center">
              AORTA Chapter {decodeURIComponent(city)}
            </h1>
          </div>
        </div>

        {/* Chapter Info
        {chapterDetails && (
          <div className="flex flex-col items-center p-8">
            <div className="max-w-4xl w-full">
              <p className="text-lg font-medium">
                Chapter established:{" "}
                {chapterDetails.chapterDate
                  ? formatDate(chapterDetails.chapterDate)
                  : "Date not available"}
              </p>
            </div>
          </div>
        )} */}

        {/* Article Content */}
        {currentArticle ? (
          <div className="flex flex-col items-center p-8 space-y-8">
            {/* Article Title */}
            <h2 className="text-3xl font-bold text-center">
              {currentArticle.title}
            </h2>

            {/* Article Date */}
            <p className="text-sm font-medium text-gray-500 text-center">
              Published on: {formatDate(currentArticle.date)}
            </p>

            {/* Article Content */}
            <div className="max-w-4xl text-justify space-y-6">
              {currentArticle.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center p-8">
            <p className="text-lg">
              No articles available for this chapter yet. Publish an article
              using the New Article form.
            </p>
          </div>
        )}

        {/* More Articles Section */}
        {articles.length > 1 && (
          <div className="max-w-4xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.slice(1).map((article) => (
                <div
                  key={article.id}
                  className="border p-4 rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => setCurrentArticle(article)}>
                  <h4 className="font-bold text-lg">{article.title}</h4>
                  <p className="text-sm text-gray-500">
                    {formatDate(article.date)}
                  </p>
                  <p className="line-clamp-2 mt-2">
                    {article.content.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CityPage;
