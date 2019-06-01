const m = require('mithril')
const header = require('./views/Header')

m.route(document.body, '/', {
  '/': header
})

  {/* <header class='atf-main-header'>All The Football</header>
  <main class='atf-page'>
    <div class='rumour-flex-container'>
      <p id='rumour' class='rumour-element'>Consulting reliable sources...</p>
      <button onclick="getRumour()" class='rumour-element'>Next Rumour</button>
    </div>
  </main>

  <footer class='footer-flex-container'>
    <div class='footer-element'>v1.0.0</div>
    <div class='footer-element'>Copyright (c) 2019 Nick Holvast</div>
  </footer>

  <script type="text/javascript" src="allan.js"></script> */}
