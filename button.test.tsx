import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button can be used when: ', () => {
  it('renders content', () => {
    const text = 'Click Me!';

    render(<Button>{text}</Button>);

    screen.getByText(text);
  });
});
