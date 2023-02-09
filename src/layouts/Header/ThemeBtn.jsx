function ThemeBtn({ theme, icon, alt }) {
  return (
    <button className="header__theme-btn">
      {theme} <img src={icon} alt={alt} />
    </button>
  );
}

export default ThemeBtn;
