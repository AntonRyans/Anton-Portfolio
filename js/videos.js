// Get elements
  const lightbox = document.getElementById('videoLightbox');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const videos = document.querySelectorAll('.content video');

  // Open lightbox on click
  videos.forEach(video => {
    video.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxVideo.src = video.querySelector('source').src;
      lightboxVideo.play();
    });
  });

  // Close lightbox
  function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = '';
  }

  // Close on overlay click
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
  });