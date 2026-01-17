const btn = document.getElementById('close-button');

btn.addEventListener('click', () => {
  window.electronAPI.closeApp();
});