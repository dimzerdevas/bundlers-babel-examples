import PropTypes from "prop-types";
import MonacoEditor from "@monaco-editor/react";
import "./style.css";

// eslint-disable-next-line react/prop-types
export const BundledCode = ({ bundledCode, children }) => {
  return (
    <div className="bundler-container">
      {children}
      <div className="bundler">
        <MonacoEditor
          height="500px"
          language="javascript"
          theme="vs-dark"
          value={bundledCode}
          options={{
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
    </div>
  );
};

BundledCode.PropTypes = {
  bundledCode: PropTypes.string,
  children: PropTypes.element,
};
