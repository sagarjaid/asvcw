const pageObj = [
  {
    url: 'ig-reel-script',
    toolName: 'AI IG Script Writer',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
      time: '30-to-60 seconds',
    },
    title: {
      name: 'Video title',
      maxLength: 250,
      placeholder: 'How to...',
      hint: 'Start the title with: How to, 3 steps, etc',
      err: 'title is required*',
      showOptional: false,
    },
    description: {
      name: 'Short video description',
      maxLength: 250,
      placeholder: 'Please enter video description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    time: 'time',
    btnText: 'Generate Reel Script',
    seoData: {
      title:
        'AI Instagram Reel Script Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write 30 sec Instagram Reel script powerd by AI and watch your IG Reel go viral! Try short video script by Scrip AI.',
      slug: 'ig-reel-script',
    },
  },
  {
    url: 'tiktok-script',
    toolName: 'AI Tiktok Script Writer',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
      time: '30-to-60 seconds',
    },
    title: {
      name: 'Video title',
      maxLength: 250,
      placeholder: 'How to...',
      hint: 'Start the title with: How to, 3 steps, etc',
      err: 'title is required*',
      showOptional: false,
    },
    description: {
      name: 'Short video description',
      maxLength: 250,
      placeholder: 'Please enter video description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    time: 'time',
    btnText: 'Generate Tiktok Script',
    seoData: {
      title:
        'AI Tiktok Script Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write 30 sec Tiktok script powerd by AI and watch your tiktok go viral! Try tiktok video script by Scrip AI.',
      slug: 'tiktok-script',
    },
  },
  {
    url: 'app',
    toolName: 'AI Short Script',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
      time: '30-to-60 seconds',
    },
    title: {
      name: 'Video title',
      maxLength: 250,
      placeholder: 'How to...',
      hint: 'Start the title with: How to, 3 steps, etc',
      err: 'title is required*',
      showOptional: false,
    },
    description: {
      name: 'Short video description',
      maxLength: 250,
      placeholder: 'Please enter video description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    time: 'time',
    btnText: 'Generate Script',
    seoData: {
      title: 'FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI',
      description:
        '10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts',
      slug: 'app',
    },
  },
  {
    url: 'yt-shorts-script',
    toolName: 'AI YT Shorts Script',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
      time: '30-to-60 seconds',
    },
    title: {
      name: 'Video title',
      maxLength: 250,
      placeholder: 'How to...',
      hint: 'Start the title with: How to, 3 steps, etc',
      err: 'title is required*',
      showOptional: false,
    },
    description: {
      name: 'Short video description',
      maxLength: 250,
      placeholder: 'Please enter video description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    time: 'time',
    btnText: 'Generate YT Shorts Script',
    seoData: {
      title:
        'AI YT Shorts Script Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write 30 sec Youtube Shorts script powerd by AI and watch your YT Shorts go viral! Try YT Shorts script by Scrip AI.',
      slug: 'yt-shorts-script',
    },
  },
  {
    url: 'paragraph-writer',
    toolName: 'AI Paragraph Writer',
    initalState: {
      title: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Topic',
      maxLength: 70,
      placeholder: 'Please enter topic for paragraph...',
      err: ' topic is required*',
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Write Paragraph',
    seoData: {
      title:
        'AI Paragraph Script Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write paragraph content powerd by AI. Try content writer by Scrip AI.',
      slug: 'paragraph-writer',
    },
  },
  {
    url: 'sentence-expander',
    toolName: 'AI Sentence Expander',
    initalState: {
      title: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Sentence',
      maxLength: 100,
      placeholder: 'Please enter sentence to expand upon...',
      err: ' sentence is required*',
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Expand the Sentence',
    seoData: {
      title: 'AI Sentence Expander [100% FREE - No Login required] — Scrip AI',
      description: 'Try AI sentence expander by Scrip AI.',
      slug: 'sentence-expander',
    },
  },
  {
    url: 'sentence-rewriter',
    toolName: 'AI Sentence Rewriter',
    initalState: {
      title: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Sentence',
      maxLength: 100,
      placeholder: 'Please enter content here (max 500 char)...',
      err: 'Content is required*',
      rows: 8,
      showOptional: false,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Rewriter Sentence',
    seoData: {
      title: 'AI Sentence Rewriter [100% FREE - No Login required] — Scrip AI',
      description:
        'AI powerd Sentence rewriter and Sentence rephraser. Try Sentence rewriter by Scrip AI.',
      slug: 'sentence-rewriter',
    },
  },
  {
    url: 'content-idea',
    toolName: 'AI Content Idea Generator',
    initalState: {
      title: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Topic',
      maxLength: 100,
      placeholder: 'Please enter topic here (max 100 char)...',
      err: 'topic is required*',
      showOptional: false,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generator 3 Content Ideas',
    seoData: {
      title:
        'AI Content Idea Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Content Ideas and 10X your Content creation today. Try Content Idea Generator by Scrip AI.',
      slug: 'content-idea',
    },
  },
  {
    url: 'twitter-bio',
    toolName: 'AI Twitter Bio Generator',
    initalState: {
      title: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'About You',
      maxLength: 300,
      placeholder: 'Please describe yourself (max 300 char)...',
      err: 'description is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: '1 key Interest',
      maxLength: 70,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generator 3 Twitter Bio',
    seoData: {
      title:
        'AI Twitter Bio Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate AI powerd Twitter Bio. Try Twitter Bio Generator by Scrip AI.',
      slug: 'twitter-bio',
    },
  },
  {
    url: 'definition',
    toolName: 'AI Definition Generator',
    initalState: {
      title: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Define',
      maxLength: 100,
      placeholder: 'What is...',
      err: 'topic is required*',
      showOptional: false,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Definition',
    seoData: {
      title:
        'AI Definition Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate any Definition in the world with our AI powerd Tool. Try Definition Generator by Scrip AI.',
      slug: 'definition',
    },
  },
  {
    url: 'content-rewriter',
    toolName: 'AI Content Rewriter',
    initalState: {
      title: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Content',
      maxLength: 500,
      placeholder: 'Please enter content here (max 500 char)...',
      err: 'Content is required*',
      rows: 8,
      showOptional: false,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Rewriter Content',
    seoData: {
      title: 'AI Content Rewriter [100% FREE - No Login required] — Scrip AI',
      description:
        'AI powerd Content rewriter and content rephraser. Try content rewriter by Scrip AI.',
      slug: 'content-rewriter',
    },
  },
  {
    url: 'sales-copy',
    toolName: 'AI Sales Copy Generator',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Product/Service Name',
      maxLength: 100,
      placeholder: 'Wedding photography...',
      err: 'product/service is required*',
      showOptional: false,
    },
    description: {
      name: 'Product description',
      maxLength: 250,
      placeholder: 'Please enter description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Sales Copy',
    seoData: {
      title:
        'AI Sales Copy Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write compelling sales copy powerd by AI and watch your Sales go higher! Try Sales Copy Generator by Scrip AI.',
      slug: 'sales-copy-generator',
    },
  },
  {
    url: 'social-post-idea',
    toolName: 'AI Social Post Ideas',
    initalState: {
      title: '',
      keywords: '',
      platform: 'Facebook',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Band description',
      maxLength: 300,
      placeholder: 'Please enter what your brand is and what it does...',
      err: 'barnd description is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    platform: 'Social media platform',
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate 3 Post Ideas',
    seoData: {
      title:
        'AI Social Media Post Ideas [100% FREE - No Login required] — Scrip AI',
      description:
        'Get Social Media post ideas 10X faster. Try AI Social Media Post Idea Generator by Scrip AI and watch your post go viral!.',
      slug: 'social-post-idea',
    },
  },
  {
    url: 'social-media-post',
    toolName: 'AI Social Media Post',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Facebook',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Post topic',
      maxLength: 100,
      placeholder: 'Please enter post topic...',
      err: 'topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Post description',
      maxLength: 250,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    platform: 'Social media platform',
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Post',
    seoData: {
      title:
        'AI Social Media Post Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write Social Media post that make your social conncetions stop scrolling. Try AI Social Media Post Generator by Scrip AI and watch your post go viral!.',
      slug: 'social-media-post',
    },
  },
  {
    url: 'linkedin-post',
    toolName: 'AI LinkedIn Post',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'LinkedIn',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Post topic',
      maxLength: 100,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Post description',
      maxLength: 250,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Linkedin Post',
    seoData: {
      title:
        'AI LinkedIn Post Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write LinkedIn post that make your LinkedIn conncetions stop scrolling. Try AI LinkedIn Post generator by Scrip AI and watch your LinkedIn post go viral!.',
      slug: 'linkedin-post',
    },
  },
  {
    url: 'linkedin-story-post',
    toolName: 'AI LinkedIn Story Post',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'LinkedIn',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Story topic',
      maxLength: 100,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Story description',
      maxLength: 250,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Linkedin Story Post',
    seoData: {
      title:
        'AI LinkedIn Story Post Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write LinkedIn Story post that make your LinkedIn conncetions stop scrolling. Try AI LinkedIn Story Post generator by Scrip AI and watch your LinkedIn post go viral!.',
      slug: 'linkedin-story-post',
    },
  },
  {
    url: 'tiktok-hook',
    toolName: 'AI Tiktok Hook',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Tiktok',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Tiktok topic',
      maxLength: 100,
      placeholder: 'Please enter Video topic...',
      err: 'video topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Tiktok description',
      maxLength: 250,
      placeholder: 'Please enter video description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Tiktok Hook',
    seoData: {
      title:
        'AI Tiktok Hook Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write Tiktok Hook that make your Tiktok followers stop scrolling. Try AI Tiktok Hook generator by Scrip AI and watch your Tiktok video go viral!.',
      slug: 'tiktok-hook',
    },
  },
  {
    url: 'youtube-hook',
    toolName: 'AI Youtube Hook',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Youtube',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Youtube video title',
      maxLength: 100,
      placeholder: 'Please enter Video title...',
      err: 'video title is required*',
      showOptional: false,
    },
    description: {
      name: 'video description',
      maxLength: 250,
      placeholder: 'Please enter video description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Youtube Video Hook',
    seoData: {
      title:
        'AI YouTube Hook Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write YouTube Hook that make YouTube viewer stick to video. Try AI YouTube Hook generator by Scrip AI and watch your YouTube video go viral!.',
      slug: 'youtube-hook',
    },
  },
  {
    url: 'linkedin-post-hook',
    toolName: 'AI LinkedIn Post Hook',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'LinkedIn',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Post topic',
      maxLength: 100,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Post description',
      maxLength: 250,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Linkedin Hook',
    seoData: {
      title:
        'AI LinkedIn Post Hook Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write LinkedIn post Hook that make your LinkedIn conncetions stop scrolling. Try AI LinkedIn Post Hook generator by Scrip AI and watch your LinkedIn post go viral!.',
      slug: 'linkedin-post-hook',
    },
  },
  {
    url: 'facebook-post',
    toolName: 'AI Facebook Post',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Facebook',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Post topic',
      maxLength: 100,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Post description',
      maxLength: 250,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Facebook Post',
    seoData: {
      title:
        'AI Facebook Post Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write Facebook post that make your Facebook conncetions stop scrolling. Try AI Facebook Post generator by Scrip AI and watch your Facebook post go viral!.',
      slug: 'facebook-post',
    },
  },
  {
    url: 'twitter-tweet',
    toolName: 'AI Twitter Tweet',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Twitter',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Tweet topic',
      maxLength: 300,
      placeholder: 'Please enter tweet topic...',
      err: 'tweet topic is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Tweet',
    seoData: {
      title:
        'AI Twitter Tweet Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Twitter Tweet that make your Twitter followers stop scrolling. Try AI Twitter Tweet generator by Scrip AI and watch your Twitter post go viral!.',
      slug: 'twitter-tweet',
    },
  },
  {
    url: 'twitter-thread',
    toolName: 'AI Twitter Thread',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Twitter',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Twitter thread topic',
      maxLength: 300,
      placeholder: 'Please enter tweet topic...',
      err: 'Twitter thread topic is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Twitter Thread',
    seoData: {
      title:
        'AI Twitter Thread Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Twitter Thread that make your Twitter followers stop scrolling. Try AI Twitter Thread generator by Scrip AI and watch your Twitter Threads go viral!.',
      slug: 'twitter-thread',
    },
  },
  {
    url: 'instagram-caption',
    toolName: 'AI Instagram Caption',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Instagram',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Post topic',
      maxLength: 100,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Post description',
      maxLength: 250,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Instagram Caption',
    seoData: {
      title:
        'AI Instagram Caption Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write Instagram Caption that make your Instagram followers stop scrolling. Try AI Instagram Caption generator by Scrip AI and watch your Instagram post go viral!.',
      slug: 'instagram-caption',
    },
  },
  {
    url: 'hashtag',
    toolName: 'AI Hashtag Generator',
    initalState: {
      title: '',
      description: '',
      platform: 'Facebook',
      language: 'English',
    },
    title: {
      name: 'Main hashtag',
      maxLength: 100,
      placeholder: 'Please enter main hashtag/keyword/topic...',
      err: 'main hashtag is required*',
      showOptional: false,
    },
    description: {
      name: 'Photo/video description',
      maxLength: 250,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    platform: 'Social media platform',
    language: 'Language',
    btnText: 'Generate Hashtags',
    seoData: {
      title: 'AI Hashtag Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Try the FREE Social media Hashtag Generator powerd by AI today and watch your posts go viral! FREE Hashtag Generator by Scrip AI.',
      slug: 'hashtag',
    },
  },
  {
    url: 'twitter-hashtag',
    toolName: 'AI Twitter Hashtag Generator',
    initalState: {
      title: '',
      platform: 'Twitter',
      language: 'English',
    },
    title: {
      name: 'Tweet topic',
      maxLength: 300,
      placeholder: 'Please enter tweet topic...',
      err: 'tweet topic is required*',
      rows: 5,
      showOptional: false,
    },
    language: 'Language',
    btnText: 'Generate Twitter Hashtags',
    seoData: {
      title:
        'AI Twitter Hashtag Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Twitter Hashtags that make Twitter Algorithm Happy. Try AI Twitter Hashtag generator by Scrip AI and watch your Twitter Tweet go viral!.',
      slug: 'twitter-hashtag',
    },
  },
  {
    url: 'linkedin-hashtag',
    toolName: 'AI Linkedin Hashtag Generator',
    initalState: {
      title: '',
      platform: 'Linkedin',
      language: 'English',
    },
    title: {
      name: 'Linkedin Post/topic',
      maxLength: 300,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      rows: 5,
      showOptional: false,
    },
    language: 'Language',
    btnText: 'Generate Linkedin Hashtags',
    seoData: {
      title:
        'AI Linkedin Hashtag Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Linkedin Hashtags that make Linkedin Algorithm Happy. Try AI Linkedin Hashtag generator by Scrip AI and watch your Linkedin post go viral!.',
      slug: 'linkedin-hashtag',
    },
  },
  {
    url: 'tiktok-hashtag',
    toolName: 'AI Tiktok Hashtag Generator',
    initalState: {
      title: '',
      platform: 'Tiktok',
      language: 'English',
    },
    title: {
      name: 'Tiktok topic',
      maxLength: 300,
      placeholder: 'Please enter tiktok topic...',
      err: 'tiktok topic is required*',
      rows: 5,
      showOptional: false,
    },
    language: 'Language',
    btnText: 'Generate Tiktok Hashtags',
    seoData: {
      title:
        'AI Tiktok Hashtag Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Tiktok Hashtags that make Tiktok Algorithm Happy. Try AI Tiktok Hashtag generator by Scrip AI and watch your Tiktok video go viral!.',
      slug: 'tiktok-hashtag',
    },
  },
  {
    url: 'facebook-hashtag',
    toolName: 'AI Facebook Hashtag Generator',
    initalState: {
      title: '',
      platform: 'Facebook',
      language: 'English',
    },
    title: {
      name: 'Facebook Post/topic',
      maxLength: 300,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      rows: 5,
      showOptional: false,
    },
    language: 'Language',
    btnText: 'Generate Facebook Hashtags',
    seoData: {
      title:
        'AI Facebook Hashtag Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Facebook Hashtags that make Facebook Algorithm Happy. Try AI Facebook Hashtag generator by Scrip AI and watch your Facebook post go viral!.',
      slug: 'facebook-hashtag',
    },
  },
  {
    url: 'instagram-hashtag',
    toolName: 'AI Instagram Hashtag Generator',
    initalState: {
      title: '',
      platform: 'Instagram',
      language: 'English',
    },
    title: {
      name: 'Instagram Post/topic',
      maxLength: 300,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      rows: 5,
      showOptional: false,
    },
    language: 'Language',
    btnText: 'Generate Instagram Hashtags',
    seoData: {
      title:
        'AI Instagram Hashtag Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Instagram Hashtag that make Instagram Algorithm Happy. Try AI Instagram Hashtag generator by Scrip AI and watch your Instagram post go viral!.',
      slug: 'instagram-hashtag',
    },
  },
  {
    url: 'youtube-hashtag',
    toolName: 'AI Youtube Hashtag Generator',
    initalState: {
      title: '',
      platform: 'Youtube',
      language: 'English',
    },
    title: {
      name: 'Youtube video topic',
      maxLength: 300,
      placeholder: 'Please enter video topic...',
      err: 'video topic is required*',
      rows: 5,
      showOptional: false,
    },
    language: 'Language',
    btnText: 'Generate Youtube Hashtags',
    seoData: {
      title:
        'AI Youtube Hashtag Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Youtube Hashtag that make Youtube Algorithm Happy. Try AI Youtube Hashtag generator by Scrip AI and watch your Youtube video go viral!.',
      slug: 'youtube-hashtag',
    },
  },
  {
    url: 'youtube-tag',
    toolName: 'AI Youtube Tag Generator',
    initalState: {
      title: '',
      platform: 'Youtube',
      language: 'English',
    },
    title: {
      name: 'Youtube video topic',
      maxLength: 300,
      placeholder: 'Please enter video topic...',
      err: 'video topic is required*',
      rows: 5,
      showOptional: false,
    },
    language: 'Language',
    btnText: 'Generate Youtube Tags',
    seoData: {
      title:
        'AI Youtube Tag Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Youtube Tag that make Youtube Algorithm Happy. Try AI Youtube Tag generator by Scrip AI and watch your Youtube video go viral!.',
      slug: 'youtube-tag',
    },
  },
  {
    url: 'youtube-video-idea',
    toolName: 'AI Youtube Video Ideas',
    initalState: {
      title: '',
      keywords: '',
      platform: 'Youtube',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Video topic',
      maxLength: 300,
      placeholder: 'Please enter video topic...',
      err: 'video topic is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate 3 YT Video Ideas',
    seoData: {
      title:
        'AI Youtube Video Ideas [100% FREE - No Login required] — Scrip AI',
      description:
        'Get Youtube Video Ideas 10X faster. Try AI Youtube Video Ideas Generator by Scrip AI and watch your YT video go viral!.',
      slug: 'youtube-video-idea',
    },
  },
  {
    url: 'youtube-intro',
    toolName: 'AI Youtube Intro',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Youtube',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Youtube video title',
      maxLength: 100,
      placeholder: 'Please enter Video title...',
      err: 'video title is required*',
      showOptional: false,
    },
    description: {
      name: 'video description',
      maxLength: 250,
      placeholder: 'Please enter video description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Youtube Video Intro',
    seoData: {
      title:
        'AI YouTube Intro Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write YouTube Intro that make YouTube viewer stick to video. Try AI YouTube Intro generator by Scrip AI and watch your YouTube video go viral!.',
      slug: 'youtube-hook',
    },
  },
  {
    url: 'youtube-video-outline',
    toolName: 'AI Youtube Video Outine',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Youtube',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Youtube video title',
      maxLength: 100,
      placeholder: 'Please enter Video title...',
      err: 'video title is required*',
      showOptional: false,
    },
    description: {
      name: 'video description',
      maxLength: 250,
      placeholder: 'Please enter video description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Youtube Video Outline',
    seoData: {
      title:
        'AI YouTube Video outline Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write YouTube Video outline that make YouTube viewer stick to video. Try AI YouTube Video outline generator by Scrip AI and watch your YouTube video go viral!.',
      slug: 'youtube-video-outline',
    },
  },
  {
    url: 'youtube-seo-title',
    toolName: 'AI Youtube SEO Title',
    initalState: {
      title: '',
      keywords: '',
      platform: 'Youtube',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Video title/topic',
      maxLength: 300,
      placeholder: 'Please enter video title/topic...',
      err: 'video title/topic is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    btnText: 'Generate Youtube SEO Title',
    seoData: {
      title:
        'AI Youtube SEO Title Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Get Youtube SEO Title 10X faster. Try AI Youtube SEO Title Generator by Scrip AI and watch your YT video go viral!.',
      slug: 'youtube-seo-title',
    },
  },
  {
    url: 'youtube-seo-description',
    toolName: 'AI Youtube SEO Description',
    initalState: {
      title: '',
      keywords: '',
      platform: 'Youtube',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Video title/topic',
      maxLength: 300,
      placeholder: 'Please enter video title/topic...',
      err: 'video title/topic is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    btnText: 'Generate Youtube SEO Description',
    seoData: {
      title:
        'AI Youtube SEO Description Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Get Youtube SEO Description 10X faster. Try AI Youtube SEO Description Generator by Scrip AI and watch your YT video go viral!.',
      slug: 'youtube-seo-description',
    },
  },
  {
    url: 'email-subject',
    toolName: 'AI Email Subject Generator',
    initalState: {
      title: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Email description',
      maxLength: 300,
      placeholder: 'Please enter description...',
      err: 'descriptionis required*',
      rows: 5,
      showOptional: false,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Email Subject',
    seoData: {
      title:
        'AI Email Subject Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Generate Email Subject line that has highy open rate. Try AI Email Subject generator by Scrip AI.',
      slug: 'email-subject',
    },
  },
  {
    url: 'blog-post-idea',
    toolName: 'AI Blog Post Ideas',
    initalState: {
      title: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Blog topic',
      maxLength: 100,
      placeholder: 'Please enter blog topic/name/title...',
      err: 'video topic is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    tone: 'Tone',
    language: 'Language',
    btnText: 'Generate 3 Blog Post Ideas',
    seoData: {
      title: 'AI Blog Post Ideas [100% FREE - No Login required] — Scrip AI',
      description:
        'Get Blog Post Ideas 10X faster. Try AI Blog Post Ideas Generator by Scrip AI and watch your Blog post go viral!.',
      slug: 'blog-post-idea',
    },
  },
  {
    url: 'blog-post-title',
    toolName: 'AI Blog Post Title',
    initalState: {
      title: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Blog topic',
      maxLength: 100,
      placeholder: 'Please enter blog topic/name/title...',
      err: 'video topic is required*',
      rows: 8,
      showOptional: false,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    tone: 'Tone',
    language: 'Language',
    btnText: 'Generate 3 Blog Post Title',
    seoData: {
      title: 'AI Blog Post Title [100% FREE - No Login required] — Scrip AI',
      description:
        'Get Blog Post Title 10X faster. Try AI Blog Post Title Generator by Scrip AI and watch your Blog post go viral!.',
      slug: 'blog-post-title',
    },
  },
  {
    url: 'blog-post-outline',
    toolName: 'AI Blog Post Outline',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Online Blog',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Blog post title',
      maxLength: 100,
      placeholder: 'Please enter blog post title...',
      err: 'video title is required*',
      showOptional: false,
    },
    description: {
      name: 'Blog description',
      maxLength: 250,
      placeholder: 'Please enter blog description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Blog Post Outline',
    seoData: {
      title:
        'AI Blog Post Outline Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write Blog Post Outline that makes your viewer stick on blog. Try AI Blog Post Outline generator by Scrip AI and watch your blog post go viral!.',
      slug: 'blog-post-outline',
    },
  },
  {
    url: 'blog-post-hook',
    toolName: 'AI Blog Post Hook',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      platform: 'Online Blog',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Blog post topic',
      maxLength: 100,
      placeholder: 'Please enter post topic...',
      err: 'post topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Post description',
      maxLength: 250,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Generate Blog Post Hook',
    seoData: {
      title:
        'AI Blog Post Hook Generator [100% FREE - No Login required] — Scrip AI',
      description:
        'Write Blog post Hook 10X faster. Try AI Blog Post Hook generator by Scrip AI and watch your blog post go viral!.',
      slug: 'blog-post-hook',
    },
  },
  {
    url: 'article-rewriter',
    toolName: 'AI Article Rewriter ',
    initalState: {
      title: '',
      description: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Content',
      maxLength: 500,
      placeholder: 'Please enter content here (max 500 char)...',
      err: 'Content is required*',
      rows: 8,
      showOptional: false,
    },
    description: {
      name: 'Article title',
      maxLength: 100,
      placeholder: 'Please enter article title...',
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Rewriter Article',
    seoData: {
      title: 'AI Article Rewriter [100% FREE - No Login required] — Scrip AI',
      description:
        'AI powered Article rewriter and content rephraser. Try Article rewriter by Scrip AI.',
      slug: 'article-rewriter',
    },
  },
  {
    url: 'blog-rewriter',
    toolName: 'AI Blog Paragraph Rewriter',
    initalState: {
      title: '',
      description: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Content',
      maxLength: 500,
      placeholder: 'Please enter content here (max 500 char)...',
      err: 'Content is required*',
      rows: 8,
      showOptional: false,
    },
    description: {
      name: 'Blog Post title',
      maxLength: 100,
      placeholder: 'Please enter post title...',
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Rewriter Blog',
    seoData: {
      title:
        'AI  Blog Paragraph Rewriter [100% FREE - No Login required] — Scrip AI',
      description:
        'AI powered Blog paragraph rewriter and content rephraser. Try blog rewriter by Scrip AI.',
      slug: 'blog-rewriter',
    },
  },
  {
    url: 'blog-paragraph-writer',
    toolName: 'AI Blog Paragraph Writer',
    initalState: {
      title: '',
      description: '',
      keywords: '',
      language: 'English',
      tone: 'Professional',
    },
    title: {
      name: 'Blog post title/topic',
      maxLength: 70,
      placeholder: 'Please enter title/topic for paragraph...',
      err: ' topic is required*',
      showOptional: false,
    },
    description: {
      name: 'Post description',
      maxLength: 200,
      placeholder: 'Please enter post description...',
      showOptional: true,
    },
    keywords: {
      name: 'keywords',
      maxLength: 50,
      showOptional: true,
    },
    language: 'Language',
    tone: 'Tone',
    btnText: 'Write Blog Paragraph',
    seoData: {
      title:
        'AI Blog Paragraph Script Writer [100% FREE - No Login required] — Scrip AI',
      description:
        'Write Blog paragraph content powered by AI. Try Blog content writer by Scrip AI.',
      slug: 'blog-paragraph-writer',
    },
  },
];

export default pageObj;
