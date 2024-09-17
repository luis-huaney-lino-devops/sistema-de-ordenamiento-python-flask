const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const darkMode = document.querySelector(".dark-mode");

// Function to get a cookie value by name
function getCookie(name) {
  let cookieArr = document.cookie.split(";");

  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");

    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
  setCookie(
    "darkMode",
    document.body.classList.contains("dark-mode-variables"),
    365
  );
}

// Initialize dark mode based on cookie or system preference
function initializeDarkMode() {
  const darkModeCookie = getCookie("darkMode");
  if (
    darkModeCookie === "true" ||
    (darkModeCookie === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.body.classList.add("dark-mode-variables");
    darkMode.querySelector("span:nth-child(1)").classList.add("active");
    darkMode.querySelector("span:nth-child(2)").classList.remove("active");
  } else {
    document.body.classList.remove("dark-mode-variables");
    darkMode.querySelector("span:nth-child(1)").classList.remove("active");
    darkMode.querySelector("span:nth-child(2)").classList.add("active");
  }
}

// Event listeners
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

darkMode.addEventListener("click", () => {
  toggleDarkMode();
});

// Call initializeDarkMode on page load
initializeDarkMode();

// Orders table rendering logic (unchanged)
