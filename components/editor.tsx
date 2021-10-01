import React, { Dispatch, SetStateAction } from "react";
// import CodeMirror from "@uiw/react-codemirror";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/ext-language_tools";
import { saveAs } from "file-saver";

const Themes = [
  "dracula",
  "tomorrow_night",
  "nord_dark",
  "monokai",
  "solarized_dark",
  "gruvbox",
  "idle_fingers",
  "terminal",
];

// super secret easter egg
const CurrentTheme = localStorage.getItem("colorscheme")
  ? localStorage.getItem("colorscheme")!.toString()
  : Themes[Math.floor(Math.random() * Themes.length)];

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}
const Editor: React.FC<Props> = ({ text, setText }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fr = new FileReader();
    fr.onload = () => {
      if (fr.result != null) {
        setText(fr.result.toString());
      }
    };
    if (e.target.files != null) {
      fr.readAsText(e.target.files[0]);
    }
  };

  const handleChange = (val: string) => {
    setText(val);
  };

  const handleClick = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "gen.md");
  };

  return (
    <div className="editor-area">
      <AceEditor
        value={text}
        mode="markdown"
        height="100%"
        fontSize={20}
        width="100%"
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        onChange={(val) => {
          handleChange(val);
        }}
        theme={CurrentTheme}
        className="full-height"
      />
      <input
        type="file"
        accept="/*.md/"
        className="Fileinput"
        onChange={(e) => handleFileChange(e)}
      />
      <div className="FakeFileInput">Upload Files</div>
      <button onClick={handleClick}>Save the files</button>
    </div>
  );
};

export default Editor;
