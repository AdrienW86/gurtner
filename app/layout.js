import './globals.css';
import { Oswald } from 'next/font/google';
import Header from '@/components/Header/Header';
import EmailButton from '@/components/EmailButton/EmailButton';
import PhoneButton from '@/components/PhoneButton/PhoneButton';
import Footer from '@/components/Footer/Footer';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" />

        {/* Préchargement optimisé de Google Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          />
        </noscript>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
      </head>

      <body className={oswald.className}>
        <Header />
        {children}
        <EmailButton />
        <PhoneButton />
        <Footer />
      </body>
    </html>
  );
}
