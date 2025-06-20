// components/LexicalTheme.js

// Contoh tema sederhana menggunakan kelas Tailwind CSS
const theme = {
  // Tema untuk node heading
  heading: {
    h1: "text-3xl font-bold mb-4",
    h2: "text-2xl font-semibold mb-3",
  },
  // Tema untuk node list
  list: {
    nested: {
      listitem: "ml-8",
    },
    ol: "list-decimal ml-6",
    ul: "list-disc ml-6",
    listitem: "mb-2",
  },
  // Tema untuk node link
  link: "text-blue-600 hover:underline",
  // Tema untuk node quote
  quote: "pl-4 border-l-4 border-gray-300 italic text-gray-600 my-4",
  // Tema untuk blok kode
  code: "bg-gray-100 text-sm font-mono p-1 rounded-md",
  // Tema untuk format teks dasar
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    code: "bg-gray-100 text-sm font-mono p-1 rounded-md mx-1",
  },
};

export default theme;