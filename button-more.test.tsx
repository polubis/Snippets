it('assigns class names by properties', () => {
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

  // It's ugly. If the order of classes changes - it will fail but
  // on UI it may looks good - false negative case.
  expect(button?.className).toBe(
    'button button-size-2 button-rounded button-outlined button-secondary my-button'
  );
});

it('injects native button properties', () => {
  render(<Button role="button">Click me!</Button>);

  screen.getByRole('button');
});
