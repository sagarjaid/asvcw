import React, { useState } from 'react';
import Menu from './Menu';

const Nav = () => {
  const [toggle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toggle);
  };

  return (
    <>
      <nav className="flex w-full items-center justify-between p-4">
        <a href="/">
          <img src="/scrip.svg" className="w-[80px]" />
        </a>
        <div>
          <ul className="flex items-center gap-2 text-sm mdx:gap-4">
            <li className="hidden cursor-pointer sm:inline">
              <a href="/new">What's New</a>
            </li>
            <li className="hidden sd:inline">
              <a
                href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
                target="_blank"
              >
                <img
                  className="w-36"
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
                />
              </a>
            </li>
            <ll className="relative rounded-md border border-rose-600 p-1 px-3 font-bold">
              <span className=" absolute -top-1.5 right-1.5 h-3 w-3 animate-pulse rounded-full bg-rose-600 text-[9px]"></span>
              <a href="/ai-tools">FREE AI TOOLS LIST</a>
            </ll>
            {/* <li className="hidden mdx:flex w-fit cursor-pointer items-center gap-1 rounded-full bg-rose-600 p-1 px-3 text-white shadow-sm ">
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
            </li> */}
            <li
              onClick={handleToogle}
              className="flex w-fit cursor-pointer items-center gap-1 mdx:hidden "
            >
              <svg
                fill="none"
                className="w-8"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
      {toggle && (
        <div className="absolute z-20 h-full w-full">
          <Menu handleToogle={handleToogle} />
        </div>
      )}
    </>
  );
};

export default Nav;
