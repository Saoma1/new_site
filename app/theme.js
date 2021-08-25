const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const switcher = document.querySelector("em");

function switchTheme(e) {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "dark");
    switcher.innerText = "Enable Light Mode!";
  } else {
    document.body.setAttribute("data-theme", "light");
    switcher.innerText = "Enable Dark Mode!";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
