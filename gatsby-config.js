module.exports = {
  siteMetadata: {
    title: "Dr Dropin",
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-react-helmet", 
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: "https://staging-core.api.drdropin.no/v1/clinics"
      },
      rootKey: 'customApi',
      schemas: {
        customApi: `
          name: String!
          openingHours: openingHours
        `,
        openingHours: `
          mon: dayInfo
          tue: dayInfo
          wed: dayInfo
          thu: dayInfo
          fri: dayInfo
          sat: dayInfo
          sun: dayInfo
        `,
        dayInfo: `
          periods: [period]
          isOpen: Boolean
        `,
        period: `
          to: Int
          from: Int
        `,
      }
    }
  ],
};
