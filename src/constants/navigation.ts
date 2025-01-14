import { BsDiscord as Discord } from 'react-icons/bs'
import { RiTwitterXFill as Twitter, RiGithubFill as Github } from "react-icons/ri";

export const navigations = [
  {
    name: "Use ZEC",
    links: [
      {
        subName: 'Using ZEC',
        path: "/site/Using_Zcash/Transactions"
      },
      {
        subName: 'Wallets',
        path: "/site/Using_Zcash/Wallets"
      },
      {
        subName: 'Non-Custodial Exchanges',
        path: "/site/Using_Zcash/Non-Custodial_Exchanges"
      }
    ]
  },
  {
    name: "Ecosystem",
    links: [
      {
        subName: 'Arborist Calls',
        path: "/site/Zcash_Community/Arborist_Calls"
      },
      {
        subName: 'Community Links',
        path: "/site/Zcash_Community/Community_Links"
      },
      {
        subName: 'Zcash Global Ambassadors',
        path: "/site/Zcash_Community/Zcash_Global_Ambassadors"
      },
    ],
  },
  {
    name: "Organizations",
    links: [
      {
        subName: 'Electric Coin Company',
        path: "/site/Zcash_Organizations/Electric_Coin_Company"
      },
      {
        subName: 'Zcash Foundation',
        path: "/site/Zcash_Organizations/Zcash_Foundation"
      },
      {
        subName: 'Zcash Commnuity Grants',
        path: "/site/Zcash_Organizations/Zcash_Community_Grants"
      }
    ]
  },
  {
    name: "Guides",
    links: [
      {
        subName: 'Zgo Payment Processor',
        path: "/site/guides/Zgo_Payment_Processor",
      },
      {
        subName: 'Free2z',
        path: "/site/guides/Free2z_Live"
      },
      {
        subName: 'Full Nodes',
        path: "/site/guides/Full_Nodes"
      }
    ]
  },
  {
    name: `Glossary & FAQ's`,
    links: [
      {
        subName: `FAQ's`,
        path: "/site/Glossary_and_FAQs/FAQ",
      },
      {
        subName: 'Zcash Library',
        path: "/site/Glossary_and_FAQs/Zcash_Library"
      }
    ]

  },
];

export const socialNav = [
  {
    name: 'Discord',
    url: 'https://discord.gg/zcash',
    icon: Discord
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/zechub',
    icon: Twitter
  },
  {
    name: 'Github',
    url: 'https://github.com/ZecHub/zechub',
    icon: Github
  }
]
export const socialMedia = [
  {
    name: 'Youtube',
    link: 'https://youtube.com/@zechub'
  },
  {
    name: 'Newsletter',
    link: 'https://zechub.substack.com/'
  },
  {
    name: 'Podcast',
    link: 'https://www.youtube.com/watch?v=ILdMTGtVOD4&list=PL6_epn0lASLHlNCMtUErX8UfaJK6N9K5O'
  },
  {
    name: 'Extras',
    link: 'https://extras.zechub.xyz/'
  },
  {
    name: 'DAO',
    link: 'https://vote.zechub.xyz/'
  },
  {
    name: 'Store',
    link: 'https://zechub.store/'
  }
]

