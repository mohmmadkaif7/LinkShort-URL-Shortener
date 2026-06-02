import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "LinkShort - Your trusted URL shortener",
  description: "LinkShort helps you shorten your Urls easily",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"antialiased bg-purple-50"}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}