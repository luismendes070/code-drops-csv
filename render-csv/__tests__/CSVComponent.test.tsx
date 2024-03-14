// ChatGPT components/__tests__/CSVComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import CSVComponent from '../CSVComponent';

describe('CSVComponent', () => {
  it('renders CSV data with correct headers', () => {
    render(<CSVComponent />);
    
    const csvLink = screen.getByText('Download CSV');
    expect(csvLink).toBeInTheDocument();
    
    expect(csvLink).toHaveAttribute('href', '/data.csv');
    expect(csvLink).toHaveAttribute('download');
  });
});
