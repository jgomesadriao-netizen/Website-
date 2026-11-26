// Tema claro/escuro (salvo no localStorage) e demonstração de digitação
const raiz = document.documentElement;
const botao = document.getElementById("tema");
function atualizarIcone() {
  botao.innerHTML = raiz.dataset.bsTheme === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
}
botao.addEventListener("click", () => {
  const novo = raiz.dataset.bsTheme === "dark" ? "light" : "dark";
  raiz.dataset.bsTheme = novo;
  try { localStorage.setItem("tema", novo); } catch (e) {}
  atualizarIcone();
});
atualizarIcone();

// Efeito de texto sendo gerado (apenas na página inicial)
const typer = document.getElementById("typer");
if (typer) {
  const texto = typer.dataset.texto;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) typer.textContent = texto;
  else { let i = 0; const t = setInterval(() => { typer.textContent = texto.slice(0, ++i); if (i >= texto.length) clearInterval(t); }, 35); }
}
