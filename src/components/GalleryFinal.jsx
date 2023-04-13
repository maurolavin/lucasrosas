import React, { useState } from 'react';
import data from './data.json';
import "../styles/Gallery.css";
import "../styles/Modal.css";
import ImageGrid from './ImageGrid';

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = selectedCategory === 'all' 
    ? data 
    : data.filter(project => project.category === selectedCategory);

    function handleCategoryClick(category) {
    setSelectedCategory(category);
    }

    function handleModalOpen(project) {
    setSelectedProject(project);
    }

    function handleModalClose() {
    setSelectedProject(null);
    }

    <style>
    {
        `.gallery-item{
            background-image:url({projects.img});
            color: white;
        }`
    }
    </style>
    return (
    <div>
        <div className="category-buttons">
            <p className='category-sortby'>sort by</p>
            <button onClick={() => handleCategoryClick('all')} className="category-button">all</button>
            <button onClick={() => handleCategoryClick('music-video')} className="category-button">/ music videos </button>
            <button onClick={() => handleCategoryClick('album-concept')} className="category-button">/ album concept video </button>
            <button onClick={() => handleCategoryClick('documental')} className="category-button">/ documental</button>
        </div>
        <div className="gallery">
        {filteredProjects.map((project) => (
            <div key={project.ID} className="gallery-item" style={{ backgroundImage: `url(${project.img})` }} onClick={() => handleModalOpen(project)}>
                    <div className='project-text'>
                        <h3 className='gallery-item-h3'>{project.project}</h3>
                        <p className='gallery-item-p'>{project['project-title']}</p>
                    </div>
            </div>
        ))}
        </div>
        {selectedProject && (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleModalClose}>
                    &times;
                </span>
                <div className='modalVideoContainer'>
                <iframe src={selectedProject.embed} alt={selectedProject.description} frameborder="0" allow="fullscreen"/>
                </div>
                <div className='modalTextContainer'>
                    <h2 className='modal-project'>{selectedProject.project}</h2>
                    <p>{selectedProject.description}</p>
                    <a className="modal-watch" href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <strong>Ver</strong>
                    </a>
                    <div>
                        <ImageGrid frames={selectedProject.frames} className="modalFrames"/>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
    );
}

export default Gallery;
