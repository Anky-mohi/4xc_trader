import React, { useState } from 'react';
import projects from '../components/Projects';
import PortfolioItem from '../components/PortfolioItem';


const PAGE_SIZE = 5; // Number of options per page

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [industryPage, setIndustryPage] = useState(0);
  const [technologyPage, setTechnologyPage] = useState(0);

  const industryOptions = Array.from(new Set(filteredProjects.map(project => project.industry)));
  const technologyOptions = Array.from(new Set(filteredProjects.flatMap(project => project.technologies)));

  const filterByIndustry = (industry) => {
    const filtered = projects.filter((project) => project.industry === industry);
    setFilteredProjects(filtered);
    setIndustryPage(0); // Reset page number when filtering
  };

  const filterByTechnology = (technology) => {
    const filtered = projects.filter((project) =>
      project.technologies.includes(technology)
    );
    setFilteredProjects(filtered);
    setTechnologyPage(0); // Reset page number when filtering
  };

  const handlePrevIndustry = () => {
    if (industryPage > 0) {
      setIndustryPage(industryPage - 1);
    }
  };

  const handleNextIndustry = () => {
    const maxPage = Math.ceil(industryOptions.length / PAGE_SIZE) - 1;
    if (industryPage < maxPage) {
      setIndustryPage(industryPage + 1);
    }
  };

  const handlePrevTechnology = () => {
    if (technologyPage > 0) {
      setTechnologyPage(technologyPage - 1);
    }
  };

  const handleNextTechnology = () => {
    const maxPage = Math.ceil(technologyOptions.length / PAGE_SIZE) - 1;
    if (technologyPage < maxPage) {
      setTechnologyPage(technologyPage + 1);
    }
  };

  const renderOptions = (options, page, handlePrev, handleNext, filterFunction) => {
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const visibleOptions = options.slice(start, end);

    return (
      <div className="filter-buttons">
        {page > 0 && <button onClick={handlePrev}>{"<"}</button>}
        {visibleOptions.map(option => (
          <button key={option} onClick={() => filterFunction(option)}>{option}</button>
        ))}
        {end < options.length && <button onClick={handleNext}>{">"}</button>}
      </div>
    );
  };

  return (
    <div className="portfolio-container">
      
      <h1 className="portfolio-heading">Portfolio</h1>
      <div className="filters">
        <div className="filter-group">
          <h2>By Industry:</h2>
          {renderOptions(industryOptions, industryPage, handlePrevIndustry, handleNextIndustry, filterByIndustry)}
        </div>
        <div className="filter-group">
          <h2>By Technology:</h2>
          {renderOptions(technologyOptions, technologyPage, handlePrevTechnology, handleNextTechnology, filterByTechnology)}
        </div>
      </div>
      <div className="portfolio">
        {filteredProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
