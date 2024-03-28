import { useState } from "react";
import "./App.css";
import axios from "axios";
import { BundledCode, CodeEditor } from "./components";

function App() {
  const [userCode, setUserCode] = useState(null);
  const [bundledCode, setBundledCode] = useState(null);

  const handleUserCodeChange = (value) => {
    console.log(value);
    setUserCode(value);
  };

  const handleCodeBundling = async () => {
    try {
      const result = transpileUserCode(userCode, {
        presets: ["@babel/preset-env"], // Use the preset for modern JavaScript
      });

      if (result && result.code) {
        setBundledCode(result.code);
      } else {
        console.error("Babel transpilation failed.");
        // You can handle this error case as needed (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error during Babel transpilation:", error);
      // Handle other errors (e.g., syntax errors in user code)
    }
  };
  async function transpileUserCode(userCode) {
    try {
      const response = await axios.post("https://babeljs.io/repl/compile", {
        code: userCode,
        presets: "env", // Use the 'env' preset for modern JavaScript
      });

      if (response.data && response.data.code) {
        return response.data.code;
      } else {
        console.error("Babel transpilation failed.");
        return null;
      }
    } catch (error) {
      console.error("Error during Babel transpilation:", error);
      return null;
    }
  }
  return (
    <div className="app-container">
      <h1>Bundlers Paradise</h1>
      <div className="view-container">
        <CodeEditor handleUserCodeChange={handleUserCodeChange}>
          <select onChange={(e) => console.log(e.target.value)}>
            <option>Rollup</option>
            <option>Babel</option>
            <option>Webpack</option>
          </select>
        </CodeEditor>
        <BundledCode bundledCode={bundledCode}>
          <button onClick={() => handleCodeBundling()}>Bundle!</button>
        </BundledCode>
      </div>
    </div>
  );
}

export default App;
