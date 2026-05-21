import Footer from "@/Components/Footer/Footer";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import { ThemeProvider } from "@/Components/ThemeProvider/theme-provider";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer></Footer>

        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}