import React from "react";

function activeAnnouncement() {
  console.log("im active!!");
}

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>top</li>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
