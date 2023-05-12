import SEOMeta from '@/components/SEOMeta';
import Tools from '@/components/Tools';
import { useEffect, useState } from 'react';
import { WindupChildren } from 'windups';

const Definition = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [isMobile, setMobile] = useState(false);
  const [prompt, setPromptData] = useState({
    title: '',
    keywords: '',
    language: '',
    tone: '',
  });

  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [textCopy, setTextCopy] = useState(false);

  const handleCopyText = () => {
    let copyText = document.getElementById('copy');
    let htmlcopydata = copyText.innerText;
    navigator.clipboard.writeText(htmlcopydata);
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
    }, 3500);
  };

  const handleClearText = (e) => {
    setData();
    window.location.reload();
  };

  const handleTitle = (e) => {
    setPromptData({ ...prompt, title: e.target.value });
  };

  const handleKeywords = (e) => {
    setPromptData({ ...prompt, keywords: e.target.value });
  };

  const handleLanguage = (e) => {
    setPromptData({ ...prompt, language: e.target.value });
  };

  const handleTone = (e) => {
    setPromptData({ ...prompt, tone: e.target.value });
  };

  const getData = async () => {
    let userPrompt = `Assume you are a Linkedin content creator. Write content in ${prompt.language || 'English'
      } for a Linkedin post on following. Topic: ${prompt.title}, description: ${prompt.description
      }, keyword: ${prompt.keywords}, Tone of voice: ${prompt.tone || 'Professional'
      }, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, you can also use 1 emoji at end of hook sentence, make sure to write the content in bit-size sentences and put each sentence in the next line.`;

    const response = await fetch('/api/getGPTdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: userPrompt }),
    });

    const resData = await response.json();

    console.log(resData, 'resData');

    const DataArr = resData.result.split('\n');
    console.log(DataArr);
    setData(DataArr);
    setLoading(false);
  };

  const handleApi = (e) => {
    if (!prompt.title) {
      setErr(true);
    }
    if (prompt.title) {
      e.preventDefault();
      setLoading(true);
      getData();
    }
  };

  useEffect(() => {
    setPromptData({
      title: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
    });

    if (window.innerWidth <= 640) {
      let w = window.innerWidth;
      console.log(w);
      setMobile(true);
    }
  }, [isMobile]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const adBoxEl = document.querySelector('.ad-box');
      const hasAdBlock = window.getComputedStyle(adBoxEl)?.display === 'none';
      console.log(hasAdBlock, 'hasAdBlock');
      setShowBanner(hasAdBlock);
    }, 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="relative">
        <SEOMeta
          title="AI Linkedin Post Writer [100% FREE - No Login required] — Scrip AI"
          description="Write Linkedin post that make your Linkeidn conncetions stop scrolling. Try AI Linkedin Post generator by Scrip AI and watch your Linkedin post go viral!."
          slug="linkedin-post"
        />
        {/* <div className=" w-full bg-yellow-400 px-4 py-2 text-center">
        We are LIVE again 🙏
      </div> */}
        <main>
          <div className="m-auto flex max-w-5xl flex-col items-center text-sm">
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
                  <li className="hidden cursor-pointer sm:inline">
                    <a href="/hashtag">AI Hashtag Generator</a>
                  </li>
                  {/* <ll className="rounded-md bg-rose-50 p-1 px-2">
                  <a href="/new">What's new</a>
                </ll> */}
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
            <div className="flex w-full flex-col justify-between sm:flex-row">
              <div className="flex w-full flex-col gap-4 p-4 sm:w-2/5 ">
                <div className="flex flex-col gap-3 ">
                  <div className="w-full text-xl font-bold text-black ">
                    AI Definition Writer
                  </div>
                  <hr />
                </div>
                <div className="flex flex-col gap-1 ">
                  <div className="text-xs">Define</div>
                  <textarea
                    placeholder="What is/define..."
                    type="text"
                    className="w-full rounded-md border p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                    rows="2"
                    maxLength={100}
                    value={prompt.title}
                    onChange={handleTitle}
                  />
                  {/* <div className="w-fit rounded-md p-1 text-xs text-gray-800">
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
                    <span className="text-[9px]">
                      Start the post topic with: How to, 3 steps, etc
                    </span>
                  </div> */}
                  {err && (
                    <div className="text-xs text-rose-600">
                      Topic for definition is required*
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1 ">
                  <div className="text-xs">
                    Keywords <span className="text-[8px]">{`(optional)`}</span>{' '}
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-md border p-2"
                    value={prompt.keywords}
                    onChange={handleKeywords}
                  />
                </div>

                <div className="flex w-full items-center  gap-4">
                  <div className="flex flex-col gap-1 ">
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
                  <div className="flex flex-col gap-1 ">
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
                </div>

                {
                  <button
                    disabled={isLoading}
                    onClick={handleApi}
                    className="mx-auto w-full rounded-full border bg-rose-500 p-2 text-white outline-none"
                  >
                    {isLoading ? 'Loading...' : 'Generate Script'}
                  </button>
                }
                {data?.length && data && (
                  <button
                    onClick={() => {
                      setPromptData({
                        title: '',
                        description: '',
                        keywords: '',
                      });
                    }}
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
                    className="mb-1 cursor-pointer rounded-full border bg-rose-500 p-2 text-white"
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
            </div>
            <Tools />
          </div>
        </main>
        <div
          className="ad-box"
          style={{ position: 'fixed', top: 0, left: 0 }}
          aria-hidden="true"
        ></div>
        {showBanner && (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto my-6 w-auto max-w-3xl p-4">
                <div className="relative flex w-full flex-col items-center gap-4 rounded-xl border-0 bg-white px-8 py-10 text-center shadow-lg outline-none focus:outline-none">
                  <img className="w-16" src="/favicon.png"></img>
                  <div>
                    <div className="text-lg font-bold">
                      Please disable all Adblockers!
                    </div>
                    <div className="mt-1">
                      Without Advertment We Won't be able to offer ScripAI for
                      FREE!
                    </div>
                  </div>
                  <div
                    className="cursor-pointer rounded-full bg-rose-500 p-2 px-4 text-sm text-white"
                    onClick={() => window.location.reload()}
                  >
                    I have disabled AdBlockers manually
                  </div>
                  <div
                    className="-mt-2 cursor-pointer text-[10px] text-blue-500"
                    onClick={handleToggle}
                  >
                    Learn How to disable AdBlocker ▽
                  </div>
                  {toggle && (
                    <iframe
                      className="aspect-video w-11/12 rounded-xl border-4 border-rose-600 bg-rose-600"
                      title="How to Disable AdBlock on Google Chrome"
                      src="https://www.youtube.com/embed/OdIGBz5koX4"
                      allowfullscreen="true"
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Definition;