const GenratePrompt = (prompt, slug) => {
  const { title, description, language, keywords, tone, time, platform } =
    prompt;

  let userPrompt;
  switch (slug) {
    case 'ig-reel-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Instagrm Reel on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'tiktok-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Tiktok on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'yt-shorts-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Youtube Shorts on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'app':
      userPrompt = `Assume you are a content creator. Write content in ${language} for a Tiktok on following. Topic: ${title}, description: ${description}, keywords: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'paragraph-writer':
      userPrompt = `Write 5-6 line paragraph in ${language} for following. Topic: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'sentence-expander':
      userPrompt = `Continue writing following Sentence in ${language}. Sentence: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'content-rewriter' || 'sentence-rewriter':
      userPrompt = `Rewrite following content in ${language}. Content: ${title}, Tone: ${tone}`;
      break;
    case 'sales-copy':
      userPrompt = `Write Sales Copy in ${language} for a landing page based on following. Product/Service Name: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the copy with 1 sentence hook, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'social-post-idea':
      userPrompt = `Write 3 Social Media Post ideas for ${platform} in ${language} based on following. Topic: ${title}, keywords: ${keywords} Tone: ${tone}`;
      break;
    case 'content-idea':
      userPrompt = `Write 3 content ideas in ${language} for following. Topic: ${title}, Tone: ${tone}`;
      break;
    case 'twitter-bio':
      userPrompt = `Write 3 one line Twitter Bio in ${language} for me based on following. About Me: ${title}, Interests: ${keywords}, Tone: ${tone}, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'social-media-post':
      userPrompt = `Assume you are a social media expert. Write content in ${language} for a ${platform} post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'instagram-caption':
      userPrompt = `Assume you are Instagram content creator. Write Instagram Caption in ${language} on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the Caption with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-post':
      userPrompt = `Assume you are linkedin content creator. Write content in ${language} for a linkedin post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-story-post':
      userPrompt = `Assume you are linkedin content creator. Write linkedin Story post in ${language} on following. Story Topic: ${title}, Story description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-post-hook':
      userPrompt = `Assume you are linkedin content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a linkedin post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'tiktok-hook':
      userPrompt = `Assume you are Tiktok content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a Tiktok video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-hook':
      userPrompt = `Assume you are youtube content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a Youtube video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'facebook-post':
      userPrompt = `Assume you are facebook content creator.Write content in ${language} for a facebook post on following.Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'twitter-tweet':
      userPrompt = `Assume you are Twitter content creator.Write Tweet in ${language} for a Twitter post on following.Tweet Topic: ${title}, keyword: ${keywords}, Tone: ${tone}, Start the tweet with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'twitter-thread':
      userPrompt = `Assume you are Twitter content creator.Write Twitter Thread in ${language} for a Twitter on following.Thread Topic: ${title}, keyword: ${keywords}, Tone: ${tone}, Start the tweet with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'definition':
      userPrompt = `Write definition in ${language} for following.Topic: ${title}, Tone: ${tone}`;
      break;
    case 'hashtag':
      userPrompt = `Write 30 hashtag in ${language} for ${platform} post on following.Topic: ${title}, description: ${description} `;
      break;
    case 'twitter-hashtag':
      userPrompt = `Write 5 hashtag in ${language} for Twitter post on following.Tweet Topic: ${title}`;
      break;
    case 'linkedin-hashtag':
      userPrompt = `Write 5 hashtag in ${language} for linkedin post on following. Topic: ${title}`;
      break;
    case 'tiktok-hashtag':
      userPrompt = `Write 5 hashtag in ${language} for tiktok video on following. video: ${title}`;
      break;
    case 'youtube-hashtag':
      userPrompt = `Write 5 hashtag in ${language} for youtube video on following. video: ${title}`;
      break;
    case 'youtube-tags':
      userPrompt = `Write 5  youtube video tags in ${language} for following. video: ${title}`;
      break;
    case 'facebook-hashtag':
      userPrompt = `Write 20 hashtag in ${language} for facebook post on following. Topic: ${title}`;
      break;
    case 'instagram-hashtag':
      userPrompt = `Write 30 hashtag in ${language} for instagram post on following. Topic: ${title}`;
      break;
    default:
      break;
  }
  return userPrompt;
};

export default GenratePrompt;
