module.exports = {
  reactStrictMode: true,

  env: {
    KEY: process.env.KEY,
    RONIN: process.env.RONIN,
    URL: process.env.URL,
    ID: process.env.ID
  },

  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Origin',
            value: 'https://axie.management',
          },
        ],
      },

    ]
  },
}
