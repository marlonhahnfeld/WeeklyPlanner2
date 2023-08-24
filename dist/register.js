function renderFirstName() {
    const inputFirstname = document.getElementById('input-firstname');
    const firstName = inputFirstname.value;
  
    // Navigate to the next page, passing the firstName value as a query parameter
    window.location.href = 'test.html?firstName=' + firstName;
  
    return firstName;
  }
  
  const btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', renderFirstName);