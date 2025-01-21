import { Inter } from "next/font/google";
import "./globals.css"; 
import Header from '@/components/Header'
  
const interTight = Inter({
  subsets: ["latin"],
  variable: "--font-intertight",
  display: "swap", // Optimize rendering
  weight: ["700", "800"], // Specify weights for titles
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"], // Specify weights for body text
});

export const metadata = {
  title: "Symliq",
  description: "Professional Software Development Company in Accra, Ghana. Looking for expert software solutions to drive business growth? Our software development company specializes in mobile app development, custom software solutions, scalable e-commerce platforms, and innovative education software. We deliver secure, reliable, and tailored software solutions to meet your business needs. Partner with our experienced development team in Ghana to boost your business with cutting-edge technology. Empower your growth with scalable and secure software today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body
        className={`${inter.variable} ${interTight.variable} antialiased overflow-x-hidden bg-colorLight`}
      > 
        <Header/>
        {children}
      </body>
    </html>
  );
}
