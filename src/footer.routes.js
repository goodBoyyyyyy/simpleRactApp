// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Example components

// Images
import logoCT from "assets/images/logo-ct-dark.png";

export default {
  brand: {
    name: "Example 2",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <GitHubIcon />,
      link: "",
    },
    {
      icon: <YouTubeIcon />,
      link: "",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "" },
        { name: "freebies", href: "" },
        { name: "premium tools", href: "" },
        { name: "blog", href: "" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "" },
        { name: "bits & snippets", href: "" },
        { name: "affiliate program", href: "" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "" },
        { name: "knowledge center", href: "" },
        { name: "custom development", href: "" },
        { name: "sponsorships", href: "" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "" },
        { name: "privacy policy", href: "" },
        { name: "licenses (EULA)", href: "" },
      ],
    },
  ],
};
