import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const WhatsNew = () => {
  return (
    <>
      <Head>
        <title>What's New | FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI</title>
        <meta
          name="title"
          content="What's New | FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI"
        />
        <meta
          name="description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripai.com/" />
        <meta
          property="og:title"
          content="What's New | FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI"
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
          content="What's New | FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI"
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
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <nav className="flex items-center justify-between py-4">
          <a href="/">
            <img src="/scrip.svg" className="w-[80px]" />
          </a>
          <div>
            <ul className="flex items-center gap-4 text-sm">
              <li className="hidden sm:inline cursor-pointer">
                <a href="/hashtag">AI Hashtag Generator</a>
              </li>
              <ll className="rounded-md animate-pulse font-bold border border-rose-500 p-1 px-2">
                <a href="/ai-tools">MORE AI TOOLS</a>
              </ll>
              <li className="flex w-fit items-center gap-1 rounded-full bg-rose-500 p-1 px-3	 text-white shadow-sm ">
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
        <div className="flex flex-col items-start justify-center gap-6 p-2 py-10 ">
          <div className="flex flex-col gap-2 text-4xl font-medium">
            What's new!
            <div className="text-sm">Updated on 1 April, 2023</div>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md bg-blue-50 p-4">
            <div className="text-xl"> ✅ 13K+ Users in 13 days!</div>
            <div className="text-sm text-gray-900">1 April, 2023</div>
            <div>
              We have cross 10K+ users using ScripAI. <br />
              Few marketing campaigns in the pipeline to improve visibility of
              ScripAI among content creators on Tiktok, Reels & YT shorts.
            </div>
            <img src="/traffic.png" className="rounded-md sm:w-2/3" />
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md bg-blue-50 p-4">
            <div className="text-xl"> ✅ ScripAI is FREE for limited time!</div>
            <div className="text-sm text-gray-900">19 Mar, 2023</div>
            <div>
              I as user really form my heart wanted to have this product free &
              free for lifetime.
              <br />
              Scrip AI is bulit on top of openai business api where each call to
              server cost few cents to dollers.
              <br />
              We have created a fund of $150 to keep the app free for limited
              time.
              <br />
              Once this fund is finshed we may launch freeimum plan to keep
              scrip ai alive.
              <br />
              Otherwise we may add more $100+ to the fund to continue offering
              the ScripAI for FREE!
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md bg-blue-50 p-4">
            <div className="text-xl"> ✅ ScripAI is live!</div>
            <div className="text-sm text-gray-900">18 Mar, 2023</div>
            <div>
              Scrip AI is really excited to show it's first look and the first
              use case. <br /> with Scrip AI now you can write viral 30 sec - 60
              sec short video script for Instagram Reel, TikTok and Youtube
              shorts 10X faster.
            </div>
          </div>
          <div className="flex items-center gap-2 py-20">
            <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
              by Sagar Jaid
            </a>
            <span>|</span>

            <a href="https://scripai.com/privacy" target="_blank">
              Privacy
            </a>
            <span>|</span>
            <a href="https://scripai.com/tc" target="_blank">
              T&C
            </a>
            <span>|</span>
            <a href="https://scripai.com/gdpr" target="_blank">
              GDPR
            </a>
            <span>|</span>
            <a href="https://scripai.com/new" target="_blank">
              What's New
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default WhatsNew;
