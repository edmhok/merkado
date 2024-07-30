// import TwitterIcon from "./icons/Twitter";
// import TelegramIcon from "./icons/Telegram";
// import DiscordIcon from "./icons/Discord";
// import MediumIcon from "./icons/Medium";
// import GithubIcon from "./icons/Github";
// import GitbookIcon from "./icons/Gitbook";

export type Route = {
  name: string;
  path?: string;
  link?: string;
  subMenus?: SubMenu[];
  key: string;
  icon?: () => JSX.Element;
  disabled?: boolean;
};

export type SubMenu = Route;

export const MAX_NUMBER = 5;

export const MOBILE_MAX_NUMBER = 5;

export const routes: Route[] = [
  {
    key: "home",
    name: `Home`,
    path: "/home",
  },
  {
    key: "feedback",
    name: "Be a Member",
    link: "https://forms.gle/6HAoWACwaRyZ5Wgc9",
  },
  {
    key: "collection",
    name: `Collection`,
    path: "/collection",
  },
  {
    key: "marketplace",
    name: `Marketplace`,
    path: "/marketplace/collections",
  },
  {
    key: "create",
    name: `Create`,
    path: "/console/nft/canister/create",
  },
  // {
  //   key: "followUS",
  //   name: `Follow US`,
  //   subMenus: [
  //     { key: "followUS_twitter", name: `Twitter`, link: "https://x.com/waste2earn", icon: TwitterIcon },
  //     { key: "followUS_Telegram", name: `Telegram`, link: "https://t.me/+stHCP7ZCoKcyNWY1", icon: TelegramIcon },
  //     { key: "followUS_Medium", name: `Medium`, link: "https://medium.com/@waste2earn.io", icon: MediumIcon },
  //     { key: "followUS_Gitbook", name: `Gitbook`, link: "https://waste2earn.gitbook.io/", icon: GitbookIcon },
  //     { key: "followUS_Github", name: `Github`, link: "https://github.com/wastopia", icon: GithubIcon },
  //     { key: "followUS_Discord", name: `Discord`, link: "https://discord.gg/GbnNzjQe", icon: DiscordIcon },
  //   ],
  // },
];
