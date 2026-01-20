<script>
  document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.querySelector('.chat-window');
    const chatMin = document.querySelector('.chat-min');
    const openBtn = document.querySelector('.chat-open');

    // Open from teaser
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        chatWindow.hidden = false;
        chatMin.hidden = true;
      });
    }

    // One click handler for both close + min button (reliable)
    document.addEventListener('click', (e) => {
      // Close button (X)
      if (e.target.closest('.chat-close')) {
        chatWindow.hidden = true;
        chatMin.hidden = false;
      }

      // Minimized A button
      if (e.target.closest('.chat-min')) {
        chatWindow.hidden = false;
        chatMin.hidden = true;
      }
    });
  });
</script>