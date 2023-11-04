import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Nav from "./navbar.js";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
