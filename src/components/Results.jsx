import React from 'react';
import ResultDisplay from './ResultDisplay';

const Results = ({ results, onSelection }) => {
  const resultArr = results.map((result) => (
    <ResultDisplay key={result.surflineID} details={result} onSelection={onSelection} />
  ));

  return (
    <div id="search-result-container">
      {resultArr.length > 0 ? resultArr : <p>No results found</p>}
    </div>
  );
};

export default Results;
