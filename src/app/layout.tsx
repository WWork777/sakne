import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import YandexMetrika from "./components/YandexMetrika/YandexMEtrika";
import { Providers } from "./providers";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: [
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicon/favicon-32x32.png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <YandexMetrika />
        </Providers>
      </body>
    </html>
  );
}