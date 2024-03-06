document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');
  
    toggleButton.addEventListener('click', function() {
     
      if (menu.style.left === '0px') {
        menu.style.left = '-250px';
      } else {
        menu.style.left = '0px';
      }
    });
  });
  