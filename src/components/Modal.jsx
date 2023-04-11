import React from 'react';
import "../styles/Modal.css";

function Modal({ project, onClose }) {
    return (
    <div className="modal">
        <div className="modal-content">
        <img src={project.img} alt={project.project} />
        <div className="modal-text">
            <h3>{project.project}</h3>
            <p>{project.description}</p>
            <p><span>{project.category}</span></p>
            <a href={project.link} target='_blank'>V</a>
        </div>
        <button className="close-button" onClick={onClose}>
            X
        </button>
        </div>
    </div>
    );
}

export default Modal;
