import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('framer-motion', () => {
  const React = require('react');
  const motionProps = new Set(['animate', 'initial', 'variants', 'custom', 'whileInView', 'viewport', 'transition']);

  const createMotionComponent = (tag) =>
    React.forwardRef(({ children, ...props }, ref) => {
      const domProps = Object.fromEntries(Object.entries(props).filter(([key]) => !motionProps.has(key)));
      return React.createElement(tag, { ...domProps, ref }, children);
    });

  return {
    motion: new Proxy(
      {},
      {
        get: (_target, tag) => createMotionComponent(tag),
      },
    ),
  };
});

test('renders the portfolio landing page', () => {
  render(<App />);
  expect(screen.getByText(/Software Engineer & Cybersecurity Bug Hunter/i)).toBeInTheDocument();
  expect(screen.getByText(/My Projects/i)).toBeInTheDocument();
});
