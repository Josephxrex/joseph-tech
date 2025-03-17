import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Contact } from "./components/Contact";
import VerticalMenu from "./components/VerticalMenu";

export const metadata: Metadata = {
  title: {
    default: "josephxrex.com",
    template: "%s | josephxrex.com",
  },
  description: "Joseph Efrain Camargo Software Developer",
  openGraph: {
    title: "josephxrex.com",
    description:
      "Co-founder of uanify.com ",
    url: "https://josephxrex.com.com",
    siteName: "josephxrex.com",
    images: [
      {
        url: "https://josephxrex.com",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "josephxrex",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <VerticalMenu />
        <Contact />
        {children}
      </body>
    </html>
  );
}
