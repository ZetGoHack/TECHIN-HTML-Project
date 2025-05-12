// Form validation ------------------------------

const form = document.querySelector('.contact-form');

  // Real-time input listener
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', function () {
      if (this.value.trim() !== '') {
        this.classList.remove('error');
        const errorMsg = this.parentElement.querySelector('.error-message');
        if (errorMsg) {
          errorMsg.remove();
        }
      }
    });
  });

  // Submit validation
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    form.querySelectorAll('input, textarea').forEach(input => {
      input.classList.remove('error');
    });

    // Validate inputs and textareas
    form.querySelectorAll('input, textarea').forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');

        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = 'This field is required';
        input.parentElement.appendChild(error);
      }
    });

    if (isValid) {
      alert('Form submitted successfully!');
      // form.submit(); // Uncomment to actually submit
    }
  });



// Mobile Menu Toggle  ------------------------------

var toggle = document.querySelectorAll('.burger_toggle');
toggle.forEach(element => {
    element.addEventListener("click", function () {
        document.querySelector('.main-nav').classList.toggle('show');
    })
});



