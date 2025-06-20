import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  variable: "--font-DM-Sans",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  title: "AORTA Community",
  description:
    "Aksi Solidaritas Remaja Kesehatan Astra atau yang dikenal dengan AORTA Community merupakan suatu komunitas binaan PT. Astra Internasional Tbk yang memiliki kepedulian terhadap isu-isu kesehatan remaja di Indonesia. AORTA dikukuhkan untuk pertama kalinya pada tanggal 21 November 2019 di Belitung oleh Chief of Corporate Affair Astra Bapak Riza Deliansyah didampingi oleh Deputi Pencegahan BNN Bapak Drs. Anjan Pramuka Putra, SH. M. Hum dan Sekretaris utama BKKBN Bapak H. Nofrizal, S. P, MA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable}`}>{children}</body>
    </html>
  );
}
