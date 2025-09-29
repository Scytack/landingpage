document.addEventListener("DOMContentLoaded", () => {
  // Botão de matrícula
  const botao = document.querySelector("#matricula");
  if (botao) {
    botao.addEventListener("click", () => {
      alert("Obrigado por se matricular! Entraremos em contato em breve.");
    });
  }


  const latitude = -21.7505321;
  const longitude = -43.3622038;

  const map = L.map('map').setView([latitude, longitude], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map)
    .bindPopup('<b>Academia SportFit</b><br>Rua Benjamim Guimarães, 315')
    .openPopup();



  const atividades = document.querySelectorAll(".atividade");
  const descricaoBox = document.getElementById("descricaoAtividade");
  const textoDescricao = document.getElementById("textoDescricao");
  const fecharBtn = document.getElementById("fecharDesc");

  atividades.forEach(item => {
    item.addEventListener("click", () => {
      textoDescricao.innerText = item.getAttribute("data-desc");
      descricaoBox.style.display = "block";
    });
  });

  fecharBtn.addEventListener("click", () => {
    descricaoBox.style.display = "none";


});
});
