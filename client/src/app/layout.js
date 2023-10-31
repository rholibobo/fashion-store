import "./globals.css";

import { Poppins } from "next/font/google";

import ThemeRegistry from "@/utils/ThemeRegistry";

import { Navbar } from "@/components/Header/Navbar";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fashion Store",
  description: "Online Fashion Marketplace and Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
