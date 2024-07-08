import React from "react";

export const Footer = () => {
  // return React.createElement("footer", null, "We're currently open!");
  return (
    <footer>{new Date().toLocaleTimeString()} We&apos;re currently open</footer>
  );
};
