import MonacoEditor from "@monaco-editor/react";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Bundlers Paradise</h1>
      <div className="actions">
        <select onChange={(e) => console.log(e.target.value)}>
          <option>Rollup</option>
          <option>Babel</option>
          <option>Webpack</option>
        </select>
        <button onClick={() => console.log("bundle")}>Bundle!</button>
      </div>
      <div className="editor-container">
        <div className="editor">
          <MonacoEditor
            height="500px"
            language="javascript"
            theme="vs-dark"
            value="// Start typing your code here..."
            options={{
              minimap: {
                enabled: false,
              },
            }}
          />
        </div>
        <div className="editor">
          <MonacoEditor
            height="500px"
            language="javascript"
            theme="vs-dark"
            value="// Start typing your code here..."
            options={{
              minimap: {
                enabled: false,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
