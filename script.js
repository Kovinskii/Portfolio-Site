const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  icon.src = "images/sun.svg";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  icon.src = isDark ? "images/sun.svg" : "images/moon.svg";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
