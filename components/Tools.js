import React from 'react';

const Tools = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="p-4 text-xl font-bold">
          Free AI-powered Tools | No credit card required | No login is required
        </h1>
        <div className="flex w-full flex-wrap gap-4 p-4">
          <a
            href="/hashtag"
            className="flex w-full flex-col gap-1 rounded-md border border-black p-4 hover:bg-black hover:text-white sm:w-[32%]"
          >
            <span className="w-fit rounded-md bg-rose-500 px-2 py-0.5 text-[9px] text-white">
              New
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold">Hashtag generator</span>
              <span className="text-xs">
                Generate relevant hashtags for your Instagram/Linkedin/Twitter &
                other Social media posts with our hashtag generator.
              </span>
            </div>
          </a>
          <a
            href="/twitter-hashtag"
            className="flex w-full flex-col gap-1 rounded-md border border-black p-4 hover:bg-blue-500 hover:text-white sm:w-[32%]"
          >
            <span className="w-fit rounded-md bg-rose-500 px-2 py-0.5 text-[9px] text-white">
              New
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold">
                Twitter Hashtag generator
              </span>
              <span className="text-xs">
                Generate highly relevant twitter hashtags for your next viral
                tweet.
              </span>
            </div>
          </a>
          <a
            href="/app"
            className="flex w-full flex-col gap-1 rounded-md border border-black p-4 hover:bg-rose-500 hover:text-white sm:w-[32%]"
          >
            <span className="w-fit rounded-md bg-black px-2 py-0.5 text-[9px] text-white">
              Popular
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold">
                AI Short video Script Writer
              </span>
              <span className="text-xs">
                Create short videos 30-sec to 60-sec scripts in 1 minutes!
              </span>
            </div>
          </a>
        </div>
        <h1 className="p-4 text-xl font-bold">
          MORE AI TOOLS Are Coming Soon..!
        </h1>
        <div className="flex flex-col flex-wrap  sm:flex-row">
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Copywriting AI<span className="text-[9px]">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col  gap-2 pl-4 text-blue-500">
              <li>Paragraph Writer</li>
              <li>Text Expander</li>
              <li>Content Rewriter</li>
              <li>Content Shortener</li>
              <li>Sales Copy Generator</li>
              <li>Sentence Rewriter</li>
              <li>Content Ideas</li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Email AI<span className="text-[9px]">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Email Subject</li>
              <li>Cold Email</li>
              <li>Email Rewriter</li>
              <li>Professional Email Rewriter</li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Blog AI<span className="text-[9px]">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Blog Post Ideas</li>
              <li>Blog Post Title</li>
              <li>Blog Post Outline</li>
              <li>Blog Post Hook</li>
              <li>Blog Paragraph Writer</li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              SEO AI<span className="text-[9px]">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>SEO Keyword Generator</li>
              <li>SEO Title Generator</li>
              <li>SEO Meta Description</li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Website Copy AI<span className="text-[9px]">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col  gap-2 pl-4 text-blue-500">
              <li>Homepage Headline</li>
              <li>Call-to-Action</li>
              <li>About Us</li>
              <li>Product Features</li>
              <li>Product Benefits</li>
              <li>Product Review</li>
            </ul>
          </div>

          <div className="flex flex-col gap-1 p-4">
            <div className="mb-4 flex flex-col">
              Social Media AI<span className="text-[9px]">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Social Media Post</li>
              <li>Social Media Theme</li>
              <li>
                <a className="underline" href="/hashtag">
                  Hashtag Generator
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>
                <a className="underline" href="/app">
                  Short Video Script
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
            <div className="mt-2 flex flex-col">Twitter</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Twitter Bio</li>
              <li>Twitter Tweet</li>
              <li>Twitter Thread</li>
              <li>
                <a className="underline" href="/twitter-hashtag">
                  Twitter Hashtag
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
            <div className="mt-2 flex flex-col ">Linkedin</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>
                <a className="underline" href="/linkedin-post-hook">
                  Linkedin Post Hook
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>
                <a className="underline" href="/linkedin-post">
                  Linkedin Post
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>Linkedin Long Text Thread</li>
              <li>Linkedin Story Post</li>
              <li>
                <a className="underline" href="/linkedin-hashtag">
                  Linkedin Hashtag
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
            <div className="mt-2 flex flex-col">Facebook</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Facebook Post</li>
              <li>
                <a className="underline" href="/facebook-hashtag">
                  Facebook Hashtag
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
            <div className="mt-2 flex flex-col">Instagram</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Instagram Caption</li>
              <li>
                <a className="underline" href="/instagram-hashtag">
                  Instagram Hashtag
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>
                <a className="underline" href="/ig-reel-script">
                  Instagram Reel Script
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
            <div className="mt-2 flex flex-col">Youtube</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Youtube Video Ideas</li>
              <li>Youtube SEO Title</li>
              <li>Youtube Description</li>
              <li>Youtube Video Outline</li>
              <li>Youtube Intro</li>
              <li>
                <a className="underline" href="/youtube-hook">
                  Youtube Hook
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>
                <a className="underline" href="/youtube-hashtag">
                  Youtube Hashtag
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>
                <a className="underline" href="/youtube-tag">
                  Youtube Tag
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>
                <a className="underline" href="/yt-shorts-script">
                  Youtube Shorts Script
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
            <div className="mt-2 flex flex-col">Tiktok</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>
                <a className="underline" href="/tiktok-hook">
                  Tiktok Hook
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>
                <a className="underline" href="/tiktok-hashtag">
                  Tiktok Hashtag
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>
                <a className="underline" href="/tiktok-script">
                  Tiktok Script
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              AI Job/Resume<span className="text-[9px]">(Coming Soon)</span>
            </div>

            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Linkedin Cold reachout</li>
              <li>About Me</li>
              <li>Resume Hook/ Intro</li>
              <li>Job Skills Generator</li>
              <li>Job Description</li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              AI Names<span className="text-[9px]">(Coming Soon)</span>
            </div>

            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Blog Name</li>
              <li>Company Name</li>
              <li>Buisness Name</li>
              <li>Domain Name</li>
              <li>Book Name</li>
              <li>Play Name</li>
              <li>Project Name</li>
              <li>UserName</li>
              <li>Youtube Name</li>
              <li>App Name</li>
              <li>Restaurant Name</li>
              <li>Baby Boy Name</li>
              <li>Cafe Name</li>
              <li>Random Name</li>
            </ul>
          </div>

          <div className="flex flex-col gap-1 p-4">
            <div className="mb-4 flex flex-col">
              Advertment AI<span className="text-[9px]">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Ad copy</li>
            </ul>
            <div className="mt-2 flex flex-col">Facebook</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Facebook Ads Hook</li>
              <li>Facebook Ad Copy</li>
            </ul>
            <div className="mt-2 flex flex-col">Instagram</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Instagram Ads Caption</li>
              <li>Instagram Ad Copy</li>
              <li>
                <a className="underline" href="/ig-reel-script">
                  Instagram Reel Ad Script
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
            <div className="mt-2 flex flex-col">Tiktok</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>
                <a className="underline" href="/tiktok-script">
                  Tiktok Ads Script
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
            </ul>
            <div className="mt-2 flex flex-col ">Linkedin</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Linkedin Ads Title</li>
              <li>Linkedin Ads Description</li>
            </ul>
            <div className="mt-2 flex flex-col ">Google ads</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>Google Ads Title</li>
              <li>Google Ads Description</li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Other AI Tools<span className="text-[9px]">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4 text-blue-500">
              <li>
                <a className="underline" href="/definition">
                  Definition
                </a>{' '}
                <span className="text-[9px] text-rose-500">(live)</span>{' '}
              </li>
              <li>Song Writer</li>
              <li>Poem Writer</li>
              <li>Bullet Point Summary</li>
              <li>Bullet Point Answer</li>
              <li>Question Generator</li>
              <li>Question Answer Generator</li>
              <li>Fact Generator</li>
              <li>Quiz Generator</li>
              <li>Topic Example Generator</li>
              <li>AI Boy Chat Response</li>
              <li>AI Girl Chat Response</li>
              <li>Customer Service Response</li>
              <li>Pros And Cons</li>
              <li>Slogan Generator</li>
              <li>Webinar Title Generator</li>
              <li>Acronym Generator</li>
              <li>AI Language Translator</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 py-20">
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
        <a href="https://scripai.com/ai-tools" target="_blank">
          Tools
        </a>
        <span>|</span>
        <a href="https://scripai.com/new" target="_blank">
          New
        </a>
      </div>
    </>
  );
};

export default Tools;
