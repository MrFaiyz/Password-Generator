window.onload = () => {
  const spinner = document.querySelector('.loading-animation');
  const welcome = document.getElementById('welcome-text');
  const box = document.querySelector('.generator-container');

  // Spinner spin duration is 4s
  setTimeout(() => {
    spinner.style.display = 'none';
    welcome.classList.add('show');
  }, 2000); // Show welcome

  // Slide up welcome & show box
  setTimeout(() => {
    welcome.classList.add('move-up');
    box.style.opacity = '1';
    box.style.transform = 'translateY(0)';
    document.body.style.background = 'rgb(3,7,18)';
  }, 4000);
};

function updateLength() {
  const len = document.getElementById("length").value;
  document.querySelector(".input-length").textContent = len;
}

function generatePassword() {
  const length = parseInt(document.getElementById("length").value);

  const checkboxes = document.querySelectorAll(".checkbox-wrapper input[type='checkbox']");
  const includeLower = checkboxes[0].checked;
  const includeUpper = checkboxes[1].checked;
  const includeNumbers = checkboxes[2].checked;
  const includeSymbols = checkboxes[3].checked;

  if (!includeLower && !includeUpper && !includeNumbers && !includeSymbols) {
    alert("Please select at least one character type.");
    return;
  }

  const lowerSet = "abcdefghijklmnopqrstuvwxyz";
  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberSet = "0123456789";
  const symbolSet = "!@#$%^&*()_+[]{}<>?/";

  let charPool = "";

  if (includeLower) charPool += lowerSet;
  if (includeUpper) charPool += upperSet;
  if (includeNumbers) charPool += numberSet;
  if (includeSymbols) charPool += symbolSet;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = charPool[Math.floor(Math.random() * charPool.length)];
    password += randomChar;
  }

  document.getElementById("password").value = password;
}


function copyPassword() {
  const pass = document.getElementById("password");
  pass.select();
  document.execCommand("copy");
  alert("Password copied!");
}
