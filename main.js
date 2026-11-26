// =========================================
// TEMA CLARO E ESCURO
// =========================================

const raiz = document.documentElement;
const botao = document.getElementById("tema");

function atualizarIcone() {
    if (!botao) return;

    const escuro = raiz.dataset.bsTheme === "dark";

    botao.innerHTML = escuro
        ? '<i class="bi bi-sun"></i>'
        : '<i class="bi bi-moon-stars"></i>';

    botao.setAttribute(
        "aria-label",
        escuro ? "Ativar modo claro" : "Ativar modo escuro"
    );
}

if (botao) {
    botao.addEventListener("click", () => {
        const novoTema =
            raiz.dataset.bsTheme === "dark" ? "light" : "dark";

        raiz.dataset.bsTheme = novoTema;

        try {
            localStorage.setItem("tema", novoTema);
        } catch (e) {}

        atualizarIcone();
    });
}

atualizarIcone();


// =========================================
// EFEITO DE DIGITAÇÃO
// =========================================

const typer = document.getElementById("typer");

if (typer) {
    const texto = typer.dataset.texto || "";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        typer.textContent = texto;
    } else {
        let i = 0;

        const intervalo = setInterval(() => {
            typer.textContent = texto.slice(0, ++i);

            if (i >= texto.length) {
                clearInterval(intervalo);
            }
        }, 35);
    }
}
