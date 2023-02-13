import { ReactComponent as IconSun } from '../../assets/icons/icon-sun.svg';
import { ReactComponent as IconMoon } from '../../assets/icons/icon-moon.svg';

function ThemeBtn({ theme, icon, alt }) {
  return (
    <button className="header__theme-btn">
      {theme}{' '}
      {theme === 'dark' ? (
        <IconMoon className="header__theme-btn-icon" />
      ) : (
        <IconSun className="header__theme-btn-icon" />
      )}
    </button>
  );
}

export default ThemeBtn;
