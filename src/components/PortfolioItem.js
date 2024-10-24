import React from 'react';

const PortfolioItem = ({ project }) => {
  return (
    <>
    
  

    <div className="portfolio-item">
    
      <img src={project.imageUrl} alt={project.title} />

      <div className="info">
        <div className='hea'>   {project.title}  </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Website</a>

      </div>
    </div>
    </>
  );
};

export default PortfolioItem;
