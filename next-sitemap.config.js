/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.zulfahmidev.com", // ganti dengan domain kamu
  generateRobotsTxt: true, // otomatis generate robots.txt
  sitemapSize: 7000, // max URL per file (opsional)
  changefreq: "daily", // frekuensi update
  priority: 0.7, // default priority
  exclude: ["/admin/*", "/private/*"], // halaman yang di-skip
};
