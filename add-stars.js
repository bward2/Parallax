function randomInt(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function calcProperty(prop, scale) {
  const adjustment = prop === 'top' ? 25 : 50;
  const min = scale * -adjustment;
  const max = (scale * adjustment) + 100;

  return randomInt(min, max);
}

function addStars(scale, starGroup) {
  const count = (scale * 0.5) + 10;

  for(let i = 0; i < count; i++) {
    let star = document.createElement('img');
    star.src = 'assets/star.svg';
    star.style.position = 'absolute';
    star.style.top = `${calcProperty('top', scale)}%`;
    star.style.left = `${calcProperty('left', scale)}%`;
    star.style.transform = `rotate(${randomInt(0, 360)}deg)`;
    starGroup.appendChild(star);
  }
}

function init() {
  const near = document.getElementById('near');
  const far = document.getElementById('far');
  const reallyFar = document.getElementById('really-far');

  addStars(0, near);
  addStars(2, far);
  addStars(5, reallyFar);
}