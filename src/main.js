const modal = document.getElementById('modalContainer');
const formContainer = document.getElementById('formContainer');
const closeModal = document.getElementById('closeModal');

function showRegister() {
  console.log("Login button clicked"); // log click
  formContainer.innerHTML = `
    <h2>Register</h2>
    <input id="regUsername" placeholder="Username">
    <input id="regPassword" type="password" placeholder="Password">
    <button id="submitRegister">Submit</button>
  `;
  document.getElementById('submitRegister').addEventListener('click', registerUser);
  modal.style.display = 'block';
}

function showLogin() {
  console.log("Login button clicked"); // log click
  formContainer.innerHTML = `
    <h2>Login</h2>
    <input id="loginUsername" placeholder="Username">
    <input id="loginPassword" type="password" placeholder="Password">
    <button id="submitLogin">Submit</button>
  `;
  document.getElementById('submitLogin').addEventListener('click', loginUser);
  modal.style.display = 'block';
}

// Close modal when clicking the X
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: Close modal when clicking outside the box
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
