

'use client'

import { usePathname } from "next/navigation";
// import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/provider";
import MenubarComponent from "@/components/menubar";


// const metadata: Metadata = {
//   title: "Gemnest - Luxury Jewelry Online Store",
//   description: "Discover timeless jewelry pieces crafted with passion and precision. Shop rings, necklaces, earrings, and more at Gemnest.",
//   openGraph: {
//     title: "Gemnest - Luxury Jewelry Online Store",
//     description: "Discover timeless jewelry pieces crafted with passion and precision. Shop rings, necklaces, earrings, and more at Gemnest.",
//     url: "https://gemnest.vercel.com",
//     siteName: "Gemnest",
//     images: [
//       {
//         url: "https://gemnest.vercel.com/images/hero.jpg",
//         width: 1920,
//         height: 888,
//         alt: "Gemnest Jewelry",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Gemnest - Luxury Jewelry Online Store",
//     description: "Discover timeless jewelry pieces crafted with passion and precision. Shop rings, necklaces, earrings, and more at Gemnest.",
//     images: ["https://gemnest.vercel.com/images/hero.jpg"]
//   }
// };

const NoNavRoutes = [
  "/signin",
  "/signup",
  "/portfolio",
  "/dashboard"
]


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()
  
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen overflow-x-hidden`}
      >
        <Providers>
          {!NoNavRoutes.some(route => pathname.startsWith(route)) && <MenubarComponent />}
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
