"use client";

import Image from 'next/image'
import React, { useState } from 'react'

const Maskot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Saya adalah asisten virtual. Ada yang bisa saya bantu?", sender: "bot" }
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user"
    }

    setMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Terima kasih atas pesan Anda! Saya akan membantu Anda sebaik mungkin.",
        sender: "bot"
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)

    setInputMessage("")
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Maskot */}
      <div className='fixed bottom-4 right-4 z-50'>
        <Image
          src="/assets/chatbot.png"
          width={100}
          height={100}
          alt='maskot'
          className='cursor-pointer hover:scale-110 transition-transform duration-200 drop-shadow-xl'
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Modal Chatbot */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-end justify-end z-50 p-4">
          <div className="w-full max-w-[400px] h-[600px] max-h-[90vh] rounded-2xl shadow-2xl border border-blue-200 bg-white flex flex-col animate-fadeIn overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-4 flex justify-between items-center shadow-lg flex-shrink-0">
              <div className="flex items-center gap-2">
                <Image 
                  src="/assets/chatbot.png" 
                  width={36} 
                  height={36} 
                  alt="bot" 
                  className="rounded-full border-2 border-white" 
                />
                <span className="font-semibold text-lg">AORTA Assistant</span>
                <span className="ml-2 animate-pulse text-green-200 text-xs">● online</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 text-xl font-bold px-2 hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Tutup"
              >
                ×
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-blue-50 via-white to-blue-50 custom-scrollbar min-h-0">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <Image 
                        src="/assets/chatbot.png" 
                        width={28} 
                        height={28} 
                        alt="bot" 
                        className="rounded-full mr-2 self-end flex-shrink-0" 
                      />
                    )}
                    <div
                      className={`relative px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow-sm break-words
                        ${message.sender === 'user'
                          ? 'bg-blue-500 text-white rounded-br-none'
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      <div className="word-wrap break-words">
                        {message.text}
                      </div>
                      {/* Chat bubbles tail */}
                      {message.sender === 'user' && (
                        <div className="absolute right-[-10px] bottom-0 w-0 h-0 border-t-[8px] border-t-blue-500 border-l-[8px] border-l-transparent"></div>
                      )}
                      {message.sender === 'bot' && (
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
                  placeholder="Ketik pesan Anda..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 text-sm min-w-0"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-500 to-blue-400 text-black px-5 py-2 rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-500 transition-all duration-200 flex-shrink-0"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
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
        
        .word-wrap {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
      `}</style>
    </>
  )
}

export default Maskot