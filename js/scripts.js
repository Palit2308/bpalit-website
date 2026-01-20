<script>
  const openBtn = document.querySelector('.chat-open');
  const closeBtn = document.querySelector('.chat-close');
  const chatWindow = document.querySelector('.chat-window');
  const chatMin = document.querySelector('.chat-min');

  // Open from teaser card
  openBtn.addEventListener('click', () => {
    chatWindow.hidden = false;
    chatMin.hidden = true;
  });

  // Close (minimize) from X
  closeBtn.addEventListener('click', () => {
    chatWindow.hidden = true;
    chatMin.hidden = false;
  });

  // Reopen from minimized "A"
  chatMin.addEventListener('click', () => {
    chatWindow.hidden = false;
    chatMin.hidden = true;
  });
</script>