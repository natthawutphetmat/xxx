import { Inter } from "next/font/google";
import "../Styles/globals.css";
import "../Styles/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Website Title</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16618333513"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16618333513');
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-16618333513/1mLzCLzwyasZEPm3mNM9'});
          `
        }} />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
