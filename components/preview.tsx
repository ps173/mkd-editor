import marked from "marked";
import React, { useEffect, useState } from "react";
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
  const [shownmarkdown, setShownmarkdown] = useState(marked(text));
  useEffect(() => {
    setShownmarkdown(marked(text));
  }, [text]);

  return (
    <>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: shownmarkdown }}
      >
      </div>
    </>
  );
};

export default Preview;
