"use client";

import Image from "next/image";
import React, { useState } from "react";

const Maskot = () => {
  // Daftar pertanyaan dan jawaban
  const questions = [
    {
      id: 1,
      question: "Apa itu AORTA Community?",
      answer:
        "AORTA Community adalah komunitas remaja yang berfokus pada edukasi dan advokasi kesehatan reproduksi, mental, PHBS, Gizi dan pemberdayaan remaja melalui berbagai program dan kegiatan aksi Kesehatan.",
    },
    {
      id: 2,
      question: "Bagaimana cara bergabung dengan AORTA Community?",
      answer:
        "Kamu bisa bergabung dengan mengisi formulir pendaftaran di website kami atau menghubungi chapter AORTA terdekat di kotamu.",
    },
    {
      id: 3,
      question: "Apakah AORTA memiliki kegiatan di daerah saya?",
      answer:
        "AORTA memiliki 30 chapter yang tersebar di berbagai daerah. Silakan cek daftar chapter di website kami atau tanyakan langsung melalui chatbot ini dengan menyebutkan kota atau kabupatenmu.",
    },
    {
      id: 4,
      question: "Apa saja program yang dimiliki AORTA Community?",
      answer:
        "AORTA menyelenggarakan berbagai program seperti workshop kesehatan reproduksi, kampanye kesehatan mental, kegiatan sosial, dan pelatihan kepemimpinan remaja.",
    },
    {
      id: 5,
      question: "Bagaimana cara mengetahui jadwal kegiatan AORTA?",
      answer:
        "Informasi tentang jadwal kegiatan dapat ditemukan di website resmi AORTA Community atau melalui media sosial kami di Instagram @aortacommunity.",
    },
    {
      id: 6,
      question: "Apakah saya bisa menjadi volunteer di AORTA?",
      answer:
        "Tentu! AORTA selalu membuka kesempatan bagi remaja yang ingin berkontribusi sebagai relawan ataupun volunteer. Kamu bisa mendaftar melalui formulir yang tersedia di website kami atau hubungi kami via DM Instagram yaa.",
    },
    {
      id: 7,
      question: "Kenapa dinamakan “AORTA”?",
      answer: `Karena AORTA itu pembuluh darah utama yang menyalurkan kehidupan. Filosofinya: kami ingin jadi saluran energi positif dan pengetahuan tentang kesehatan remaja ke seluruh Indonesia. ❤

      Apa aja fokus isu AORTA Community?
      Kami punya 4 fokus utama, yaitu:
      1️⃣ Kesehatan Reproduksi Remaja
      2️⃣ Kesehatan Mental
      3️⃣ Perilaku Hidup Bersih dan Sehat (PHBS)
      4️⃣ Gizi Remaja

      AORTA di bawah siapa?
      Kami merupakan bagian dari program CSR Astra International melalui payung besar SATU Indonesia Awards — yang mendukung generasi muda berprestasi dan berdampak bagi masyarakat.

      Kegiatan AORTA biasanya seperti apa?
      Seru dan variatif! Ada:
      💬 Edukasi & kampanye kesehatan di sekolah dan kampus
      📱 Konten kreatif dan challenge di media sosial
      🎓 Workshop dan pelatihan remaja sehat
      🤝 Kolaborasi komunitas & kegiatan sosial
      🎉 Booth interaktif dan event nasional

      Apakah ada biaya untuk ikut kegiatan AORTA?
      Nggak ada! Semua kegiatan AORTA bersifat sosial dan edukatif, alias gratis. Kadang malah ada hadiah, sertifikat, atau merchandise untuk peserta aktif.

      Apakah AORTA hanya fokus di kesehatan aja?
      Fokus utama kami memang kesehatan remaja, tapi kami juga membahas hal-hal seputar empowerment, kepemimpinan, dan gaya hidup positif — karena semua itu berhubungan dengan kesehatan secara menyeluruh. 🌱

      Apa aja manfaat ikut AORTA Community?
      ✨ Dapat ilmu tentang kesehatan remaja
      ✨ Bisa ikut kegiatan nasional & lokal
      ✨ Dapat e-sertifikat dan pengalaman organisasi
      ✨ Punya jejaring luas antar komunitas
      ✨ Jadi bagian dari gerakan remaja sehat Indonesia`,
    },
    {
      id: 8,
      question:
        "Bagaimana cara menghubungi AORTA jika saya memiliki pertanyaan lebih lanjut?",
      answer:
        "Kamu dapat menghubungi kami melalui email di communityaorta@gmail.com, WhatsApp melalui nomor 082211125539, atau melalui pesan langsung di akun media sosial resmi AORTA Community.",
    },
  ];

  // Fungsi untuk membuat teks pesan awal dengan format baris baru
  const generateInitialMessage = () => {
    const questionList = questions
      .map((q) => `${q.id}. ${q.question}`)
      .join("\n"); // Setiap pertanyaan akan berada di baris baru

    return `Halo! Saya AORTA Assistant.\nSilakan ketikkan nomor untuk mengetahui informasi yang dibutuhkan:\n\n${questionList}`;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: generateInitialMessage(), sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    setTimeout(() => {
      const userInput = inputMessage.trim().toLowerCase();
      let botResponseText;

      if (userInput === "menu") {
        botResponseText = generateInitialMessage();
      } else {
        const questionNumber = parseInt(userInput, 10);
        if (!isNaN(questionNumber)) {
          const selectedQuestion = questions.find(
            (q) => q.id === questionNumber
          );
          if (selectedQuestion) {
            botResponseText = selectedQuestion.answer;
            const followUpMessage = `\n\nKetik nomor lain atau ketik "menu" untuk melihat daftar pertanyaan lagi.`;
            botResponseText += followUpMessage;
          } else {
            botResponseText = `Nomor "${questionNumber}" tidak ada dalam daftar. Silakan pilih nomor dari 1 hingga ${questions.length} atau ketik "menu" untuk bantuan.`;
          }
        } else {
          botResponseText = `Format tidak valid. Mohon masukkan hanya nomor pertanyaan saja. Ketik "menu" untuk melihat daftar pertanyaan.`;
        }
      }

      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        sender: "bot",
      };

      setMessages((prev) => [...prev, { ...botResponse, id: prev.length + 1 }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Maskot */}
      <div className="fixed bottom-4 right-4 z-50">
        <Image
          src="/assets/chatbot.png"
          width={100}
          height={100}
          alt="maskot"
          className="cursor-pointer hover:scale-110 transition-transform duration-200 drop-shadow-xl"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Modal Chatbot */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-end justify-end z-50 p-4">
          <div className="w-full max-w-[400px] h-[600px] max-h-[90vh] rounded-2xl shadow-2xl border border-blue-200 bg-white flex flex-col animate-fadeIn overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-astraColor-100 to-blue-400 text-white p-4 flex justify-between items-center shadow-lg flex-shrink-0">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/chatbot.png"
                  width={36}
                  height={36}
                  alt="bot"
                  className="rounded-full border-2 border-white"
                />
                <span className="font-semibold text-lg">AORTA Assistant</span>
                <span className="ml-2 animate-pulse text-green-200 text-xs">
                  ● online
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 text-xl font-bold px-2 hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Tutup">
                ×
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-blue-50 via-white to-blue-50 custom-scrollbar min-h-0">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}>
                    {message.sender === "bot" && (
                      <Image
                        src="/assets/chatbot.png"
                        width={28}
                        height={28}
                        alt="bot"
                        className="rounded-full mr-2 self-end flex-shrink-0"
                      />
                    )}
                    <div
                      className={`relative px-4 py-2 rounded-2xl max-w-[85%] text-sm shadow-sm
                        ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white rounded-br-none"
                            : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                        }`}>
                      {/* PERUBAHAN DI SINI: Kelas 'message-text' ditambahkan */}
                      <div className="message-text">{message.text}</div>
                      {/* Chat bubbles tail */}
                      {message.sender === "user" && (
                        <div className="absolute right-[-10px] bottom-0 w-0 h-0 border-t-[8px] border-t-blue-500 border-l-[8px] border-l-transparent"></div>
                      )}
                      {message.sender === "bot" && (
                        <div className="absolute left-[-10px] bottom-0 w-0 h-0 border-t-[8px] border-t-white border-r-[8px] border-r-transparent"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder='Ketik nomor atau "menu"...'
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 text-sm min-w-0"
                />
                <button
                  onClick={handleSendMessage}
                  className="border-astraColor-100 border-2 text-black px-5 py-2 rounded-full font-semibold shadow hover:bg-astraColor-100 hover:text-white transition-all duration-200 flex-shrink-0">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      {/* PERUBAHAN DI SINI: CSS untuk menangani baris baru ditambahkan */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #93c5fd, #60a5fa);
          border-radius: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #60a5fa, #3b82f6);
        }

        .message-text {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          white-space: pre-line; /* Ini adalah properti kunci untuk menampilkan baris baru */
        }
      `}</style>
    </>
  );
};

export default Maskot;
