import React from "react";

export default function Header({appName}) {
  return (
    <header className="header">
        <h1>{appName}</h1>
    </header>
  );
}