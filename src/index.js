window.addEventListener('keydown', async (e) => {
  const isShortcutPressed = e.ctrlKey && e.code === 'KeyV';
  const isInputFocused = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
  if (!isShortcutPressed || isInputFocused) return;

  e.preventDefault();
  const clipboardText = await navigator.clipboard.readText();
  const searchParams = new URLSearchParams(location.search);
  searchParams.set('q', clipboardText);
  location.assign(`/search?${searchParams.toString()}`);
});
