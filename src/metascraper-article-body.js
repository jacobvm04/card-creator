
module.exports = () => {
  const rules = {
    body: [
      // Business insider
      ({ htmlDom: $, url }) => $("div[data-piano-inline-content-wrapper] p").text(),

      // NY times
      ({ htmlDom: $, url }) => $("section[name='articleBody']").text(),

      // Cato / generic
      ({ htmlDom: $, url }) => $("article p").text(),
    ]
  }
  return rules;
}
