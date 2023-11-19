import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toBeInTheDocument();
  expect(initialCount.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const incrementCounter = screen.getByText('+');
  const getCount = screen.getByTestId("count");
  const countValue = parseInt(getCount.textContent, 10);
  fireEvent.click(incrementCounter);
  expect(parseInt(getCount.textContent, 10)).toBe(countValue + 1);
});

test('clicking - decrements the count', () => {
  const decrementCounter = screen.getByText('-');
  const getCount = screen.getByTestId("count");
  const countValue = parseInt(getCount.textContent, 10);
  fireEvent.click(decrementCounter);
  expect(parseInt(getCount.textContent, 10)).toBe(countValue - 1);
});
