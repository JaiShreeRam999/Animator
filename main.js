document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('icon');

  icon.addEventListener('click', () => {
    icon.classList.add('rose');
    setTimeout(() => {
      icon.classList.remove('rose');
      icon.classList.add('text');
      icon.textContent = 'I LOVE YOU';
    }, 1000); // Wait 1 second before transforming to text
  });
});