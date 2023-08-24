import "@/styles/globals.css";
import { Poppins } from "next/font/google";
//import type { AppProps } from 'next/app';

const poppins = Poppins({ subsets: ["latin"], weight: ["100","200","300"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );

  
}
