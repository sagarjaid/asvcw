import SEOMeta from '@/components/SEOMeta';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 640) {
      let w = window.innerWidth;
      console.log(w);
      setMobile(true);
    }
  }, []);

  return (
    <>
      <SEOMeta
        title="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer [100% FREE - No Login required]"
        description="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts powerd by AI"
      />
      <div className=" w-full bg-yellow-400 px-4 py-2 text-center">
        If you refer this tool to only one friend, You'll make my day :)
      </div>
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <nav className="flex items-center justify-between py-4">
          <a href="/">
            <img src="/scrip.svg" className="w-[80px]" />
          </a>
          <div>
            <ul className="flex items-center gap-1 text-sm sm:gap-4">
              <li className="hidden cursor-pointer sm:inline">
                <a href="/new">What's New</a>
              </li>
              <ll className="relative rounded-md border border-rose-500 p-1 px-3 font-bold">
                <span className=" absolute -top-1.5 right-1.5 h-3 w-3 animate-pulse rounded-full bg-rose-600 text-[9px]"></span>
                <a href="/ai-tools">MORE AI TOOLS</a>
              </ll>
              <li className="flex w-fit items-center gap-1 rounded-full bg-rose-500 p-1 px-3	 text-white shadow-sm ">
                <a href={isMobile ? '/script' : '/app'}>Try for free!</a>
                <a href={isMobile ? '/script' : '/app'}>
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
        <div className="flex flex-col items-center justify-center gap-6 p-2 py-20 ">
          <div className="line flex flex-col text-center text-base font-extrabold xs:text-lg sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl ">
            {/* <span> 10X faster & better way to write viral </span>
            <span> 30 sec short video script for </span> */}
            <span>10X faster way to write </span>
            <span>short video script for </span>
            <spn className="text-rose-500">
              <Typewriter
                options={{
                  strings: ['Instagram Reels', 'TikTok', 'Youtube Shorts'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </spn>
          </div>
          <p className="text-center text-xs sm:text-base">
            Create short videos 30-sec to 60-sec scripts in 1 minutes!
          </p>
          <div className="flex w-fit items-center justify-around rounded-full bg-rose-600 p-2 px-4	text-white shadow-xl hover:bg-rose-700 ">
            <a href={isMobile ? '/script' : '/app'}>Start for Free!</a>
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
            href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
            target="_blank"
          >
            <img
              className="w-36"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
            />
          </a>

          <img src="/trs.png" className="w-[30%] py-6" />

          <iframe
            className="aspect-video w-11/12 rounded-xl border-4 border-rose-600 bg-rose-600"
            title="Scrip AI — AI TikTok, Reel &amp; YT Shorts Script Writer"
            src="https://www.youtube.com/embed/m2Fl9i7CHTY"
            frameBorder="0"
          ></iframe>

          <div className="pt-10">
            <div className="text-center font-bold xs:text-lg sdm:text-3xl md:text-4xl">
              Loved by Creators & Product Hunters
            </div>
            <img src="/love.png" className="hidden w-full py-10 md:block " />
            <img src="/love-mobile.png" className="w-full py-10 md:hidden " />
          </div>
          <div className=" flex w-[100%] flex-col items-center gap-6 rounded-xl bg-rose-600 px-2 py-10 text-center text-white xs:text-lg sdm:text-3xl">
            Stop wasting time & start creating
            <br /> short video scripts for FREE!
            <div className="flex w-fit items-center justify-around rounded-full bg-white p-2 px-4 text-lg	text-black ">
              <a href={isMobile ? '/script' : '/app'} className="text-md">
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
          <div className="flex items-center gap-2 pt-10">
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

export default Home;
