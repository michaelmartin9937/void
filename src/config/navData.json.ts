// utils
import { getAllPosts, countItems, sortByValue } from "@js/blogUtils";
import { humanize } from "@js/textUtils";

// get the categories used in blog posts, to put into navbar
const posts = await getAllPosts();
const allCategories = posts.map((post) => post.data.categories).flat();
const countedCategories = countItems(allCategories);
const processedCategories = sortByValue(countedCategories);

export interface navLinkItem {
  text: string;
  link: string;
  newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
  text: string;
  dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: "Overview",
    link: "/overview/",
  },
  {
    text: "Blog",
    link: "/blog/",
  },
  {
    // get the categories used in blog posts, to put into a navbar dropdown
    text: "Categories",
    dropdown: processedCategories.map(([category, count]) => {
      return {
        text: humanize(category),
        link: `/categories/${category}/`,
      };
    }),
  },
];

export default navConfig;
