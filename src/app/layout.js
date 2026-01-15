import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import HomeNav from "@/components/Navbar/HomeNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
});

export const metadata = {
  title: "HELIOS FINTECH",
  description: "This is fintech website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <HomeNav />
          <main className="pt-[80px] min-h-screen">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
