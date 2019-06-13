function getRumour () {
  const options = {
    headers: new Headers({ 'x-api-key': 'uw5ICBVlhV3Omu1b3NkQg1tw47WXDaK85bEfme7q' })
  }
  fetch('https://5u4qqqhcm5.execute-api.eu-west-1.amazonaws.com/test/rumour', options)
    .then(response => {
      response.json()
        .then(jsonr => document.getElementById('rumour').innerHTML = JSON.parse(jsonr.body).replace(/"/g, "'"))
    })
    .catch(err => console.error(err))
  };
(function () {
  getRumour()
})()

WebFontConfig = {google: {families: ['Maiden Orange','Stylish']}};
(function(d) {
  var wf = d.createElement('script'), s = d.scripts[0]
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
  wf.type = 'text/javascript'
  wf.async = 'true'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(wf, s)
  })(document)

if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() { console.log("Service Worker Registered") })
}
