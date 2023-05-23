import React from 'react';
import Footer from './Footer';
import { domainUrl } from './domainUrl';

const Tools = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="p-4 text-xl font-bold">
          Free AI-powered Tools | No credit card required | No login is required
        </h1>
        <hr />
        <div className="flex flex-col flex-wrap  sm:flex-row">
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Social Media AI
              <span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/social-media-post`}
                >
                  Social Media Post
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/social-post-idea`}
                >
                  Social Media Post Ideas
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/hashtag`}
                >
                  Hashtag Generator
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/app`}
                >
                  Short Video Script
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Twitter AI<span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/twitter-bio`}
                >
                  Twitter Bio
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/twitter-tweet`}
                >
                  Twitter Tweet
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/twitter-thread`}
                >
                  Twitter Thread
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/twitter-hashtag`}
                >
                  Twitter Hashtag
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Linkedin AI
              <span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/linkedin-post-hook`}
                >
                  Linkedin Post Hook
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/linkedin-post`}
                >
                  Linkedin Post
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/linkedin-story-post`}
                >
                  Linkedin Story Post
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/linkedin-hashtag`}
                >
                  Linkedin Hashtag
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Facebook AI
              <span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/facebook-post`}
                >
                  Facebook Post
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/facebook-hashtag`}
                >
                  Facebook Hashtag
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Instagram AI
              <span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/instagram-caption`}
                >
                  Instagram Caption
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/instagram-hashtag`}
                >
                  Instagram Hashtag
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/ig-reel-script`}
                >
                  Instagram Reel Script
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Tiktok AI<span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/tiktok-hook`}
                >
                  Tiktok Hook
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/tiktok-hashtag`}
                >
                  Tiktok Hashtag
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/tiktok-script`}
                >
                  Tiktok Script
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Youtube AI<span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/youtube-video-idea`}
                >
                  Youtube Video Ideas
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/youtube-video-outline`}
                >
                  Youtube Video Outline
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/youtube-intro`}
                >
                  Youtube Intro
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/youtube-seo-title`}
                >
                  Youtube SEO Title
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/youtube-seo-description`}
                >
                  Youtube Description
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/youtube-hook`}
                >
                  Youtube Hook
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/youtube-hashtag`}
                >
                  Youtube Hashtag
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/youtube-tag`}
                >
                  Youtube Tag
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/yt-shorts-script`}
                >
                  Youtube Shorts Script
                </a>
              </li>
            </ul>
          </div>

          {/* </div> */}

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Copywriting AI
              <span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col  gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/paragraph-writer`}
                >
                  Paragraph Writer
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/sentence-expander`}
                >
                  Sentence Expander
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/content-rewriter`}
                >
                  Content Rewriter
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/sentence-rewriter`}
                >
                  Sentence Rewriter
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/sales-copy`}
                >
                  Sales Copy Generator
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/content-idea`}
                >
                  Content Ideas
                </a>
              </li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Blog AI
              <span className="text-[9px] text-rose-600">(Live)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/blog-post-idea`}
                >
                  Blog Post Ideas
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/blog-post-title`}
                >
                  Blog Post Title
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/blog-post-outline`}
                >
                  Blog Post Outline
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/blog-post-hook`}
                >
                  Blog Post Hook
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/blog-paragraph-writer`}
                >
                  Blog Paragraph Writer
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/blog-rewriter`}
                >
                  Blog reWriter
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/blog-paragraph-writer`}
                >
                  Article reWriter
                </a>
              </li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Email AI
              <span className="text-[9px] text-rose-600">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/email-subject`}
                >
                  Email Subject
                </a>
              </li>
              <li>Cold Email</li>
              <li>Email Rewriter</li>
              <li>Professional Email Rewriter</li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              SEO AI
              <span className="text-[9px] text-rose-600">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>SEO Keyword Generator</li>
              <li>SEO Title Generator</li>
              <li>SEO Meta Description</li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Website Copy AI
              <span className="text-[9px] text-rose-600">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col  gap-2 pl-4">
              <li>Homepage Headline</li>
              <li>Call-to-Action</li>
              <li>About Us</li>
              <li>Product Features</li>
              <li>Product Benefits</li>
              <li>Product Review</li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              AI Job/Resume
              <span className="text-[9px] text-rose-600">(Coming Soon)</span>
            </div>

            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>Linkedin Cold reachout</li>
              <li>About Me</li>
              <li>Resume Hook/ Intro</li>
              <li>Job Skills Generator</li>
              <li>Job Description</li>
            </ul>
          </div>

          <div className="p-4">
            <div className="mb-4 flex flex-col">
              AI Names
              <span className="text-[9px] text-rose-600">(Coming Soon)</span>
            </div>

            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
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
              Advertment AI
              <span className="text-[9px] text-rose-600">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>Ad copy</li>
            </ul>
            <div className="mt-2 flex flex-col">Facebook</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>Facebook Ads Hook</li>
              <li>Facebook Ad Copy</li>
            </ul>
            <div className="mt-2 flex flex-col">Instagram</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>Instagram Ads Caption</li>
              <li>Instagram Ad Copy</li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/ig-reel-script`}
                >
                  Instagram Reel Ad Script
                </a>
              </li>
            </ul>
            <div className="mt-2 flex flex-col">Tiktok</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/tiktok-script`}
                >
                  Tiktok Ads Script
                </a>
              </li>
            </ul>
            <div className="mt-2 flex flex-col ">Linkedin</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>Linkedin Ads Title</li>
              <li>Linkedin Ads Description</li>
            </ul>
            <div className="mt-2 flex flex-col ">Google ads</div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>Google Ads Title</li>
              <li>Google Ads Description</li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-4 flex flex-col">
              Other AI Tools
              <span className="text-[9px] text-rose-600">(Coming Soon)</span>
            </div>
            <ul className="flex cursor-pointer list-disc flex-col gap-2 pl-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href={`${domainUrl}/definition`}
                >
                  Definition
                </a>
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
        <div className="p-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Tools;
