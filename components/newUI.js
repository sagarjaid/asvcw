import React from 'react';
import PouUp from './PouUp';
import SEOMeta from '@/components/SEOMeta';
import Tools from '@/components/Tools';
import { useEffect, useState } from 'react';
import { WindupChildren } from 'windups';
import Nav from './Nav';
import Menu from './Menu';

const UI = ({
  prompt,
  handleTitle,
  handleDescription,
  handleKeywords,
  text,
  handleClearFields,
  handleLanguage,
  handleTone,
  handleTime,
  handleClearText,
  handleCopyText,
  handlePlatform,
  handleApi,
  isLoading,
  data,
  err,
  textCopy,
}) => {
  return (
    <div className="relative">
      <SEOMeta
        title={text.seoData?.title}
        description={text.seoData?.description}
        slug={text.seoData?.slug}
      />
      {/* <div className=" w-full bg-yellow-400 px-4 py-2 text-center">
        If you refer this tool to only one friend, You'll make my day :)
      </div> */}
      <main>
        <div className="m-auto flex flex-col items-center text-sm">
          <Nav />
          <div className="flex w-full flex-col justify-around border-t sm:flex-row">
            <div className="flex w-full flex-col gap-4 p-4 sm:w-2/5 ">
              {text.toolName && (
                <div className="flex flex-col gap-3">
                  <div className="w-full text-xl font-bold text-black ">
                    {text.toolName}
                  </div>
                  <hr />
                </div>
              )}
              {text?.title && text?.title?.name && (
                <div className="flex flex-col gap-1">
                  <div className="text-xs">
                    {text.title.name}
                    {/* <span className="text-[8px]">{`(required)`}</span> */}
                  </div>
                  <textarea
                    placeholder={text.title.placeholder}
                    type="text"
                    className="w-full rounded-md border p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                    rows={text?.title?.rows || 2}
                    maxLength={text.title.maxLength}
                    value={prompt.title}
                    onChange={handleTitle}
                  />
                  {text?.title?.hint && (
                    <div className="w-fit rounded-md p-1 text-xs text-gray-800">
                      <svg
                        className="mr-2 inline w-3"
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

                      <span className="text-[9px]">{text.title.hint}</span>
                    </div>
                  )}
                  {err && (
                    <div className="text-xs text-rose-600">
                      {text.title.err}
                    </div>
                  )}
                </div>
              )}

              {text?.description && text?.description?.name && (
                <div className="flex flex-col gap-1 ">
                  <div className="text-xs">
                    {text.description.name}{' '}
                    {text.description.showOptional && (
                      <span className="text-[8px]">{`(optional)`}</span>
                    )}
                  </div>
                  <textarea
                    type="text"
                    placeholder={text.description.placeholder}
                    className="w-full rounded-md border p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                    rows="5"
                    maxLength={text.description.maxLength}
                    value={prompt.description}
                    onChange={handleDescription}
                  />
                </div>
              )}

              {text.keywords && (
                <div className="flex flex-col gap-1 ">
                  <div className="text-xs">
                    {text.keywords.name}{' '}
                    {text.keywords.showOptional && (
                      <span className="text-[8px]">{`(optional)`}</span>
                    )}
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-md border p-2"
                    maxLength={text.keywords.maxLength}
                    value={prompt.keywords}
                    onChange={handleKeywords}
                  />
                </div>
              )}

              {text.platform && (
                <div className="flex flex-col gap-1 ">
                  <div className="text-xs">{text.platform}</div>
                  <select
                    onChange={handlePlatform}
                    className="w-full rounded-md border p-1 px-2 text-xs outline-none"
                  >
                    <option value="Facebook" defaultValue>
                      Facebook
                    </option>
                    <option value="Instagram">Instagram</option>
                    <option value="TikTok">TikTok </option>
                    <option value="Twitter">Twitter</option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Youtube Short">Mastodon</option>
                    <option value="Vk">Vk</option>
                    <option value="Tumblr">Tumblr</option>
                    <option value="Instagram Reel">IG Reel</option>
                    <option value="Youtube Short">YT Shorts</option>
                  </select>
                </div>
              )}

              <div className="flex w-full items-center gap-4">
                {text.language && (
                  <div
                    className={
                      text?.language && text?.tone
                        ? 'flex flex-col gap-1'
                        : 'flex w-full flex-col gap-1'
                    }
                  >
                    <div className="text-xs">Language</div>
                    <select
                      onChange={handleLanguage}
                      className="w-full rounded-md border p-1 px-2 text-xs outline-none"
                    >
                      <option value="English" defaultValue>
                        English
                      </option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Russian">Russian</option>
                      <option value="German">German</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Indonesian">Indonesian</option>
                      <option value="Vietnamese">Vietnamese</option>
                      <option value="Thai">Thai</option>
                      <option value="Korean">Korean</option>
                    </select>
                  </div>
                )}

                {text.tone && (
                  <div
                    className={
                      text?.language && text?.tone
                        ? 'flex flex-col gap-1'
                        : 'flex w-full flex-col gap-1'
                    }
                  >
                    <div className="text-xs">Tone</div>
                    <select
                      onChange={handleTone}
                      className="w-full rounded-md border p-1 px-2 text-xs outline-none"
                    >
                      <option value="Professional" defaultValue>
                        Professional
                      </option>
                      <option value="Informative">Informative</option>
                      <option value="Convincing">Convincing</option>
                      <option value="Enthusiastic">Enthusiastic</option>
                      <option value="Humorous">Humorous</option>
                      <option value="Formal">Formal</option>
                      <option value="Inspirational">Inspirational</option>
                      <option value="Passionate">Passionate</option>
                      <option value="Serious">Serious</option>
                      <option value="Thoughtful">Thoughtful</option>
                      <option value="Worried">Worried</option>
                    </select>
                  </div>
                )}
              </div>

              {text.time && (
                <div className="flex items-center  gap-1">
                  <div className="text-xs">Time :</div>
                  <select
                    onChange={handleTime}
                    className="rounded-md border-none p-1 px-2 text-xs outline-none"
                  >
                    <option value="30-to-60 seconds" defaultValue>
                      30-to-60 seconds
                    </option>
                    <option value="30 seconds">30 seconds</option>
                    <option value="60 seconds">60 seconds</option>
                  </select>
                </div>
              )}

              {
                <button
                  disabled={isLoading}
                  onClick={handleApi}
                  className="mx-auto w-full rounded-full border bg-rose-600 p-2 text-white outline-none"
                >
                  {isLoading ? 'Loading...' : text.btnText}
                </button>
              }
              {data?.length && data && (
                <button
                  onClick={handleClearFields}
                  className="mx-auto w-full rounded-full border p-2 outline-none"
                >
                  Clear All Fields
                </button>
              )}
            </div>
            <div className="relative flex w-full flex-col gap-2 p-4 sm:pl-0">
              <div
                id="copy"
                contenteditable="true"
                className="h-[75vh] w-full overflow-y-scroll rounded-md border bg-white p-4 placeholder:text-[8px] placeholder:text-gray-600 focus:outline-none"
              >
                <WindupChildren>
                  {data?.length ? (
                    data?.map((el, index) => (
                      <p id={index}>
                        {el} <br></br>
                      </p>
                    ))
                  ) : isLoading ? (
                    <p className="flex items-center">
                      <svg
                        className="mr-2 inline w-4"
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
                      AI is Working, please wait this can take upto 40 sec...
                    </p>
                  ) : (
                    <p className="flex items-center">
                      <svg
                        className="mr-2 inline w-4"
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
                      AI will write content here!
                    </p>
                  )}
                </WindupChildren>
              </div>
              <div className="bottom-8 right-8 flex justify-center gap-2 pt-2 text-xs sm:absolute sm:justify-end">
                <button
                  className="mb-1 cursor-pointer rounded-full border bg-gray-700 px-4 py-2 text-white"
                  onClick={handleCopyText}
                >
                  {textCopy ? 'Text copied' : 'Copy to Clipboard'}
                </button>
                <button
                  className="mb-1 cursor-pointer rounded-full border bg-rose-600 p-2 text-white"
                  onClick={handleClearText}
                >
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
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden h-[90vh] border-l mdx:block mdx:w-2/6 mdx:overflow-y-scroll">
              <Menu />
            </div>
          </div>
        </div>
      </main>
      <PouUp />
    </div>
  );
};

export default UI;
