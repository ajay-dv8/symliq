import { Montserrat } from "next/font/google";
import "./globals.css"; 
import { Cursor } from "@/components/ui/cursor";
import Header from '@/components/Header'
  
const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['200', '400', '700'],  
  variable: '--font-montserrat',  
});

export const metadata = {
  title: "Symliq",
  description: "Professional Software Development Company in Accra, Ghana. Looking for expert software solutions to drive business growth? Our software development company specializes in mobile app development, custom software solutions, scalable e-commerce platforms, and innovative education software. We deliver secure, reliable, and tailored software solutions to meet your business needs. Partner with our experienced development team in Ghana to boost your business with cutting-edge technology. Empower your growth with scalable and secure software today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body
        className={`${montserrat.variable} antialiased overflow-x-hidden bg-colorLight`}
      >
        <Cursor/> 
        <Header/>
        {children}
      </body>
    </html>
  );
}
