// Questionário: navegação, validação, cálculo e armazenamento do último resultado
const PERGUNTAS = [["Qual arquitetura é a base dos modelos de linguagem modernos?", ["Rede recorrente simples", "Transformer", "Árvore de decisão", "Regressão linear", "K-means"], 1], ["Em que ano o ChatGPT foi lançado?", ["2012", "2016", "2018", "2022", "2025"], 3], ["O que é um prompt?", ["Um vírus de computador", "Um tipo de imagem", "A instrução enviada ao modelo", "Uma senha de acesso", "Um idioma de programação"], 2], ["O que são “alucinações” em IA generativa?", ["Respostas que parecem corretas, mas contêm informações falsas", "Falhas de energia", "Erros de digitação do usuário", "Imagens distorcidas", "Atualizações automáticas"], 0], ["Para saber os planos e preços atuais de uma ferramenta, o mais seguro é:", ["Confiar em listas antigas", "Perguntar a um amigo", "Presumir que são gratuitos", "Usar apenas redes sociais", "Consultar o site oficial"], 4], ["Qual prompt tende a gerar melhor resultado?", ["“Fale sobre vulcões.”", "“Explique como se forma um vulcão em 5 linhas para o 9º ano.”", "“Vulcão.”", "“Escreva algo.”", "“Me ajuda.”"], 1], ["Qual informação não deve ser enviada a uma IA?", ["Um tema de estudo", "Uma pergunta de matemática", "Um pedido de resumo", "Senhas e dados pessoais", "Um texto público"], 3], ["Qual atitude ética ao usar IA em trabalhos?", ["Copiar sem avisar", "Esconder o uso", "Revisar o conteúdo e declarar o uso quando exigido", "Inventar fontes", "Usar para plagiar"], 2], ["O que é um token?", ["Um pedaço de texto processado pelo modelo", "Uma moeda digital", "Um tipo de senha", "Um aplicativo", "Um idioma"], 0], ["Qual foi um dos primeiros chatbots, criado nos anos 1960?", ["GPT-3", "Siri", "ELIZA", "Alexa", "Gemini"], 2]];
const respostas = new Array(PERGUNTAS.length).fill(null);
let atual = 0;
const $ = id => document.getElementById(id);

function mostrarUltimo() {
  try {
    const r = JSON.parse(localStorage.getItem("ultimoResultado"));
    if (r) { $("ultimo").hidden = false; $("ultimo").textContent = `Último resultado: ${r.acertos} acertos, ${r.erros} erros (${r.pct}%) em ${r.data}.`; }
  } catch (e) {}
}
function render() {
  const [q, ops] = PERGUNTAS[atual];
  $("pergunta").textContent = `${atual + 1}. ${q}`;
  $("opcoes").innerHTML = "";
  ops.forEach((t, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "btn btn-outline-primary text-start opcao" + (respostas[atual] === i ? " active" : "");
    b.textContent = "ABCDE"[i] + ") " + t;
    b.onclick = () => { respostas[atual] = i; $("aviso").textContent = ""; render(); };
    $("opcoes").appendChild(b);
  });
  const n = respostas.filter(r => r !== null).length;
  $("prog-txt").textContent = `Pergunta ${atual + 1} de ${PERGUNTAS.length}`;
  $("resp-txt").textContent = `${n} respondida(s)`;
  $("prog").style.width = `${(n / PERGUNTAS.length) * 100}%`;
  $("voltar").disabled = atual === 0;
  const ultima = atual === PERGUNTAS.length - 1;
  $("avancar").hidden = ultima;
  $("finalizar").hidden = !ultima;
}
$("voltar").onclick = () => { atual--; render(); };
$("avancar").onclick = () => { atual++; render(); };
$("finalizar").onclick = () => {
  const faltam = respostas.map((r, i) => r === null ? i + 1 : null).filter(Boolean);
  if (faltam.length) { $("aviso").textContent = `Responda todas as perguntas. Faltam: ${faltam.join(", ")}.`; return; }
  const acertos = respostas.filter((r, i) => r === PERGUNTAS[i][2]).length;
  const erros = PERGUNTAS.length - acertos;
  const pct = Math.round((acertos / PERGUNTAS.length) * 100);
  const msg = acertos <= 4 ? "Reforce seus estudos! Você pode melhorar seu conhecimento sobre o tema."
    : acertos <= 7 ? "Bom desempenho! Você demonstrou um bom conhecimento."
    : "Excelente! Você domina muito bem o assunto.";
  try { localStorage.setItem("ultimoResultado", JSON.stringify({ acertos, erros, pct, data: new Date().toLocaleDateString("pt-BR") })); } catch (e) {}
  $("quiz").hidden = true;
  $("resultado").hidden = false;
  $("resultado").innerHTML = `<h2>Resultado</h2><p class="fs-5 mb-1">Acertos: <strong>${acertos}</strong> · Erros: <strong>${erros}</strong></p><p class="fs-5">Aproveitamento: <strong>${pct}%</strong></p><p>${msg}</p><button class="btn btn-primary" onclick="location.reload()">Refazer o questionário</button>`;
};
mostrarUltimo();
render();
