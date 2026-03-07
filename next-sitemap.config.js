/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://emeraldeyesmiami.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
}