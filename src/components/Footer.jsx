import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer className={`${isDarkMode ? "footer footer--dark" : "footer"}`}>
      <div className="container">
        <p>&copy; 2023 React Project. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
