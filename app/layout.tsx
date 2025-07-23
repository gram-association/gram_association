import type { Metadata } from "next";
import { Epilogue, Geist, Geist_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-epilogue",
});
const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "GRAM Association",
  description: "Empowering Communities, Transforming Lives",
  icons: {
    icon: "/GRAM logomark.jpg",
  },
  metadataBase: new URL("https://gramassociation.org"),
  openGraph: {
    title: "GRAM Association",
    description: "Empowering Communities, Transforming Lives",
    url: "https://gramassociation.org",
    siteName: "GRAM Association",
    images: [
      {
        url: "https://gramassociation.org/GRAM_logotype.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRAM Association",
    description: "Empowering Communities, Transforming Lives",
    images: ["https://gramassociation.org/GRAM_logotype.png"],
  },

  verification: {
    google: "google-site-verification=your-google-verification-code",
    yandex: "yandex-verification: your-yandex-verification-code",
    other: {
      name: "other-verification-name",
      value: "other-verification-value",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read theme from cookie on server
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "system";

  return (
    <html lang="en" className={"light"} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
