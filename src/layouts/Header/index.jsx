import '../../assets/styles/header.css';
import ThemeBtn from './ThemeBtn';
import iconSun from '../../assets/icons/icon-sun.svg';
import iconMoon from '../../assets/icons/icon-moon.svg';

function Header({ theme, setTheme }) {
  function toggleTheme(theme) {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }

    setTheme('dark');
    return;
  }

  return (
    <header className="header">
      <h1 className="header__title">devfinder</h1>
      <div className="c-theme-btn" onClick={() => toggleTheme(theme)}>
        {theme === 'dark' ? (
          <ThemeBtn theme={'light'} icon={iconSun} alt={'Light'} />
        ) : (
          <ThemeBtn theme={'dark'} icon={iconMoon} alt={'Dark'} />
        )}
      </div>
    </header>
  );
}

export default Header;
