  const clickableElements = document.querySelectorAll('.js-toggle');

  clickableElements.forEach(function(element) {
    element.addEventListener('click', function() {
      this.parentNode.classList.toggle('open');
    })
  });

  // Function to open the modal
  function openModalImg() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'flex'; // or 'block' for display: block;
    const img = this.parentNode.previousElementSibling.src;
    const title = this.previousElementSibling;
    const modalTitle = title ? title.textContent.trim() : null;
    const newImage =img.replace('/images/', '/images/hirez/');
    const newTitle = document.createTextNode(modalTitle);
    document.getElementById('modal-image').src = newImage;
    document.getElementById('modal-title').appendChild(newTitle);
  }

  function openModalExt(event) {
    event.preventDefault();      
    const modal = document.getElementById('myModal');
    modal.style.display = 'flex'; // or 'block' for display: block;
    const linkTarget = this.href; 
    const exitText = document.createTextNode(linkTarget);
    const modalTitle = document.createTextNode('External Link');
    document.getElementById('js-target').href = linkTarget;
    document.getElementById('modal-title').appendChild(modalTitle);
    document.getElementById('js-ext-target').appendChild(exitText);
  }

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modal-title');
    const exitText = document.getElementById('js-ext-target');
    modal.style.display = 'none';
    modalTitle.textContent = '';
    exitText.textContent = '';
  }

  // Open modal when the button is clicked
  const openModalImgButtons = document.querySelectorAll('.js-open-modal');
  openModalImgButtons.forEach(function(element) {
      element.addEventListener('click', openModalImg);    
  });

  // Open modal when the button is clicked
  const openModalExtButtons = document.querySelectorAll('.js-ext');
  openModalExtButtons.forEach(function(element) {
      element.addEventListener('click', openModalExt);
  });

  // Close modal when the close button is clicked
  const closeModalButton = document.querySelectorAll('.js-close-modal, .js-ext-link');
  closeModalButton.forEach(function(element) {
      element.addEventListener('click', closeModal);    
  });

  // Close modal if overlay is clicked
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      closeModal();
    }
  });

  function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validate the form fields (you can add more validation as needed)
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    // Simulate sending an email (in a real scenario, you'd use a server-side script)
    var emailContent = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    alert("Email content:\n\n" + emailContent);

    // Optionally, you can reset the form after submission
    document.getElementById("contactForm").reset();
}