document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("form-container");

    if (!container) return;

    // COLE AQUI O LINK DE INCORPORAÇÃO DO GOOGLE FORMS
    const microsoftFormUrl = "https://forms.cloud.microsoft/r/Q5sbVQBnU1?origin=lprLink";

    if (!microsoftFormUrl.startsWith("https://forms.cloud.microsoft/r/")) {
        return;
    }

    const iframe = document.createElement("iframe");

    iframe.src = microsoftFormUrl;
    iframe.title = "Questionário sobre Inteligência Artificial Generativa";
    iframe.width = "100%";
    iframe.height = "1100";
    iframe.frameBorder = "0";
    iframe.marginHeight = "0";
    iframe.marginWidth = "0";
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allowfullscreen", "");

    iframe.style.border = "0";
    iframe.style.borderRadius = "12px";

    container.innerHTML = "";
    container.appendChild(iframe);

});
