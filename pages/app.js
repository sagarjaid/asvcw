import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { WindupChildren } from "windups";

const App = () => {
  const [prompt, setPromptData] = useState({
    title: "",
    description: "",
    keywords: "",
    language: "",
    tone: "",
    time: "",
  });

  //  const arr =  ['', '', '[Hook] Are you looking to become a successful vide…our way to creating engaging content in no time! ', '', 'Step 1: Start with Instagram ', '- Use Instagram to showcase your talents and build a following ', '- Post regularly and utilize hashtags to attract new viewers ', '- Engage with your followers by responding to comments and DMs ', '', 'Step 2: Master Your Equipment ', '- Invest in quality equipment that produces high-quality videos ', '- Experiment with different editing software to find your personal style ', '- Learn how to use your equipment to its fullest potential ', '', 'Step 3: Collaborate & Network ', '- Collaborate with other creators to expand your audience ', '- Attend industry events and connect with other professionals in your field ', '- Build strong relationships with brands to secure sponsored content opportunities ', '', "Remember, Rome wasn't built in a day. Consistency …ed, and never stop learning. Thanks for watching!"]

  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [textCopy, setTextCopy] = useState(false);

  const handleCopyText = () => {
    let copyText = document.getElementById("copy");
    let htmlcopydata = copyText.innerText;
    navigator.clipboard.writeText(htmlcopydata);
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
    }, 3500);
  };

  const handleClearText = (e) => {
    setData();
    window.location.href = "/app";
    // let copyText = document.getElementById("copy");
    // copyText.innerText = "AI will write content here!";

    // // setPromptData({
    // //   title: "",
    // //   description: "",
    // //   keywords: "",
    // // });
  };

  const handleTitle = (e) => {
    setPromptData({ ...prompt, title: e.target.value });
  };

  const handleDescription = (e) => {
    setPromptData({ ...prompt, description: e.target.value });
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

  const handleTime = (e) => {
    setPromptData({ ...prompt, time: e.target.value });
  };

  const getData = async () => {
    let userPrompt = `assume you are a content creator. write ${prompt.time} content for a Tiktok/Reel/youtube short on the following topic & factor. topic: ${prompt.title}, description: ${prompt.description}, keyword: ${prompt.keywords}, The tone of voice: ${prompt.tone}, maximum time to read the content: ${prompt.time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, note: make sure to write the concept in bit-size sentences and put each sentence in the next line`;

    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: userPrompt }),
    });

    const resData = await response.json();

    console.log(resData, "resData");

    const DataArr = resData.result.split("\n");
    console.log(DataArr);
    setData(DataArr);
    setLoading(false);
    setPromptData({
      description: "",
      keywords: "",
    });
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
      title: "",
      description: "",
      keywords: "",
      language: "English",
      tone: "Professional",
      time: "30-to-60 seconds",
    });
  }, []);

  return (
    <>
      <Head>
        <title>Scrip AI — AI TikTok, Reel & YT Shorts Script Writer</title>
        <meta
          name="description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta
          name="google-site-verification"
          content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      <main>
        <div className="flex h-screen w-full flex-col items-center text-sm">
          <div className=" w-full bg-yellow-400 px-4 py-2 text-center">
            Due to overwhelming response we are running out of capacity 🔥. few
            users may get empty/no reply {`:(`} if so please check after 4
            hours. 🙏
          </div>
          <nav className="flex w-full items-center justify-between border-b p-4">
            <a href="/">
              <img src="/scrip.svg" className="w-[80px]"></img>
            </a>
            <div>
              <ul className="flex items-center gap-4 text-xs">
                {/* <li className="cursor-pointer">Pricing</li> */}
                {/* <ll>What's new</ll> */}
                <li>
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
            <div className="flex w-full flex-col gap-6 p-4 sm:w-3/12 ">
              <div className="flex flex-col gap-1 ">
                <div className="text-xs">Video title</div>
                <textarea
                  placeholder="Please tart the video title with — How to, 3 steps, etc"
                  type="text"
                  className="w-full rounded-md border p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                  rows="2"
                  maxLength={250}
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
                    Start the title with: How to, 3 steps, etc
                  </div> */}
                {err && (
                  <div className="text-xs text-rose-600">
                    title is required*
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1 ">
                <div className="text-xs">
                  Short video description{" "}
                  <span className="text-[8px]">{`(optional)`}</span>
                </div>
                <textarea
                  type="text"
                  placeholder="Please enter video description if you want"
                  className="w-full rounded-md border p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                  rows="5"
                  maxLength={250}
                  value={prompt.description}
                  onChange={handleDescription}
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <div className="text-xs">
                  Keywords <span className="text-[8px]">{`(optional)`}</span>{" "}
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
                    <option value="Hindi">Hindi</option>
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

              {
                <button
                  disabled={isLoading}
                  onClick={handleApi}
                  className="mx-auto w-full rounded-full border bg-rose-500 p-2 text-white outline-none"
                >
                  {isLoading ? "Loading..." : "Generate Script"}
                </button>
              }
              {data?.length && data && (
                <button
                  onClick={() => {
                    setPromptData({
                      title: "",
                      description: "",
                      keywords: "",
                    });
                  }}
                  className="mx-auto w-full rounded-full border p-2 outline-none"
                >
                  Clear All Fields
                </button>
              )}
            </div>
            <div className="flex h-screen w-full flex-col gap-2 bg-stone-50 p-4">
              {/* <div className="ml-1">Title: {prompt.title} </div> */}
              <div
                id="copy"
                contenteditable="true"
                className="h-[77vh] w-full overflow-y-scroll rounded-md border bg-white p-4 placeholder:text-[8px] placeholder:text-gray-600 focus:outline-none"
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
              <div className="flex justify-center gap-2 pt-2 sm:justify-end">
                <button
                  className="mb-1 cursor-pointer rounded-full border bg-gray-700  px-4 py-2 text-white"
                  onClick={handleCopyText}
                >
                  {textCopy ? "Text copied" : "Copy to Clipboard"}
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
        </div>
      </main>
    </>
  );
};

export default App;
