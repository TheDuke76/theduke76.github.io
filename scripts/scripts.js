  const clickableElements = document.querySelectorAll('.js-toggle');

  clickableElements.forEach(function(element) {
    element.addEventListener('click', function() {
      this.parentNode.classList.toggle('open');
    })
  });


  // Function to open the modal
  function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'flex'; // or 'block' for display: block;
    const parentElement = this.parentNode;
    const imgElement = parentNode.querySelector('img');
    console.log('Image source:', imgSrc);
    document.getElementById('modal-image').src = imgSrc;
  }

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  // Open modal when the button is clicked
  const openModalButtons = document.querySelectorAll('.js-open-modal');
  openModalButtons.forEach(function(element) {
    element.addEventListener('click', openModal);
  });

  // Close modal when the close button is clicked
  const closeModalButton = document.getElementById('closeModalButton');
  closeModalButton.addEventListener('click', closeModal);

  // Close modal if overlay is clicked
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      closeModal();
    }
  });