import React, { useEffect } from 'react';
import { domainUrl } from './domainUrl';

const Stats = ({ numberOfWords, dollers }) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2 p-4 ">
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-lg border border-green-400 bg-green-50 p-5 text-left">
        <div className="flex w-full items-center justify-between">
          <svg
            className="h-8 w-8 rounded-full bg-green-200  p-2"
            fill="black"
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
          <div className=" text-2xl font-extrabold text-black">${dollers}</div>
        </div>

        <div>
          <div className="mb-1 text-left text-xs font-semibold">
            Money Saved
          </div>
          <div className="text-left text-[11px]">
            You have saved ${dollers} by using scripAI over other AI tools!
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-lg border border-stone-300 bg-stone-50 p-5 text-left">
        <div className="flex w-full items-center justify-between">
          <svg
            className="h-8 w-8 rounded-full bg-rose-100  p-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
          <div className="text-2xl font-extrabold text-black">
            {numberOfWords}
          </div>
        </div>

        <div>
          <div className="mb-1 text-left text-xs font-semibold">
            Number of Token:
          </div>
          <div className="text-left text-[11px]">
            Total number of words/token consumed by you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
