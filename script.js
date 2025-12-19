const button = document.getElementById("themeToggle");
const body = document.body;

button.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    button.textContent = "☀️ Modo Claro";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    button.textContent = "🌙 Modo Escuro";
  }
});
