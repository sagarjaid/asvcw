import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import pageObj from '@/components/PageObj';
import SEOMeta from '@/components/SEOMeta';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { domainUrl } from '@/components/domainUrl';
import HelloBar from '@/components/HelloBar';
import Card from '@/components/Card';

const Home = () => {
  return (
    <>
      <SEOMeta
        title="Scrip AI - Free AI writer [100% FREE - No Login required]"
        description="10X faster & free way to write AI content for 100+ use cases, try Free AI writer powerd by Scrip AI "
        imgUrl="https://scripai.com/scrip-ai-cover.png"
      />
      <HelloBar />
      <main className="m-auto flex max-w-5xl flex-col">
        <Nav />
        <div className="flex flex-col items-center justify-center gap-6 p-4 py-20">
          <div className="flex items-center gap-2 rounded-full bg-green-600 px-3.5 py-2 text-xs text-white">
            <svg
              className="w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              />
            </svg>
            copy.ai but free!
          </div>
          {/* <div className='bg-black text-white text-sm py-1 px-3 rounded-full'>copy.ai but FREE!</div> */}
          <div className="line flex flex-col text-center text-base font-extrabold xs:text-2xl sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl ">
            {/* <span>copy.ai but FREE</span> */}
            <span>10X faster & free way to </span>
            <span>write AI content for</span>
            {/* <span>to write anything with AI</span> */}
            <span className="text-rose-600">
              <Typewriter
                options={{
                  strings: [
                    'Social Media Post',
                    'TikTok Script',
                    'Blog Post',
                    'Email Marketing',
                    'Instagram Reels',
                    'Facebook Ads',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="text-center text-xs sm:text-base">
            Save $30 - $60 every month on all AI tools!
          </p>
          <div className="flex w-fit items-center justify-around rounded-full bg-rose-600 p-2 px-4	text-white shadow-xl hover:bg-rose-700 ">
            <a href="/ai-tools">Try for Free!</a>
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
          <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-600 sm:text-base">
            <span>✓ No credit card required</span>
            <span>✓ No login is required</span>
          </div>
          <a
            className="sd:hidden"
            href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
            target="_blank"
          >
            <img
              className="w-36"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
            />
          </a>

          <iframe
            className="aspect-video w-11/12 rounded-xl border-4 border-rose-600 bg-rose-600"
            title="Scrip AI — AI TikTok, Reel &amp; YT Shorts Script Writer"
            src="https://www.youtube.com/embed/nKVBwT_F-bc"
            frameBorder="0"
          ></iframe>

          <div className="w-full pt-10 text-center font-bold xs:text-lg sdm:text-3xl md:text-4xl">
            100% Free AI Use Cases!
            {pageObj?.length && <Card pageObj={pageObj} />}
          </div>

          <div className=" flex w-[100%] flex-col items-center gap-6 rounded-xl bg-rose-600 px-2 py-10 text-center text-white xs:text-lg sdm:text-3xl">
            Stop wasting time & start creating
            <br /> awesome copy for free!
            <div className="flex w-fit items-center justify-around rounded-full bg-white p-2 px-4 text-lg	text-black ">
              <a href="/ai-tools" className="text-md">
                Try Scrip!
              </a>
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
            <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-200 ">
              <span>✓ No credit card required</span>
              <span>✓ No login is required</span>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
