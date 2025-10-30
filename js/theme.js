// ======== Dark Mode Toggle ========
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Initialize theme based on localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark");
  themeToggle.checked = true;
}

// Toggle theme on checkbox change
themeToggle.addEventListener("change", () => {
  const isDark = body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ======== Mobile Navbar Toggle ========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu when a link is clicked (optional)
navLinks.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("show"))
);

// ======== Footer Year ========
document.getElementById("year").textContent = new Date().getFullYear();
