document.addEventListener("DOMContentLoaded", function () {
  // Inicializa o EmailJS com a sua API Key
  emailjs.init("vRAH9FcS44mB2e93F"); // Substitua pela sua API Key

  // Captura o envio do formulário
  document
    .getElementById("form-contato")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Evita o envio padrão do formulário

      // Captura os dados do formulário
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;

      // Envia os dados para o EmailJS
      emailjs
        .send("ecobalanco_service", "ecobalanco_template", {
          nome: nome,
          email: email,
          mensagem: mensagem,
        })
        .then(
          function (response) {
            alert("Mensagem enviada com sucesso!");
          },
          function (error) {
            console.error("Erro ao enviar a mensagem:", error);
            alert("Erro ao enviar a mensagem: " + (error.text || JSON.stringify(error)));
          }
        );
    });
});
