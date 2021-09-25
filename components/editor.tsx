import React, { Dispatch, SetStateAction } from "react";
// import CodeMirror from "@uiw/react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/duotone-dark.css";
import "codemirror/theme/3024-night.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/ayu-mirage.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/markdown/markdown";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { saveAs } from "file-saver";

const colorschemes = [
  "material-palenight",
  "monokai",
  "base16-dark",
  "dracula",
  "duotone-dark",
  "3024-night",
  "cobalt",
  "ayu-dark",
  "ayu-mirage",
];
const RandomColorscheme =
  colorschemes[Math.floor(Math.random() * colorschemes.length)];

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  colorscheme?: string;
}
const Editor: React.FC<Props> = ({ text, setText, colorscheme }) => {
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

  const options = {
    lineNumbers: true,
    theme: RandomColorscheme, // for random colorschemes
    mode: "markdown",
    autofocus: true,
    spellcheck: true,
  };

  return (
    <div className="editor-area">
      <CodeMirror
        value={text}
        options={options}
        onChange={(_editor, _data, val) => handleChange(val)}
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
