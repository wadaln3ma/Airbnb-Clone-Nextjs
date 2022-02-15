module.exports = {
  reactStrictMode: true,
  images : { domains: ["links.papareact.com"] },
  env: {
    mapbox_token : JSON.stringify(process.env.MAPBOX_PUBLIC_KEY),
  },
}
