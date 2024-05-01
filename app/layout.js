import { Inter } from "next/font/google";
import "../Styles/globals.css";
import "../Styles/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
 

<head>
<Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16549026809"></Script>
<Script>
{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16549026809');
            `}
</Script>

<Script>
{`
              gtag('event', 'conversion', {'send_to': 'AW-16549026809/1mLzCLzwyasZEPm3mNM9'});
            `}
</Script>



</head>
<body className={inter.className}>
        {children}





      </body>
    </html>
  );
}
