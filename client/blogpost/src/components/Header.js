import React from "react";

export default function Header({appName, showForm, onAddClick}) {
  return (
    <header className="header">
        <h1>{appName}</h1>
    </header>
  );
}