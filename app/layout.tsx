import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "GRAM Association",
  description: "Empowering Communities, Transforming Lives",
  icons: {
    icon: "/logo-icon.png",
  },
  openGraph: {
    title: "GRAM Association",
    description: "Empowering Communities, Transforming Lives",
    url: "https://gramassociation.org",
    siteName: "GRAM Association",
    images: [
      {
        url: "/logo.png",
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
    images: ["/logo.png"],
  },
  viewport: { initialScale: 1, width: "device-width" },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GRAM Association",
    startupImage: "/logo.png",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",

  alternates: {
    canonical: "https://gramassociation.org",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
    },
  },
  metadataBase: new URL("https://gramassociation.org"),
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
    <html lang="en" className={theme} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
