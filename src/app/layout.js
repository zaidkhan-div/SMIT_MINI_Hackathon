import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PitchCraft - AI Startup Pitch Generator",
  description: "Turn your startup ideas into professional pitches with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}