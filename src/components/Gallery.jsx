import React from 'react';
import { useState } from 'react';
import data from './data.json';
import Modal from './Modal';
import "../styles/Gallery.css";

function Gallery() {
    const [projects, setProjects] = useState(data);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleViewDetails = (project) => {
    setSelectedProject(project);
    };

    const handleCloseModal = () => {
    setSelectedProject(null);
    };

    return (
    <div className="gallery">
        {projects.map((project) => (
        <div className="project" key={project.ID}>
            <a onClick={() => handleViewDetails(project)}>
                <img src={project.img} alt={project.project} />
                <h3>{project.project}</h3>
                <p>{project['project-title']}</p>
            </a>
        </div>
        ))}
        {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
        )}
    </div>
    );
}

export default Gallery;
