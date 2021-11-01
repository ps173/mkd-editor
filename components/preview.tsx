import marked from "marked";
import React, { useCallback } from "react";
import hljs from "highlight.js";
// import "highlight.js/styles/base16/github-dark.css";

interface Props {
  text: string;
}

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

const Preview: React.FC<Props> = ({ text }) => {
  const loadChanges = useCallback(() => {
    return marked(text);
  }, [text]);

  return (
    <>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: loadChanges() }}
      ></div>
    </>
  );
};

export default Preview;
