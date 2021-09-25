import React from "react";

const Navbar: React.FC = () => {
  return <>
    <div className="Navbar">
      <h1 className="Title-Logo">MKD-EDITOR</h1>
      <div className="Links">
        <ul>
          <li>
            <a href="https://github.com/ps173/mkd-editor">Check On Github</a>
          </li>
        </ul>
      </div>
    </div>
  </>;
};

export default Navbar;
