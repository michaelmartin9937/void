export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "The Void",
  // Your website's title and description (meta fields)
  title: "The Void - a sleek blog template for Astro, styled with Tailwind CSS",
  description:
    "Get your new blog website up and running quickly with a sleek website template designed using Astro and Tailwind CSS. Perfect for freelancers and developers looking for a great blog theme.",
  useViewTransitions: true,
  useAnimations: true,

  // Your information!
  author: {
    name: "Cosmic Themes",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/void-bg.png",
    alt: "The Void - a sleek blog template for Astro, styled with Tailwind CSS",
  },
};

export default siteData;
