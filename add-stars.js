function randomInt(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function calcProperty(prop, scale) {
  const adjustment = prop === 'top' ? 25 : 50;
  const min = scale * -adjustment;
  const max = (scale * adjustment) + 100;

  return randomInt(min, max);
}

function createStarGroup(scale) {
  const starGroup = document.createElement('div');
  starGroup.classList.add('parallax-layer');
  starGroup.style.transform = `translateZ(-${scale}px)`;
  return starGroup;
}

function addStars(sky, scale) {
  const count = (scale * 5) + 10;
  const starGroup = createStarGroup(scale);
  sky.appendChild(starGroup);

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
  const sky = document.getElementById('night-sky');

  for (let i = 0; i <= 10; i++) {
    addStars(sky, i);
  }
}