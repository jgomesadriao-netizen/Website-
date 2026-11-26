/* ============================================
   TEXTO COM IA — ACESSO AO QUESTIONÁRIO
   Microsoft Forms
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("form-container");

    if (!container) {
        console.error("Elemento form-container não encontrado.");
        return;
    }

    // LINK OFICIAL DO QUESTIONÁRIO
    const FORM_URL = "https://forms.cloud.microsoft/r/Q5sbVQBnU1?origin=lprLink";

    container.innerHTML = `
        <div class="text-center py-5 px-3">

            <div class="mb-4">
                <i class="bi bi-ui-checks text-primary"
                   style="font-size: 4rem;"></i>
            </div>

            <h3 class="h4 mb-3">
                Questionário de avaliação
            </h3>

            <p class="text-body-secondary mx-auto mb-4"
               style="max-width: 500px;">

                Chegou a hora de testar seus conhecimentos!
                Clique no botão abaixo para acessar o questionário
                sobre Inteligência Artificial Generativa.
            </p>

            <a href="${FORM_URL}"
               target="_blank"
               rel="noopener noreferrer"
               class="btn btn-primary btn-lg px-4 py-3">

                <i class="bi bi-box-arrow-up-right me-2"></i>
                Acessar questionário

            </a>

            <p class="small text-body-secondary mt-3 mb-0">
                O questionário será aberto em uma nova aba.
            </p>

        </div>
    `;

    console.log("Botão de acesso ao questionário carregado.");

});
