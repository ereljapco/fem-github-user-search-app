function switchTheme(theme) {
  const root = document.querySelector(':root');

  if (theme === 'light') {
    root.classList.add('light');
    return;
  }

  root.classList.remove('light');
}

export default switchTheme;
