//buttons
document.querySelector('#btn-play').addEventListener ('click', function () {
  document.querySelector('#gameplay').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-play-back').addEventListener ('click', function () {
  document.querySelector('#gameplay').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

