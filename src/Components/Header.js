const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((prevToggleMode) => !prevToggleMode)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
