import React from 'react';
import UI from '@/components/newUI';
import { useState } from 'react';
import pageObj from '@/components/PageObj';
import UI2 from '@/components/UI';

const ToolPage = ({ text }) => {
  const [prompt, setPromptData] = useState(text?.initalState);

  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [textCopy, setTextCopy] = useState(false);
  const [isLoading, setLoading] = useState(false);

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

  const handlePlatform = (e) => {
    setPromptData({ ...prompt, platform: e.target.value });
  };

  const getData = async () => {
    const response = await fetch('/api/getGPTdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt, slug: text.url }),
    });

    const resData = await response.json();

    console.log(resData, 'resData');

    const DataArr = resData.result.split('\n');
    console.log(DataArr);
    setData(DataArr);
    setPromptData(text?.initalState);
    setLoading(false);
  };

  const handleApi = (e) => {
    if (!prompt.title) {
      setErr(true);
    }
    if (prompt.title) {
      e.preventDefault();
      setLoading(true);
      setData();
      getData();
    }
  };

  const handleClearFields = () => {
    setPromptData(text?.initalState);
  };

  return (
    <UI2
      prompt={prompt}
      handleTitle={handleTitle}
      handleDescription={handleDescription}
      handleKeywords={handleKeywords}
      handleLanguage={handleLanguage}
      handleTone={handleTone}
      handleTime={handleTime}
      handleClearText={handleClearText}
      handleCopyText={handleCopyText}
      handleApi={handleApi}
      isLoading={isLoading}
      handleClearFields={handleClearFields}
      handlePlatform={handlePlatform}
      data={data}
      err={err}
      textCopy={textCopy}
      text={text}
    />
  );
};

export async function getStaticPaths() {
  let pathsArr = pageObj.map((el) => {
    return { params: { ai: el.url } };
  });
  return {
    paths: pathsArr,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let text = pageObj.find((el) => context.params.ai === el.url);
  return {
    props: { text },
  };
}

export default ToolPage;