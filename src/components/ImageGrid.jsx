import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';


function ImageGrid({ frames }) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  }

  function handlePrevClick() {
    setCurrentFrameIndex(
      (currentFrameIndex + frames.length - 1) % frames.length
    );
  }

  function handleNextClick() {
    setCurrentFrameIndex((currentFrameIndex + 1) % frames.length);
  }

  return (
    <div className={`image-grid ${isExpanded ? 'expanded' : ''}`}>
      {isExpanded && (
        <div className="image-grid-overlay" onClick={handleExpandClick} />
      )}
      <div className="image-grid-main">
        <img
          className="image-grid-img"
          src={frames[currentFrameIndex]}
          alt="frame"
          onClick={handleExpandClick}
        />
        {frames.length > 1 && (
          <>
            <button
              className="image-grid-button image-grid-button-left"
              onClick={handlePrevClick}
            >
              <FaChevronLeft />
            </button>
            <button
              className="image-grid-button image-grid-button-right"
              onClick={handleNextClick}
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
      {isExpanded && (
        <button
          className="image-grid-expand-button"
          onClick={handleExpandClick}
        >
          <FaExpand />
        </button>
      )}
    </div>
  );
}

export default ImageGrid;
