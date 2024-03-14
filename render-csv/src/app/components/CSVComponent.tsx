// ChatGPT components/CSVComponent.tsx
import React from 'react';

const CSVComponent: React.FC = () => {
  return (
    <div>
      <h1>CSV Data</h1>
      <a href="/data.csv" download>Download CSV</a>
    </div>
  );
};

export default CSVComponent;
