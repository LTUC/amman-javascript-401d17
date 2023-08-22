import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Class Component/i);
  expect(linkElement).toBeInTheDocument();
});


it('Having the name of the person', async () => {
  render(<App />);
  const personName = await waitFor(()=> screen.getByTestId('name'));
  // console.log(personName)
  expect(personName.textContent).toBe('Hello my name is: Ihab')
});

test('Can Count', () => {
  render(<App />);
  const increaseButton = screen.getByTestId('increaseBtn');
  const counterValue = screen.getByTestId('updated-counter');

  fireEvent.click(increaseButton);

  expect(counterValue.textContent).toBe('Counter: 1');

})

test('Check id Divisible', () => {
  render(<App />);
  const increaseButton = screen.getByTestId('increaseBtn');
  const counterValue = screen.getByTestId('updated-counter');
  const divisible = screen.getByTestId('divisible');

  for(let i = 0; i < 10; i++) {
    fireEvent.click(increaseButton);
  }

  expect(divisible.textContent).toBe('Divisible: Yes');

})

test('Change the name of the person', async () => {
  render(<App />);
  const personName = await waitFor(()=> screen.getByTestId('name'));
  const nameInput = screen.getByTestId('person-name');
  fireEvent.change(nameInput, {
    target : { value: 'Sham' }
  })
  // console.log(personName)
  expect(personName.textContent).toBe('Hello my name is: Sham')
})