//Formulario popup/Modal "Subscribe to our newsletter"



// Función para mostrar el popup/modal
function showPopup() {
    // Verificar si el usuario ya cerró el popup/modal
    if (localStorage.getItem('popupClosed') === 'true') {
      return;
    }
    
    // Verificar si el usuario bajó 25% de la página
    if (window.pageYOffset >= document.body.scrollHeight * 0.25) {
      // Mostrar el popup/modal
      document.getElementById('newsletter-popup').style.display = 'block';
    }
    console.log(popupClosed);
  }
  
  // Función para cerrar el popup/modal
  function closePopup() {
    // Ocultar el popup/modal
    document.getElementById('newsletter-popup').style.display = 'none';
    
    // Almacenar que el popup/modal fue cerrado
    localStorage.setItem('popupClosed', 'true');
  }
  
  // Evento para cerrar el popup/modal cuando se hace clic en el botón de cerrar
  document.getElementById('close-popup').addEventListener('click', closePopup);