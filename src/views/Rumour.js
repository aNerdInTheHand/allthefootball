const m = require('mithril')

const getRumour = () => console.log('Allan to Newcastle')

module.exports = {
  view: function () {
    return m('div.rumour-flex-container', [
      m('p.rumour-element', { id: 'rumour' }, 'Consulting reliable sources...'),
      m('button.rumour-element', { onclick: () => getRumour() }, 'Next Rumour')
    ])
  }
}
