import Navbar from "@/components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import { Inter } from "next/font/google";
import SubNavbar from "@/components/SubNavbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GANGA EFWS Portal",
  description: "Powered by CWC",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <SubNavbar />
        </div>
        {children}
      </body>
    </html>
  );
}
