import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function CallToAction() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section className={`${isDarkMode ? "cta cta--dark" : "cta"}`}>
      <div className="container">
        <h2>Get started today!</h2>
        <p>Sign up now for a free trial and start using our service.</p>
        <button className="btn btn-primary">Sign up</button>
      </div>
    </section>
  );
}

export default CallToAction;
