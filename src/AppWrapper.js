const m = require('mithril')
const Header = require('./views/Header')
const Footer = require('./views/Footer')
const Rumour = require('./views/Rumour')

module.exports = {
  view: function () {
    return m('div.atf-site', [
      m(Header),
      m('main.atf-page', [
        m(Rumour)
      ]),
      m(Footer)
    ])
  }
}
