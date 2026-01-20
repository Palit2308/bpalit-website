<script>
  const openBtn = document.querySelector('.chat-open');
  const closeBtn = document.querySelector('.chat-close');
  const chatWindow = document.querySelector('.chat-window');

  openBtn.addEventListener('click', () => {
    chatWindow.hidden = false;
  });

  closeBtn.addEventListener('click', () => {
    chatWindow.hidden = true;
  });
</script>