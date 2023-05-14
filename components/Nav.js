import React from 'react';

const Nav = () => {
  return (
    <nav className="flex w-full items-center justify-between p-4">
      <a href="/">
        <img src="/scrip.svg" className="w-[80px]" />
      </a>
      <div>
        <ul className="flex items-center gap-4 text-sm">
          <li className="hidden cursor-pointer sm:inline">
            <a href="/new">What's New</a>
          </li>
          <ll className="relative rounded-md border border-rose-500 p-1 px-3 font-bold">
            <span className=" absolute -top-1.5 right-1.5 h-3 w-3 animate-pulse rounded-full bg-rose-600 text-[9px]"></span>
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
  );
};

export default Nav;
