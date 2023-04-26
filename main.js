function toggleDarkMode() {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.classList.toggle("light-mode");
    rootElement.classList.toggle("dark-mode");
    const isDarkModeEnabled = rootElement.classList.contains("dark-mode");
    localStorage.setItem("isDarkModeEnabled", isDarkModeEnabled);
  }
}
// Check Local Storage for saved dark mode state
const isDarkModeEnabled = localStorage.getItem("isDarkModeEnabled") === "true";
const rootElement = document.getElementById("root");
if (rootElement) {
  if (isDarkModeEnabled) {
    rootElement.classList.add("dark-mode");
  } else {
    rootElement.classList.add("light-mode");
  }
}
