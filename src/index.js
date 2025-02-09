function setTheme(isDark) {
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.checked = isDark;
  }
}

// Initialize theme as soon as possible
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme === "dark");
}

// Also handle it when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");

  // Set initial state from localStorage again (in case the early init missed something)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme === "dark");
  }

  // Handle toggle changes
  toggle.addEventListener("change", function () {
    localStorage.setItem("theme", this.checked ? "dark" : "light");
    setTheme(this.checked);
  });
});
