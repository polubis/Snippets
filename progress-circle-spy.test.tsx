// We'll use async because we want to await promise.
it('parent component can react when timer ends', async () => {
  const onEndSpy = jest.fn();
  // This code will render component with custom props.
  // The callback will be called after 0.5s (500ms)
  render(<ProgressCircle onEnd={onEndSpy} ms={500} />);

  // This will postpone expect execution (will slightly delay).
  await waitFor(() => {
    expect(onEndSpy).toHaveBeenCalledTimes(1);
  });
});
