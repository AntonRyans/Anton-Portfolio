// Wait for the page to load fully
window.addEventListener('load', () => {
  // Show popup after 1 second
  setTimeout(() => {
    const popupOverlay = document.getElementById('popupOverlay');
    if (popupOverlay) popupOverlay.style.display = 'flex';
  }, 1000);

  // Add event listener for the Close button
  const closeBtn = document.getElementById('closePopupBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const popupOverlay = document.getElementById('popupOverlay');
      if (popupOverlay) popupOverlay.style.display = 'none';
    });
  }
});
