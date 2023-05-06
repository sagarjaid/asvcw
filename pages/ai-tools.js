import Head from "next/head";
import { useEffect, useState } from "react";
import { WindupChildren } from "windups";

const AITools = () => {


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
                {/* <li className="cursor-pointer">Pricing</li> */}
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
                <ll className="rounded-md animate-pulse font-bold border border-rose-500 p-1 px-2">
                  <a href="/ai-tools">FREE AI TOOLS</a>
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
          <div>
            <h1 className="text-xl p-4 font-bold">Free AI-powered Tools | No credit card required | No login is required</h1>
            <div className="flex w-full gap-4 flex-wrap p-4">
              <a href="/hashtag" className="w-[32%] p-4 outline rounded-md">
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-xl">
                    Hashtag generator
                  </span>
                  <span>
                    Generate relevant hashtags for your Instagram/Linkedin/Twitter & other Social media posts with our hashtag generator.
                  </span>
                </div>
              </a>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  Caption Generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  Hook Generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  YouTube Ideas Generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  YouTube Titles generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  Twitter post generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  social meida post generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  Linkedin post generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  Blog Post Ideas Generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  Company Mission
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  Company Vision
                </span>
                <span>
                  coming soon...
                </span>
              </div>
              <div className="flex  cursor-pointer flex-col w-[32%] p-4 gap-2 outline rounded-md">
                <span className="font-bold text-xl">
                  Business Name Generator
                </span>
                <span>
                  coming soon...
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AITools;
