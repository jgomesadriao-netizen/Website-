/* =====================================================
   TEXTO COM IA — INTEGRAÇÃO GOOGLE FORMS
   Compatível com questionario.html
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("form-container");

    // Verifica se a página possui o espaço do formulário
    if (!container) {
        console.warn("Elemento form-container não encontrado.");
        return;
    }

    // COLE AQUI O LINK DE INCORPORAÇÃO DO GOOGLE FORMS
    const GOOGLE_FORM_URL = "https://forms.cloud.microsoft/r/Q5sbVQBnU1?origin=lprLink";

    // Mensagem de configuração
    function mostrarMensagem(titulo, mensagem) {
        container.replaceChildren();

        const area = document.createElement("div");
        area.className = "text-center py-5";

        const icone = document.createElement("i");
        icone.className = "bi bi-ui-checks fs-1 text-primary";

        const subtitulo = document.createElement("h3");
        subtitulo.className = "h5 mt-3";
        subtitulo.textContent = titulo;

        const texto = document.createElement("p");
        texto.className = "text-body-secondary";
        texto.textContent = mensagem;

        area.append(icone, subtitulo, texto);
        container.appendChild(area);
    }

    // Verifica se o link foi configurado
    if (
        !GOOGLE_FORM_URL ||
        GOOGLE_FORM_URL === "COLE_SEU_LINK_AQUI"
    ) {
        mostrarMensagem(
            "Google Forms não configurado",
            "Adicione o link de incorporação do seu formulário no arquivo questionario.js."
        );
        return;
    }

    // Validação do endereço
    let endereco;

    try {
        endereco = new URL(GOOGLE_FORM_URL);

        if (
            endereco.protocol !== "https:" ||
            endereco.hostname !== "docs.google.com" ||
            !/^\/forms\/(d\/e\/[^/]+|u\/\d+\/d\/[^/]+|d\/[^/]+)\/viewform\/?$/.test(endereco.pathname)
        ) {
            throw new Error("Link inválido");
        }

    } catch (erro) {
        mostrarMensagem(
            "Link inválido",
            "Confira o endereço de incorporação do Google Forms e tente novamente."
        );
        console.error("Erro no Google Forms:", erro);
        return;
    }

    // Ativa o modo de incorporação
    endereco.searchParams.set("embedded", "true");

    // Cria o formulário
    const formulario = document.createElement("iframe");

    formulario.src = endereco.toString();
    formulario.title = "Questionário sobre Inteligência Artificial Generativa";
    formulario.width = "100%";
    formulario.height = "1100";
    formulario.loading = "lazy";

    formulario.setAttribute("frameborder", "0");
    formulario.setAttribute("marginheight", "0");
    formulario.setAttribute("marginwidth", "0");
    formulario.setAttribute("allowfullscreen", "");

    // Estilização
    formulario.style.display = "block";
    formulario.style.width = "100%";
    formulario.style.minHeight = "700px";
    formulario.style.border = "0";
    formulario.style.borderRadius = "12px";

    // Insere o formulário na página
    container.replaceChildren(formulario);

    console.log("Google Forms carregado com sucesso.");

});
