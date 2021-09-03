module.exports = {
  reactStrictMode: true,

  env: {
    KEY: process.env.KEY,
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
