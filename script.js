// script.js
document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
});

// Accordion Toggle
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const parent = content.parentElement;
  
  document.querySelectorAll('.accordion').forEach(item => {
    if (item !== parent) {
      item.classList.remove('active');
    }
  });

  parent.classList.toggle('active');
}

// Modal View QRIS Jelas
function openModal() {
  const modal = document.getElementById('qris-modal');
  const qrisImg = document.getElementById('qris-image-src');
  
  const activeSrc = qrisImg.currentSrc || qrisImg.src;
  
  document.getElementById('modal-img').src = activeSrc;
  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('qris-modal');
  modal.classList.remove('show');
}

// Fungsi Animasi Ketikan Berulang (Looping Typewriter)
function initTypewriter() {
  const typeElements = document.querySelectorAll('.btn-text');
  
  typeElements.forEach(el => {
    const fullText = el.getAttribute('data-text') || el.textContent.trim();
    el.setAttribute('data-text', fullText);
    
    let index = 0;
    let isDeleting = false;
    
    function loop() {
      if (isDeleting) {
        index--;
        el.textContent = fullText.substring(0, index);
        if (index === 0) {
          isDeleting = false;
          setTimeout(loop, 400);
          return;
        }
        setTimeout(loop, 60);
      } else {
        index++;
        el.textContent = fullText.substring(0, index);
        if (index === fullText.length) {
          isDeleting = true;
          setTimeout(loop, 2000);
          return;
        }
        setTimeout(loop, 120);
      }
    }
    
    loop();
  });
}
