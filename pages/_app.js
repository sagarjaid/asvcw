import "@/styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        onLoad={() => {
          console.log("hjar");
        }}
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3415164,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />

      <Script
        strategy="afterInteractive"
        onLoad={() => {
          console.log("hjar");
        }}
        dangerouslySetInnerHTML={{
          __html: `(function (w,r){w['NextsaleObject']=r;w[r]=w[r]||function(){(w[r].q = w[r].q || []).push(arguments)};})(window, 'nsio')`,
        }}
      />

      <Script
        src="https://sdk.nextsale.io/nextsale.min.js?key=pk_b9846a313b2fe71ca70159baa7ee3e22819c2721"
        async
      ></Script>

      <Component {...pageProps} />
      <GoogleAnalytics />
      <Analytics />
    </>
  );
}
