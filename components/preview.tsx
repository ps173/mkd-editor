import marked from "marked";
import React, { useState, useEffect } from "react";
interface Props {
  text: string;
}

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
      ></div>
    </>
  );
};

export default Preview;
