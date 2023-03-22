const img = document.querySelector('img');
const text = document.querySelector('.text');

const letsbirthday = () => {
  img.setAttribute('src', 'assets/dr.gif');
  setTimeout(() => {
    img.style.display = 'none';
    text.classList.add('animate');
  }, 3500);
};

img.addEventListener('click', letsbirthday);

document.addEventListener('mousemove', (e) => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const x = e.clientX;
  const y = e.clientY;
  const obj = document.querySelector('.animate');
  if (obj) {
    obj.style.transform = `translate(${(width - x) / 25}px , ${
      (height - y) / 25
    }px)`;
  }
});
