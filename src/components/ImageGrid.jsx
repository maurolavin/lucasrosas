import React from 'react';

function ImageGrid({ frames }) {
    return (
    <div className="image-grid">
        {frames.map((frameUrl) => (
        <div key={frameUrl} style={{ backgroundImage: `url(${frameUrl})` }} alt="frame" className='image-grid-img'/>
    ))}
    </div>
);
}

export default ImageGrid;