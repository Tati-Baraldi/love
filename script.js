// Função para calcular o tempo desde a data inicial
function calculateTimeDifference(startDate) {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { years, months, days, hours, minutes, seconds };
}

// Data de início (data do encontro, ou outra data relevante)
const startDate = new Date("2024-07-21");

// Função para mostrar a contagem do tempo e a mensagem
function updateTimeAndMessage() {
  const { years, months, days, hours, minutes, seconds } = calculateTimeDifference(startDate);
  document.getElementById("time-together").innerText = `Já se passaram ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos desde que nos conhecemos!`;

  // Exibe o conteúdo automaticamente após o carregamento da página
  document.getElementById("message-container").style.display = "block";
}

// Atualizar a contagem do tempo a cada segundo
setInterval(updateTimeAndMessage, 1000);

// Chamar a função ao carregar a página
window.onload = () => {
  // Remove a classe container (não parece ser necessário, mas está no código original)
  document.body.classList.remove("container");

  // Exibe a mensagem automaticamente assim que a página carrega
  updateTimeAndMessage();
};

// Código da música e controle de play/pause (corrigido)
const audio = document.getElementById("music");
const playPauseBtn = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");

let isDragging = false;  // Variável para controlar se o usuário está arrastando

// Função para atualizar o tempo do áudio com base na posição da barra de progresso
function updateAudioTime() {
  if (isDragging) {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
}

// Evento quando o usuário clica na barra de progresso (começo do arrasto)
progressBar.addEventListener("mousedown", () => {
  isDragging = true;
});

// Evento quando o usuário solta o mouse (final do arrasto)
progressBar.addEventListener("mouseup", () => {
  isDragging = false;
  updateAudioTime(); // Atualiza o tempo final quando o mouse é liberado
});

// Para garantir que a posição da barra de progresso também seja atualizada durante o movimento
progressBar.addEventListener("mousemove", () => {
  if (isDragging) {
    progressBar.value = (audio.currentTime / audio.duration) * 100; // Atualiza a barra durante o arrasto
  }
});

// Atualiza a barra de progresso e o tempo mostrado
audio.addEventListener("timeupdate", () => {
  if (!isDragging) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeDisplay.textContent = `${Math.floor(audio.currentTime / 60)}:${String(Math.floor(audio.currentTime % 60)).padStart(2, '0')}`;
  }
});

// Atualiza o tempo quando o valor da barra de progresso muda diretamente
progressBar.addEventListener("input", updateAudioTime);

// Adicionando o controle de play/pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Altera o ícone para "pause"
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Altera o ícone para "play"
  }
});

document.getElementById("redirect-button").addEventListener("click", function() {
  window.location.href = "flor.html";  // Altere para o caminho da página desejada
});

document.getElementById("redirect-butt").addEventListener("click", function() {
  window.location.href = "index.html";  // Altere para o caminho da página desejada
});

