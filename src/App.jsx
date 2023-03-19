import { createContext, useState } from "react";
import GrandChhild from "./components/GrandChild";

export const AppContext = createContext(null);

const App = () => {
  const [text, setText] = useState("");
  return (
    <AppContext.Provider value={{ setText }}>
      <div>
        <GrandChhild />
        <h1>{text}</h1>
      </div>
    </AppContext.Provider>
  );
};

export default App;
