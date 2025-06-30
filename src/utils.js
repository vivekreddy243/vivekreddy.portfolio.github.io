export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
  };
  
  export const socialMediaUrl = {
    twitter: "https://twitter.com/your_username",
    linkedin: "https://linkedin.com/in/your_username",
    github: "https://github.com/your_username",
  };