require("dotenv").config({
  path: "./config.env",
})

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "HOME", to: "/" },
      { name: "PROJECTS", to: "/#projects" },
      { name: "ABOUT", to: "/#about" },
      { name: "BLOG", to: "/blog" },
    ],
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nik-vogrinec/",
        img: "FaLinkedin",
      },
      {
        name: "Github",
        url: "https://github.com/NikVogri",
        img: "FaGithub",
      },
      {
        name: "CodePen",
        url: "https://codepen.io/nickvogri",
        img: "FaCodepen",
      },
    ],
    locale: "en",
    title: `Nik Vogrinec`,
    description: `My name is Nik Vogrinec and I am full-stack web developer located in Slovenia. 
    I work with Laravel, PHP, Node, Express, React, Gatsby, CSS, JS, HTML5, MySQL, Bootstrap, and various others.`,
    author: `@nikvogrinec`,
    categories: {
      items: ["PROGRAMMING", "DESIGN", "LIFE"],
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Poppins`,
    //         variants: [`300`, `400`, `500`, `700`],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Poppins"],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nik Vogrinec`,
        short_name: `nikvogrinecportfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2f80ed`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
