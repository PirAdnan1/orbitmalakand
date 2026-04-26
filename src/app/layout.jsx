// app/layout.jsx
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatingChat from "@/components/common/FloatingChat";

export const metadata = {
  title: "The Orbit School & College Malakand",
  description:
    "The Orbit School & College Malakand - Providing quality education from Playgroup to Intermediate (F.Sc) level. Empowering students with modern education since 2021.",
  keywords:
    "Orbit Malakand, school, college, education, Malakand, Pakistan, admissions",
  openGraph: {
    title: "The Orbit School & College Malakand",
    description:
      "Quality education from Playgroup to Intermediate level in Malakand, Pakistan.",
    images: [
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/orbit-logo-250x46.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
