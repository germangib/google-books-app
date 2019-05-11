import React from "react";

export function List({ children }) {
  return (
    <div className="list-overflow-container mt-2">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
