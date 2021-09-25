import React, { Dispatch, SetStateAction } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdownLanguage } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import { saveAs } from "file-saver";

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
      <CodeMirror
        value={text}
        theme="dark"
        height="800px"
        lang="markdown"
        onChange={(val) => handleChange(val)}
        extensions={[markdownLanguage, oneDark]}
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
