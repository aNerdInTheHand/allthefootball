let rumours = ['All The Football']
var getRumour = function() {
  fetch('https://5u4qqqhcm5.execute-api.eu-west-1.amazonaws.com/beta/rumour')
    .then(response => {
      response.json()
        .then(jsonr => JSON.parse(jsonr.body).replace(/"/g, "'"))
      })
    .catch(err => console.error(err))
};
while (rumours.length < 4) {
  getRumour()
    .then(rumour => rumours.push(rumour))
    .catch(err => console.error(err))
};
window.setInterval(function () {
  getRumour()
    .then(rumour => {
      rumours.splice(1, 1)
      const rumoursList = rumours.join('...           ')
      document.getElementById('rumour-scrollbar').innerHTML = rumoursList
    .catch(err => console.error(err))
  })
}, 60000);
function getMainRumour () {
  getRumour()
    .then(response => document.getElementById('rumour').innerHTML = response)
    .catch(err => console.error(err))
};
(function () {
  getRumour()
})()
