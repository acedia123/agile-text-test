import React from "react";

export default function Dialog({ open, title, onClose, children, onSubmit }) {
  return (
    <div id="myModal" className={"modal " + (open && "open-modal")}>
      <div className="modal-content">
        <div className="modal-header">
          <span class="close" onClick={onClose}>
            &times;
          </span>
          <span className="modal-title">{title}</span>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={onSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
}
