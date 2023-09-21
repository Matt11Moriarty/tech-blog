const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signupUsername').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  