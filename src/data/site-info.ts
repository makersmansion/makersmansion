export type SocialLink = {
  platform: string
  href: string
  me?: string
  text: string
  icon: string
  footerOnly?: boolean
}

export type SiteInfo = {
  name: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
  name: "Makers Mansion",
  title: "AI meets Design",
  description:
    "We're a small team exploring AI assistants to refine everyday activities. Our core pursuit is understanding human-AI interactions, aiming to desing the next-gen user experiences.",
  image: {
    src: "/images/social.png",
    alt: "AI meets Design",
  },
  socialLinks: [
    {
      platform: "github",
      href: "https://github.com/withastro/astro",
      me: "https://github.com/withastro/",
      text: "Go to Astro's GitHub repo",
      icon: "social/github",
    },
    {
      platform: "discord",
      href: "/chat",
      text: "Join the Astro community on Discord",
      icon: "social/discord",
    },
    {
      platform: "twitter",
      href: "https://twitter.com/astrodotbuild",
      me: "https://twitter.com/astrodotbuild",
      text: "Follow Astro on Twitter",
      icon: "social/twitter",
    },
    {
      platform: "mastodon",
      href: "https://m.webtoo.ls/@astro",
      me: "https://m.webtoo.ls/@astro",
      text: "Follow Astro on Mastodon",
      footerOnly: true,
      icon: "social/mastodon",
    },
  ],
}

export default siteInfo
