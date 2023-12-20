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
      href: "https://github.com/makersmansion/",
      me: "https://github.com/makersmansion/",
      text: "Go to our GitHub repo",
      icon: "social/github",
    },
    {
      platform: "twitter",
      href: "https://twitter.com/MakersMansionAI",
      me: "https://twitter.com/MakersMansionAI",
      text: "Follow us on X",
      icon: "social/twitter",
    },
  ],
}

export default siteInfo
