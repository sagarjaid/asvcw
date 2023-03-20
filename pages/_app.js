import "@/styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics  />
      <Analytics />
    </>
  );
}
