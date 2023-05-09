import React from 'react'

const Tools = () => {
    return (
        <>
            <div className="w-full">
                <h1 className="text-xl p-4 font-bold">Free AI-powered Tools | No credit card required | No login is required</h1>
                <div className="flex w-full gap-4 flex-wrap p-4">
                    <a href="/hashtag" className="w-full sm:w-[32%] flex flex-col gap-1 p-4 border border-black hover:bg-black hover:text-white rounded-md">
                        <span className="bg-rose-500 w-fit text-white py-0.5 px-2 rounded-md text-[9px]">
                            New
                        </span>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-lg">
                                Hashtag generator
                            </span>
                            <span className="text-xs">
                                Generate relevant hashtags for your Instagram/Linkedin/Twitter & other Social media posts with our hashtag generator.
                            </span>
                        </div>
                    </a>
                    <a href="/twitter-hashtag" className="w-full sm:w-[32%] flex flex-col gap-1 p-4 border border-black hover:bg-blue-500 hover:text-white rounded-md">
                        <span className="bg-rose-500 w-fit text-white py-0.5 px-2 rounded-md text-[9px]">
                            New
                        </span>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-lg">
                                Twitter Hashtag generator
                            </span>
                            <span className="text-xs">
                                Generate highly relevant twitter hashtags for your next viral tweet.
                            </span>
                        </div>
                    </a>
                    <a href="/app" className="w-full sm:w-[32%] flex flex-col gap-1 p-4 border border-black hover:bg-rose-500 hover:text-white rounded-md">
                        <span className="bg-black w-fit text-white py-0.5 px-2 rounded-md text-[9px]">
                            Popular
                        </span>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-lg">
                                AI Short video Script Writer
                            </span>
                            <span className="text-xs">
                                Create short videos 30-sec to 60-sec scripts in 1 minutes!
                            </span>
                        </div>
                    </a>


                </div>
                <h1 className="text-xl p-4 font-bold">MORE AI TOOLS Are Coming Soon..!</h1>
                <div className="flex flex-wrap flex-col  sm:flex-row">
                    <div className="p-4">
                        <div className="flex flex-col mb-4">Copywriting AI<span className="text-[9px]">(Coming Soon)</span></div>
                        <ul className="flex flex-col gap-2 list-disc  pl-4 cursor-pointer text-blue-500">
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
                        <div className="flex flex-col mb-4">Email AI<span className="text-[9px]">(Coming Soon)</span></div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Email Subject</li>
                            <li>Cold Email</li>
                            <li>Email Rewriter</li>
                            <li>Professional Email Rewriter</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col mb-4">Blog AI<span className="text-[9px]">(Coming Soon)</span></div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Blog Post Ideas</li>
                            <li>Blog Post Title</li>
                            <li>Blog Post Outline</li>
                            <li>Blog Post Hook</li>
                            <li>Blog Paragraph Writer</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col mb-4">SEO AI<span className="text-[9px]">(Coming Soon)</span></div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>SEO Keyword Generator</li>
                            <li>SEO Title Generator</li>
                            <li>SEO Meta Description</li>
                        </ul>
                    </div>

                    <div className="p-4">
                        <div className="flex flex-col mb-4">Website Copy AI<span className="text-[9px]">(Coming Soon)</span></div>
                        <ul className="flex flex-col gap-2 list-disc  pl-4 cursor-pointer text-blue-500">
                            <li>Homepage Headline</li>
                            <li>Call-to-Action</li>
                            <li>About Us</li>
                            <li>Product Features</li>
                            <li>Product Benefits</li>
                            <li>Product Review</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex flex-col mb-4">Social Media AI<span className="text-[9px]">(Coming Soon)</span></div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Social Media Post</li>
                            <li>Social Media Theme</li>
                            <li className="text-rose-500"><a href="/hashtag">Hashtag Generator</a></li>
                            <li className="text-rose-500"><a href="/app">Short Video Script</a></li>

                        </ul>
                        <div className="flex flex-col mt-2">Twitter</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Twitter Bio</li>
                            <li>Twitter Tweet</li>
                            <li>Twitter Thread</li>
                            <li className="text-rose-500"><a href="/twitter-hashtag">Twitter Hashtag</a></li>
                        </ul>
                        <div className="flex flex-col mt-2 ">Linkedin</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Linkedin Headline</li>
                            <li>Linkedin Post</li>
                            <li>Linkedin Long Text Thread</li>
                            <li>Linkedin Story Post</li>
                            <li>Linkedin Hashtag</li>
                        </ul>
                        <div className="flex flex-col mt-2">Facebook</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Facebook Post</li>
                            <li>Facebook Hashtag</li>
                        </ul>
                        <div className="flex flex-col mt-2">Instagram</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Instagram Caption</li>
                            <li>Instagram Hashtag</li>
                            <li>Instagram Reel Script</li>
                        </ul>
                        <div className="flex flex-col mt-2">Youtube</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Youtube Video Ideas</li>
                            <li>Youtube SEO Title</li>
                            <li>Youtube Description</li>
                            <li>Youtube Video Outline</li>
                            <li>Youtube Intro</li>
                            <li>Youtube Hook</li>
                            <li>Youtube Shorts Script</li>
                        </ul>
                        <div className="flex flex-col mt-2">Tiktok</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Tiktok Hook</li>
                            <li>Tiktok Script</li>
                        </ul>
                    </div>

                    <div className="p-4">
                        <div className="flex flex-col mb-4">AI Job/Resume<span className="text-[9px]">(Coming Soon)</span></div>

                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Linkedin Cold reachout</li>
                            <li>About Me</li>
                            <li>Resume Hook/ Intro</li>
                            <li>Job Skills Generator</li>
                            <li>Job Description</li>
                        </ul>
                    </div>


                    <div className="p-4">
                        <div className="flex flex-col mb-4">AI Names<span className="text-[9px]">(Coming Soon)</span></div>

                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
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
                        <div className="flex flex-col mb-4">Advertment AI<span className="text-[9px]">(Coming Soon)</span></div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Ad copy</li>
                        </ul>
                        <div className="flex flex-col mt-2">Facebook</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Facebook Ads Hook</li>
                            <li>Facebook Ad Copy</li>
                        </ul>
                        <div className="flex flex-col mt-2">Instagram</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Instagram Ads Caption</li>
                            <li>Instagram Ad Copy</li>
                            <li>IG Reel Ad Script</li>
                        </ul>
                        <div className="flex flex-col mt-2">Tiktok</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Tiktok Ads Script</li>
                        </ul>
                        <div className="flex flex-col mt-2 ">Linkedin</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Linkedin Ads Title</li>
                            <li>Linkedin Ads Description</li>
                        </ul>
                        <div className="flex flex-col mt-2 ">Google ads</div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Google Ads Title</li>
                            <li>Google Ads Description</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col mb-4">Other AI Tools<span className="text-[9px]">(Coming Soon)</span></div>
                        <ul className="flex flex-col gap-2 list-disc pl-4 cursor-pointer text-blue-500">
                            <li>Definition</li>
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
                <a href="https://scripai.com/GDPR" target="_blank">
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
    )
}

export default Tools