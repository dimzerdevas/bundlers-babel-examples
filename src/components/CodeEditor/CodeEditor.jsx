import MonacoEditor from "@monaco-editor/react";
import PropTypes from "prop-types";
import "./style.css";

export const CodeEditor = ({ userCode, handleUserCodeChange, children }) => {
  return (
    <div className="editor-container">
      {children}
      <div className="editor">
        <MonacoEditor
          height="500px"
          language="javascript"
          theme="vs-dark"
          value={userCode}
          options={{
            minimap: {
              enabled: false,
            },
          }}
          onChange={handleUserCodeChange}
        />
      </div>
    </div>
  );
};

CodeEditor.propTypes = {
  userCode: PropTypes.string,
  handleUserCodeChange: PropTypes.func,
  children: PropTypes.elementType,
};
