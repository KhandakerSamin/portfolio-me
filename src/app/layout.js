import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khandaker Samin Yeasar | Full-Stack MERN Developer",
  description: "Full-Stack MERN Developer specializing in React.js, Next.js, Node.js, Express.js, and MongoDB. Student Associate at Data Science Lab, DIU. Passionate about building modern web applications and exploring AI integration.",
  keywords: ["Full-Stack Developer", "MERN Stack", "React.js", "Next.js", "Node.js", "MongoDB", "JavaScript", "Web Development", "Khandaker Samin Yeasar", "Software Engineer"],
  authors: [{ name: "Khandaker Samin Yeasar" }],
  creator: "Khandaker Samin Yeasar",
  publisher: "Khandaker Samin Yeasar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Khandaker Samin Yeasar | Full-Stack MERN Developer",
    description: "Full-Stack MERN Developer passionate about building modern web applications and exploring AI integration.",
    siteName: "Khandaker Samin Yeasar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khandaker Samin Yeasar | Full-Stack MERN Developer",
    description: "Full-Stack MERN Developer passionate about building modern web applications and exploring AI integration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
