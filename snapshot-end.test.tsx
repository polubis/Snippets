import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button can be used when: ', () => {
  it('renders with default props', () => {
    // I'm using here snapshots to prevent any regression.
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders content', () => {
    // Here I'm checking one particular feature of button.
    render(
      <Button>
        Click Me! <b>please</b>
      </Button>
    );

    screen.getByText(/Click Me!/);
    screen.getByText(/please/);
  });

  it('[FRAGILE] assigns class names by properties', () => {
    // This test is fragile but prevents me from wrong class names generation.
    const { container } = render(
      <Button
        className="my-button"
        shape="rounded"
        size={2}
        variant="outlined"
        motive="secondary"
      />
    );

    const button = container.querySelector('.button');

    expect(button?.className).toBe(
      'button button-size-2 button-rounded button-outlined button-secondary my-button'
    );
  });

  it('injects native button properties', () => {
    // This tests only one feature - option to pass native button props.
    render(<Button role="button">Click me!</Button>);

    screen.getByRole('button');
  });
});
