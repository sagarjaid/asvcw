import Head from "next/head";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <Head>
        <title>Scrip AI — AI TikTok, Reel & YT Shorts Script Writer</title>
        <meta
          name="description"
          content="10X faster & better way to write viral 30 sec short video script for instagram reel, TikTok and youtube shorts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col m-auto max-w-5xl px-4">
        <nav className="flex justify-between py-4 items-center">
          <a href="/">
            <img src="/scrip.svg" className="w-[80px]"></img>
          </a>
          <div>
            <ul className="flex gap-4 text-xs items-center">
              <li className="cursor-pointer">Pricing</li>
              {/* <ll>What's new</ll> */}
              <li className="bg-rose-500 p-1 px-3 w-fit flex gap-1 shadow-sm items-center	 text-white rounded-full ">
                <a href="/app">Try for free!</a>
                <a href="/app">
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
        <div className="flex flex-col items-center justify-center gap-6 py-20 p-2 ">
          <div className="flex flex-col text-base sm:gap-3 xs:text-lg  sdm:text-3xl md:text-4xl mdx:text-5xl text-center line font-bold ">
            <span> 10X faster & better way to write viral </span>
            <span> 30 sec short video script for </span>
            <spn className="text-rose-500">
              <Typewriter
                options={{
                  strings: ["Instagram Reels", "TikTok", "Youtube Shorts"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </spn>
          </div>
          <p className="text-center text-xs sm:text-base">
            Create short videos 30-sec to 60-sec scripts in 1 minutes!
          </p>
          <div className="bg-rose-600 p-2 animate-bounce px-4 w-fit flex justify-around shadow-xl items-center	hover:bg-rose-500 text-white rounded-full ">
            <a href="/app">Start Creating for free!</a>
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
          </div>
          <p></p>
          <img src="/trs.png" className="w-[30%] py-6"></img>
          {/* <img
            className="w-11/12 border-rose-500 border-2 rounded-lg shadow-2xl hover:shadow-xl"
            src="/app.png"
          ></img> */}
          <video
            className="w-11/12 border-rose-500 bg-rose-500 border-4 rounded-2xl shadow-2xl hover:shadow-xl"
            src="/scrip-ai.mp4"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          ></video>
        </div>
      </main>
    </>
  );
};

export default Home;
