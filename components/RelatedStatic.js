const RelatedStatic = [
  {
    url: 'linkedin-post',
    name: 'LinkedIn Post',
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
    name: 'LinkedIn Story Post',
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
    url: 'twitter-tweet',
    name: 'Twitter Tweet',
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
    url: 'linkedin-hashtag',
    name: 'Linkedin Hashtag',
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
];

export default RelatedStatic;
