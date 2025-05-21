import { Geist, Geist_Mono } from "next/font/google";
import Form from "@/components/Form";
import "./globals.css";

import Navbar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agustin Silva Frontend",
  description: "Portfolio Agustin Silva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <Navbar/>
        {children}
        <Form/>
      <div className="bg-[#282828] mx-auto text-center p-5 text-[19px]">
        <h3>Copyright © 2025 Agustin Silva Todos los derechos reservados.</h3>
      </div>
      </body>
    </html>
  );
}
