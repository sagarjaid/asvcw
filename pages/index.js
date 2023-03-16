import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const Home = () => {
  const [prompt, setPromptData] = useState({
    title: "",
    description: "",
    keywords: "",
    language: "",
    tone: "",
    time: "",
  });

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

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

  // API CALL to chatGPT

  // let AIP_KEY = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  // let AIP_KEY = "sk-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";

  const getData = () => {
    // let myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${AIP_KEY}`);

    let userPrompt = `assume you are a content creator. write ${prompt.time} content for a Tiktok/Reel/youtube short on the following topic & factor. topic: ${prompt.title}, description: ${prompt.description}, keyword: ${prompt.keywords}, The tone of voice: ${prompt.tone}, maximum time to read the content: ${prompt.time}, Start the script with 1 sentence hook so that people will want to stop and watch the connect creator, note: make sure to write the concept in bit-size sentences and put each sentence in the next line  `;

    let raw = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.7,
    });

    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.choices[0].message, "message");
        setData(result.choices[0].message.content);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  // const getData = () => {
  //   let userPrompt = `assume you are a content creator. write ${prompt.time} content for a Tiktok/Reel/youtube short on the following topic & factor. topic: ${prompt.title}, description: ${prompt.description}, keyword: ${prompt.keywords}, The tone of voice: ${prompt.tone}, maximum time to read the content: ${prompt.time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, note: make sure to write the concept in bit-size sentences and put each sentence in the next line  `;

  //   // let data = JSON.stringify({
  //   //   model: "gpt-3.5-turbo",
  //   //   messages: [
  //   //     {
  //   //       role: "user",
  //   //       content: userPrompt,
  //   //     },
  //   //   ],
  //   //   temperature: 0.7,
  //   // });

  //   let data = JSON.stringify({
  //     question: userPrompt,
  //   });

  //   // let config = {
  //   //   method: "post",
  //   //   maxBodyLength: Infinity,
  //   //   url: "https://api.openai.com/v1/chat/completions",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     Authorization:
  //   //       "Bearer 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",
  //   //   },
  //   //   data: data,
  //   // };

  //   const config = {
  //     method: "POST",
  //     url: "https://simple-chatgpt-api.p.rapidapi.com/ask",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": "8f75fdd009mshcaef63a7370fa74p17a97ajsn1c67d1c2b2d8",
  //       "X-RapidAPI-Host": "simple-chatgpt-api.p.rapidapi.com",
  //     },
  //     data: data,
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //       setData(response.data.answer);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleApi = (e) => {
    e.preventDefault();
    setLoading(true);
    getData();
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center w-full h-screen text-sm">
          <div className="w-full bg-black text-white p-4">
            <div className="flex items-center gap-1">
              <svg
                className="w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
              </svg>
              Ai Short Video Content Writer
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full h-screen">
            <div className="flex flex-col gap-6 w-full sm:w-3/12 p-4 ">
              <div className="flex flex-col gap-1 ">
                <div className="text-xs">Video title</div>
                <textarea
                  placeholder="Please enter title of the short video"
                  type="text"
                  className="w-full border rounded-md p-1 text-xs placeholder:text-[8px] placeholder:text-gray-600"
                  rows="2"
                  value={prompt.title}
                  onChange={handleTitle}
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <div className="text-xs">
                  Short video description{" "}
                  <span className="text-[8px]">{`(optional)`}</span>
                </div>
                <textarea
                  type="text"
                  placeholder="Please enter video description if you want"
                  className="w-full border rounded-md p-1 text-xs placeholder:text-[8px] placeholder:text-gray-600"
                  rows="5"
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
                  className="w-full border rounded-md p-2"
                  value={prompt.keywords}
                  onChange={handleKeywords}
                />
              </div>

              <div className="flex gap-4 items-center  w-full">
                <div className="flex flex-col gap-1 ">
                  <div className="text-xs">Language</div>
                  <select
                    onChange={handleLanguage}
                    className="rounded-md border w-full outline-none p-1 px-2"
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
                    className="rounded-md border w-full outline-none p-1 px-2"
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

              <div className="flex gap-1  items-center">
                <div className="">Time :</div>
                <select
                  onChange={handleTime}
                  className="rounded-md border-none outline-none p-1 px-2"
                >
                  <option value="30-to-60 seconds" defaultValue>
                    30-to-60 seconds
                  </option>
                  <option value="30 seconds">30 seconds</option>
                  <option value="60 seconds">60 seconds</option>
                </select>
              </div>

              <button
                onClick={handleApi}
                className="rounded-md border mx-auto w-full outline-none p-2 text-white bg-blue-400"
              >
                {isLoading ? "Loading..." : "Generate script"}
              </button>
            </div>
            <div className="w-full flex flex-col gap-2 bg-stone-100 p-4">
              <div className="ml-1">Title: {prompt.title} </div>
              <div>
                <textarea
                  onChange={(e) => {
                    setData(e.target.value);
                  }}
                  placeholder="AI will write content here!"
                  className="w-full border rounded-md p-2 h-[70vh] focus:outline-none placeholder:text-[8px] placeholder:text-gray-600"
                  type="text"
                  value={data}
                />
                <div className="flex justify-center sm:justify-end gap-4">
                  <button className='class="px-2 py-1 cursor-pointer mb-1 border rounded-md bg-white p-2'>
                    Copy to Clipboard
                  </button>
                  <button className='class="px-2 py-1 cursor-pointer mb-1 border rounded-md bg-white p-2'>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
