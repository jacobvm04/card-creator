const fetch = require('node-fetch');
const metascraper = require('metascraper')([require('metascraper-author')(), require('metascraper-date')(), require('metascraper-title')(), require('metascraper-publisher')(), require('../metascraper-article-body')()]);

module.exports = async (req, res) => {
  const { url } = req.query;

  const result = await fetch(url);

  res.json(await metascraper({ html: await result.text(), url }));
}