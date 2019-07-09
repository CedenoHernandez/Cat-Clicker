const cat = document.querySelector('img');
const counter = document.querySelector('.clicks');
let clicks = 0;

cat.addEventListener('click', function() {
  clicks++;
  counter.innerHTML = clicks;
});
