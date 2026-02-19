import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ulyg Dog (ULGD) - The Ugliest Dog in the Crypto Game | 1 Billion Token Meme Coin",
  description: "Join the ugliest, most lovable dog on its journey to the moon! Ulyg Dog (ULGD) is a 1 billion token meme coin celebrating authenticity in a world of digital perfection. Get ULGD today!",
  keywords: ["Ulyg Dog", "ULGD", "meme coin", "crypto", "dog coin", "1 billion tokens", "Uglynomics", "decentralized finance"],
  openGraph: {
    title: "Ulyg Dog (ULGD) - The Ugliest Dog in the Crypto Game",
    description: "Join the ugliest, most lovable dog on its journey to the moon! Ulyg Dog (ULGD) is a 1 billion token meme coin celebrating authenticity in a world of digital perfection.",
    type: "website",
    url: "https://ulygdog.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulyg Dog (ULGD) - The Ugliest Dog in the Crypto Game",
    description: "Join the ugliest, most lovable dog on its journey to the moon! Ulyg Dog (ULGD) is a 1 billion token meme coin celebrating authenticity in a world of digital perfection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <Header />
        <main className="min-h-screen pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
