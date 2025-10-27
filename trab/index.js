<script>
  const video = document.getElementById('meuVideo');
  const duracaoMaxima = 120; // 2 minutos * 60 segundos/minuto = 120 segundos

  // Adiciona um "listener" para o evento de reprodução de tempo
  video.addEventListener('timeupdate', function() {
    // Verifica se o tempo atual de reprodução atingiu a duração máxima
    if (video.currentTime >= duracaoMaxima) {
      video.pause(); // Pausa o vídeo
      video.currentTime = duracaoMaxima; // Garante que ele pare em 2:00

      // Opcional: Remova os controles se quiser que o usuário não possa mais dar play
      // video.removeAttribute('controls'); 
    }
  });
</script>