import Tools from "@/components/Tools";
import Head from "next/head";
import { useEffect, useState } from "react";
import { WindupChildren } from "windups";

const AITools = () => {

  useEffect(() => {

    setTimeout(() => {

      var ad1
      var ad2
      var ad3

      setInterval(() => {
        if (typeof window !== "undefined" && window.document) {
          // Client-side-only code
          ad1 = document.getElementById("aswift_1") | null
          ad2 = document.getElementById("aswift_2") | null
          ad3 = document.getElementById("aswift_3") | null

          console.log(ad1, "ad1");
          console.log(ad2, "ad2");
          console.log(ad3, "ad3");

          ad1 && (ad1.src = ad1?.src)
          console.log(ad1?.src, "ad1 src");
          ad2 && (ad2.src = ad2?.src)
          console.log(ad2?.src, "ad2 src");
          ad3 && (ad3.src = ad3?.src)
          console.log(ad3?.src, "ad3 src");
        }

      }, 30000);

    }, 30000);
  }, [])

  return (
    <>
      <Head>
        <title>FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI</title>
        <meta
          name="title"
          content="FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI"
        />
        <meta
          name="description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripai.com/app" />
        <meta
          property="og:title"
          content="FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI"
        />
        <meta
          property="og:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="og:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripai.com/" />
        <meta
          property="twitter:title"
          content="FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI"
        />
        <meta
          property="twitter:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="twitter:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://scripai.com/favicon.png" />

        <meta
          name="google-site-verification"
          content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      {/* <div className=" w-full bg-yellow-400 px-4 py-2 text-center">
        We are LIVE again 🙏
      </div> */}
      <main>
        <div className="flex h-screen max-w-5xl m-auto flex-col items-center text-sm">
          {/* <div className=" w-full bg-yellow-400 px-4 py-2 text-center">
            Due to overwhelming response we are running out of capacity 🔥. Please check us after 24
            hours. 🙏
          </div> */}

          <nav className="flex w-full items-center justify-between p-4">
            <a href="/">
              <img src="/scrip.svg" className="w-[80px]" />
            </a>
            <div>
              <ul className="flex items-center gap-4 text-sm">
                <li className="hidden sm:inline cursor-pointer">
                  <a href="/hashtag">AI Hashtag Generator</a>
                </li>
                {/* <ll className="rounded-md bg-rose-50 p-1 px-2">
 <a href="/new">What's new</a>
                </ll> */}
                {/* <li>
                  <a
                  className="hidden sm:inline"
                    href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
                    target="_blank"
                  >
                    <img
                    className="w-36"
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
                    />
                  </a>
                </li> */}
                <ll className="relative rounded-md font-bold border border-rose-500 p-1 px-3">
                  <span className=" absolute -top-1.5 animate-pulse right-1.5 text-[9px] w-3 h-3 rounded-full bg-rose-600"></span>
                  <a href="/ai-tools">MORE AI TOOLS</a>
                </ll>
                <li className="flex w-fit cursor-pointer items-center gap-1 rounded-full bg-rose-500 p-1 px-3 text-white shadow-sm ">
                  <a href="/">Home</a>
                  <a href="/">
                    <svg
                      className="w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Tools />
        </div>
      </main>
    </>
  );
};

export default AITools;
