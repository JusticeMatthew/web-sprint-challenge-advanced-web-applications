import React from 'react';
import { render, screen } from '@testing-library/react';
import BubblePage from './BubblePage';
import ColorList from './ColorList';
import Bubbles from './Bubbles';

const testColors = [
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff',
    },
    id: 1,
  },
];

test('Renders BubblePage without errors', () => {
  // Finish this test
  render(<BubblePage colorList={testColors} />);
});

test('Fetches data and renders the bubbles on mounting', async () => {
  // Finish this test
  render(<ColorList colors={testColors} />);
  render(<Bubbles colors={testColors} />);

  const colors = await screen.findByText(/aliceblue/i);
  const bubs = await screen.findByTestId('bubbles');
  expect(colors).toBeInTheDocument();
  expect(bubs).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
