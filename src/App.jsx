import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { ThemeContext } from "./ThemeContext";

import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Header />
        <Hero />
        <About />
        <CallToAction />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
