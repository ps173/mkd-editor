import React from "react";

const Navbar: React.FC = () => {
  return <>
    <div className="Navbar">
      <h1 className="Title-Logo">MKD-EDITOR</h1>
      <div className="Links">
        <ul>
          <li>
            <a href="mailto:prathamsharma173@gmail.com">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  </>;
};

export default Navbar;
