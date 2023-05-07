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
          <div className="w-full pb-20">
            <h1 className="text-xl p-4 font-bold">Free AI-powered Tools | No credit card required | No login is required</h1>
            <div className="flex w-full gap-4 flex-wrap p-4">
              <a href="/hashtag" className="w-full sm:w-[32%] flex flex-col gap-1 p-4 outline hover:bg-black hover:text-white rounded-md">
                <span className="bg-rose-500 w-fit text-white py-0.5 px-2 rounded-md text-[9px]">
                  New
                </span>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-lg">
                    Hashtag generator
                  </span>
                  <span className="text-xs">
                    Generate relevant hashtags for your Instagram/Linkedin/Twitter & other Social media posts with our hashtag generator.
                  </span>
                </div>
              </a>

            </div>
            <h1 className="text-xl p-4 font-bold">More AI Tools Comming Soon..!</h1>
            <div className="flex flex-wrap">
              <div className="p-4">
                <div className="flex flex-col mb-4">Copywriting <span className="text-[9px]">(Comming Soon)</span></div>
                <ul className="flex flex-col gap-2 list-disc  pl-4 cursor-pointer text-blue-500">
                  <li>Paragraph Writer</li>
                  <li>Text Expander</li>
                  <li>Content Rewriter</li>
                  <li>Content Shortener</li>
                  <li>Sales Copy Generator</li>
                  <li>Sentence Rewriter</li>
                  <li>Content Ideas</li>
                </ul>
              </div>
              <div className="p-4">
                <div className="flex flex-col mb-4">Website Copy<span className="text-[9px]">(Comming Soon)</span></div>
                <ul className="flex flex-col gap-2 list-disc  pl-4 cursor-pointer text-blue-500">
                  <li>Homepage Headline</li>
                  <li>Call-to-Action</li>
                  <li>About Us</li>
                  <li>Product Features</li>
                  <li>Product Benefits</li>
                  <li>Product Review</li>
                </ul>
              </div>
              <div className="p-4">
                <div className="flex flex-col mb-4">Email<span className="text-[9px]">(Comming Soon)</span></div>
                <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                  <li>Email Subject</li>
                  <li>Cold Email</li>
                  <li>Email Rewriter</li>
                  <li>Professional Email Rewriter</li>
                </ul>
              </div>
              <div className="p-4">
                <div className="flex flex-col mb-4">Blog<span className="text-[9px]">(Comming Soon)</span></div>
                <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                  <li>Blog Post Ideas</li>
                  <li>Blog Post Title</li>
                  <li>Blog Post Outline</li>
                  <li>Blog Post Hook</li>
                  <li>Blog Paragraph Writer</li>
                </ul>
              </div>
              <div className="p-4">
                <div className="flex flex-col mb-4">SEO<span className="text-[9px]">(Comming Soon)</span></div>
                <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                  <li>SEO Keyword Generator</li>
                  <li>SEO Title Generator</li>
                  <li>SEO Meta Description Generator</li>
                </ul>
              </div>
              <div className="p-4">
                <div className="flex flex-col mb-4">Job/Resume<span className="text-[9px]">(Comming Soon)</span></div>

                <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                  <li>Linkedin Cold Job Request Message</li>
                  <li>About Me</li>
                  <li>Resume Hook/ Intro</li>
                  <li>Job Skills Generator</li>
                  <li>Job Description</li>
                </ul>
              </div>
              <div className="p-4">
                <div className="flex flex-col mb-4">Other Tools<span className="text-[9px]">(Comming Soon)</span></div>

                <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                  <li>Definition</li>
                  <li>Song Writer</li>
                  <li>Poem Writer</li>
                  <li>Bullet Point Summary</li>
                  <li>Bullet Point Answer</li>
                  <li>Question Generator</li>
                  <li>Question Answer Generator</li>
                  <li>Fact Generator</li>
                  <li>Quiz Generator</li>
                  <li>Topic Example Generator</li>
                  <li>AI Boy Chat Response</li>
                  <li>AI Girl Chat Response</li>
                  <li>Customer Service Response</li>
                  <li>Pros And Cons</li>
                  <li>Slogan Generator</li>
                  <li>Webinar Title Generator</li>
                  <li>Acronym Generator</li>
                  <li>AI Language Translator</li>
                </ul>
              </div>

              <div className="p-4">
                <div className="flex flex-col mb-4">AI Name<span className="text-[9px]">(Comming Soon)</span></div>

                <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                  <li>Blog Name</li>
                  <li>Company Name</li>
                  <li>Buisness Name</li>
                  <li>Domain Name</li>
                  <li>Book Name</li>
                  <li>Play Name</li>
                  <li>Project Name</li>
                  <li>UserName</li>
                  <li>Youtube Channel Name</li>
                  <li>App Name</li>
                  <li>Restaurant Name</li>
                  <li>Baby Boy Name</li>
                  <li>Cafe Name</li>
                  <li>Random Name</li>

                </ul>
              </div>
              <div className="p-4">
                <div className="flex flex-col mb-4">Advertment<span className="text-[9px]">(Comming Soon)</span></div>


              </div>
              <div className="p-4">
                <div className="flex flex-col mb-4">Social Media<span className="text-[9px]">(Comming Soon)</span></div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AITools;
