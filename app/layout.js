import { Inter } from "next/font/google";
import "../Styles/globals.css";
import "../Styles/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
 <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16618333513"></script>
<script>
{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16618333513');
            `}
</script>

<script>
{`
              gtag('event', 'conversion', {'send_to': 'AW-16618333513/1mLzCLzwyasZEPm3mNM9'});
            `}
</script>

  </head>
<body className={inter.className}>
        {children}





      </body>
    </html>
  );
}
