const m = require('mithril')

const Rumour = {
  text: 'Consulting reliable sources...',
  fetch: () => {
    return m.request({
      method: 'GET',
      url: 'https://5u4qqqhcm5.execute-api.eu-west-1.amazonaws.com/beta/rumour'
    })
    .then(response => {
      Rumour.text = JSON.parse(response.body).replace(/"/g, "'")
    })
    .catch(e => console.error(e.message))
  }
}

module.exports = {
  oninit: Rumour.fetch,
  view: function () {
    return m('div.rumour-flex-container', [
      m('p.rumour-element', { id: 'rumour' }, Rumour.text),
      m('button.rumour-element', { onclick: Rumour.fetch }, 'Next Rumour')
    ])
  }
}
