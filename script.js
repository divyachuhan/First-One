const flap = document.querySelector('.envelope-flap');
flap.addEventListener('click', () => {
  flap.classList.toggle('open');
});
 
ddocument.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('noBtn');
  if (!noBtn) {
    console.warn('No button found!');
    return;
  }

  noBtn.style.position = 'fixed';
  noBtn.style.zIndex = '9999';
  noBtn.style.left = '50px';
  noBtn.style.top = '50px';

  function moveButton() {
    const rect = noBtn.getBoundingClientRect();
    const padding = 20;
    const maxX = window.innerWidth - rect.width - padding;
    const maxY = window.innerHeight - rect.height - padding;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noBtn.style.left = x + 'px';
    noBtn.style.top  = y + 'px';
  }

  noBtn.addEventListener('mouseenter', moveButton);
});
