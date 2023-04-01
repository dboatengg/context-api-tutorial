import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function About() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section className={`${isDarkMode ? "about about--dark" : "about"}`}>
      <div className="container">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          enim eu velit rhoncus venenatis. Donec sed tristique dolor, eu egestas
          sapien. Sed id eros eu nisi iaculis euismod. Pellentesque posuere
          metus eu libero feugiat, in convallis est feugiat.
        </p>
        <p>
          Phasellus maximus malesuada risus, vitae euismod metus bibendum et.
          Nunc vulputate quam in leo dignissim malesuada. Nam dapibus odio eu
          dolor suscipit, ac sollicitudin lorem ultrices. Duis malesuada tellus
          non diam fringilla, id hendrerit tellus congue. Vivamus vel lacus
          auctor, malesuada magna vel, auctor mauris.
        </p>
      </div>
    </section>
  );
}

export default About;
