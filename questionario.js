/* =====================================================
   TEXTO COM IA — MICROSOFT FORMS
   Integração com questionario.html
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("form-container");

    if (!container) {
        console.error("Elemento form-container não encontrado.");
        return;
    }

    // LINK DO SEU MICROSOFT FORMS
    const FORM_URL = "https://forms.cloud.microsoft/pages/responsepage.aspx?id=xWS-6vVodkqDAZV3pnnkST7z0TQXVNJCicSv0EaE5sxUNk1KWldVMUVSTzdZTVRNUElESzNDVzBaUC4u&origin=lprLink&route=shorturl";

    // Cria o iframe
    const iframe = document.createElement("iframe");

    iframe.src = FORM_URL;
    iframe.title = "Questionário sobre Inteligência Artificial Generativa";
    iframe.width = "100%";
    iframe.height = "1100";

    iframe.style.display = "block";
    iframe.style.width = "100%";
    iframe.style.minHeight = "750px";
    iframe.style.border = "none";
    iframe.style.borderRadius = "12px";

    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allowfullscreen", "");

    // Insere o formulário na página
    container.replaceChildren(iframe);

    console.log("Microsoft Forms inserido na página.");

});
