module.exports = {
  reactStrictMode: true,

  env: {
    KEY: process.env.KEY,
    RONIN:process.env.RONIN
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
